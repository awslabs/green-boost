import { theme } from "../stitches.config.js";
import { Box } from "./index.js";

interface ProgressBarProps {
  barColor?: string;
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { barColor = theme.colors.primary5, progress } = props;
  return (
    <Box
      css={{
        borderRadius: "20px",
        height: "100%",
        width: "100%",
        backgroundColor: theme.colors.gray5,
        border: "1px solid black",
      }}
    >
      <Box
        css={{
          borderRadius: "20px",
          height: "100%",
          width: progress < 3.5 ? `3.5%` : `${progress}%`,
          backgroundColor: barColor,
        }}
      ></Box>
    </Box>
  );
}
