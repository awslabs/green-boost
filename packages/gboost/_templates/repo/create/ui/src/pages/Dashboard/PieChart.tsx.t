---
to: "<%= features.includes(`Demo Dashboard`) ? `ui/src/pages/Dashboard/PieChart.tsx` : null %>"
---

import { ReactElement, useLayoutEffect, useRef } from "react";
import { Root } from "@amcharts/amcharts5";
import { PieChart as amPieChart, PieSeries } from "@amcharts/amcharts5/percent";
import Animated from "@amcharts/amcharts5/themes/Animated";
import { styled } from "gboost-ui";

const data = [
  {
    category: "Lithuania",
    value: 501.9,
  },
  {
    category: "Czechia",
    value: 301.9,
  },
  {
    category: "Ireland",
    value: 201.1,
  },
  {
    category: "Germany",
    value: 165.8,
  },
  {
    category: "Australia",
    value: 139.9,
  },
  {
    category: "Austria",
    value: 128.3,
  },
  {
    category: "UK",
    value: 99,
  },
];

const ChartContainer = styled("div", { width: "100%", height: 400 });

interface PieChartProps {
  id: string;
}

export function PieChart(props: PieChartProps): ReactElement {
  const { id } = props;
  const chartRef = useRef<amPieChart | null>(null);
  useLayoutEffect(() => {
    const root = Root.new(id);
    root.setThemes([Animated.new(root)]);
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    const chart = root.container.children.push(
      amPieChart.new(root, {
        endAngle: 270,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    const series = chart.series.push(
      PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.states.create("hidden", {
      endAngle: -90,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(data);

    series.appear(1000, 100);
    chartRef.current = chart;
    return () => root.dispose();
  });

  // how to update
  // useLayoutEffect(() => {
  //   chartRef.current?.set("paddingRight", props.paddingRight);
  // }, [props.paddingRight]);
  return <ChartContainer id={id} />;
}
