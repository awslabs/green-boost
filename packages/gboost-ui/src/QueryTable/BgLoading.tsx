import { type ReactElement } from "react";
import { Loader } from "@aws-amplify/ui-react";

export function BgLoading(): ReactElement {
  return (
    <div
      style={{
        position: "absolute",
        top: 101, // TODO: make dynamic
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Loader
        variation="linear"
        size="small"
        style={{ strokeWidth: 5, height: 5, stroke: "transparent" }}
      />
    </div>
  );
}
