import { createTheme } from "@aws-amplify/ui-react";

interface StitchesColor {
  value: string;
}

interface StitchesTheme {
  colors: Record<string, StitchesColor>;
}

const amplifyToRadixScale = {
  10: 1,
  20: 3,
  40: 5,
  60: 7,
  80: 9,
  90: 10,
  100: 12,
};

export function getAmplifyTheme(
  t: StitchesTheme
): ReturnType<typeof createTheme> {
  return createTheme({
    name: "gb",
    tokens: {
      colors: {
        brand: {
          primary: Object.entries(amplifyToRadixScale).reduce(
            (prev, [amplify, radix]) => ({
              ...prev,
              [amplify]: t.colors[`primary${radix}`],
            }),
            {}
          ),
          secondary: Object.entries(amplifyToRadixScale).reduce(
            (prev, [amplify, radix]) => ({
              ...prev,
              [amplify]: t.colors[`secondary${radix}`],
            }),
            {}
          ),
        },
      },
    },
  });
}
