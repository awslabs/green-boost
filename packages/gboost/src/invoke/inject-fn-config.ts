import {
  GetFunctionConfigurationCommand,
  LambdaClient,
} from "@aws-sdk/client-lambda";

const lambdaClient = new LambdaClient({});

interface InjectFnConfigParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dummyContext: Record<string, any>;
  functionArn: string;
}

export async function injectFnConfig(params: InjectFnConfigParams) {
  const { dummyContext, functionArn } = params;
  const response = await lambdaClient.send(
    new GetFunctionConfigurationCommand({ FunctionName: functionArn }),
  );
  process.env = {
    ...response.Environment?.Variables,
    ...process.env, // prioritize user defined env vars over lambda's
  };
  if (response.FunctionName) {
    dummyContext["functionName"] = response.FunctionName;
  }
  if (response.FunctionArn) {
    dummyContext["invokedFunctionArn"] = response.FunctionArn;
  }
  if (response.MemorySize) {
    dummyContext["memoryLimitInMB"] = response.MemorySize.toString();
  }
  if (response.Timeout) {
    dummyContext["getRemainingTimeInMillis"] = () =>
      (response.Timeout as number) * 1000;
  }
}
