import {
  BaseDataSource,
  GraphqlApi,
  GraphqlType,
  InputType,
  MappingTemplate,
  ObjectType,
  ResolvableField,
} from "@aws-cdk/aws-appsync-alpha";

export function createSchema(api: GraphqlApi, dataSource: BaseDataSource) {
  const getUploadURLInput = new InputType("getUploadURLInput", {
    definition: {
      bucket: GraphqlType.string({ isRequired: true }),
      fileName: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(getUploadURLInput);

  // getUploadId, getUploadPartURL, completeUpload, and abortUpload are all used in multipart uploads
  const getUploadIdInput = new InputType("getUploadIdInput", {
    definition: {
      bucket: GraphqlType.string({ isRequired: true }),
      fileName: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(getUploadIdInput);

  const getUploadPartURLInput = new InputType("getUploadPartURLInput", {
    definition: {
      bucket: GraphqlType.string({ isRequired: true }),
      fileName: GraphqlType.string({ isRequired: true }),
      numberOfParts: GraphqlType.int({ isRequired: true }),
      uploadId: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(getUploadPartURLInput);

  const multipartUploadInput = new InputType("multipartUploadInput", {
    definition: {
      ETag: GraphqlType.string({ isRequired: true }),
      PartNumber: GraphqlType.int({ isRequired: true }),
    },
  });
  api.addType(multipartUploadInput);

  const completeUploadInput = new InputType("completeUploadInput", {
    definition: {
      bucket: GraphqlType.string({ isRequired: true }),
      fileName: GraphqlType.string({ isRequired: true }),
      uploadId: GraphqlType.string({ isRequired: true }),
      multipartUpload: multipartUploadInput.attribute({
        isRequired: true,
        isList: true,
      }),
    },
  });
  api.addType(completeUploadInput);

  const abortUploadInput = new InputType("abortUploadInput", {
    definition: {
      bucket: GraphqlType.string({ isRequired: true }),
      fileName: GraphqlType.string({ isRequired: true }),
      uploadId: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(abortUploadInput);

  const uploadURLType = new ObjectType("uploadURLType", {
    definition: {
      url: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(uploadURLType);

  const uploadURLPartType = new ObjectType("uploadURLPartType", {
    definition: {
      urls: GraphqlType.string({ isRequired: true, isList: true }),
    },
  });
  api.addType(uploadURLPartType);

  const uploadIdType = new ObjectType("uploadIdType", {
    definition: {
      uploadId: GraphqlType.string({ isRequired: true }),
    },
  });
  api.addType(uploadIdType);

  const completeUploadType = new ObjectType("completeUploadType", {
    definition: {
      statusCode: GraphqlType.int({ isRequired: true }),
    },
  });
  api.addType(completeUploadType);

  const abortUploadType = new ObjectType("abortUploadType", {
    definition: {
      statusCode: GraphqlType.int({ isRequired: true }),
    },
  });
  api.addType(abortUploadType);

  api.addQuery(
    "getUploadURL",
    new ResolvableField({
      args: { input: getUploadURLInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: uploadURLType.attribute(),
    }),
  );

  api.addQuery(
    "getUploadId",
    new ResolvableField({
      args: { input: getUploadIdInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: uploadIdType.attribute(),
    }),
  );

  api.addQuery(
    "getUploadPartURL",
    new ResolvableField({
      args: { input: getUploadPartURLInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: uploadURLPartType.attribute(),
    }),
  );

  api.addQuery(
    "completeUpload",
    new ResolvableField({
      args: { input: completeUploadInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: completeUploadType.attribute(),
    }),
  );

  api.addQuery(
    "abortUpload",
    new ResolvableField({
      args: { input: abortUploadInput.attribute() },
      dataSource,
      requestMappingTemplate: MappingTemplate.lambdaRequest(),
      responseMappingTemplate: MappingTemplate.lambdaResult(),
      returnType: abortUploadType.attribute(),
    }),
  );
}
