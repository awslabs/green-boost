---
to: "<%= features.includes(`demoDashboard`) ? `ui/src/pages/Dashboard/Dashboard.tsx` : null %>"
---

import { Card, Grid } from "@aws-amplify/ui-react";
import { ReactElement } from "react";
import { styled } from "gboost-ui";
import { ColumnChart } from "./ColumnChart.jsx";
import { LineChart } from "./LineChart.jsx";
import { PieChart } from "./PieChart.jsx";
import { StackedColumnChart } from "./StackedColumnChart.jsx";

const StyledGrid = styled(Grid, {
  bc: "$gray2",
  gap: "$2",
  margin: "$2",
  gridTemplateColumns: "1fr",
  "@bp3": {
    gridTemplateColumns: "1fr 1fr",
  },
});
const StyledCard = styled(Card, { bc: "$gray3" });

export function Dashboard(): ReactElement {
  return (
    <StyledGrid>
      <StyledCard key="columnChart">
        <ColumnChart id="columnChart" />
      </StyledCard>
      <StyledCard key="stackedColumnChart">
        <StackedColumnChart id="stackedColumnChart" />
      </StyledCard>
      <StyledCard key="lineChart">
        <LineChart id="lineChart" />
      </StyledCard>
      <StyledCard key="pieChart">
        <PieChart id="pieChart" />
      </StyledCard>
    </StyledGrid>
  );
}
