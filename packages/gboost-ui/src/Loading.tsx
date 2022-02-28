import { Loader } from "@aws-amplify/ui-react";
import { Box } from "./Box.jsx";

interface LoadingProps {
  logoSrc: string;
}
const imgWidth = 100;
const loaderSize = imgWidth * 2;

export function Loading(props: LoadingProps) {
  const { logoSrc } = props;
  return (
    <Box css={{ display: "flex" }}>
      <Box
        css={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader width={loaderSize} height={loaderSize} />
      </Box>
      <Box
        css={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc} alt="icon" width={imgWidth} />
      </Box>
    </Box>
  );
}
