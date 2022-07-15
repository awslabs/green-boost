import { theme } from "../stitches.config.js";
import { Box } from "../components/index.js";
import { Text } from "@aws-amplify/ui-react";

interface ProgressBarProps {
  barColor?: string;
  progress: number;
  columnStart?: number;
  columnEnd?: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { barColor = theme.colors.primary5, progress } = props;
  return (
    <Box
      css={{
        borderRadius: "20px",
        height: "100%",
        width: "100%",
        border: "1px solid black",
        minWidth: "40px",
        position: "relative",
      }}
    >
      <Text
        style={{
          position: "absolute",
          left: "50%",
          top: "0%",
          marginLeft: "-125px",
          width: "250px",
        }}
      >
        {progress === 100 ? `Complete` : `${Math.round(progress)}% Uploaded`}
      </Text>
      <Box
        css={{
          borderRadius: "20px",
          height: "100%",
          width: progress > 3.5 ? `${progress}%` : `3.5%`,
          minHeight: "20px",
          minWidth: "20px",
          backgroundColor: barColor,
        }}
      ></Box>
    </Box>
  );
}
