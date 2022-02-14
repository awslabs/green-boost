---
to: "<%= features.includes(`demoDashboard`) ? `ui/src/pages/Dashboard/LineChart.tsx` : null %>"
---

import { ReactElement, useLayoutEffect, useRef } from "react";
import { Root, time, Tooltip, Scrollbar } from "@amcharts/amcharts5";
import {
  AxisRendererX,
  AxisRendererY,
  LineSeries,
  ValueAxis,
  DateAxis,
  XYChart,
  XYCursor,
} from "@amcharts/amcharts5/xy";
import Animated from "@amcharts/amcharts5/themes/Animated";
import { styled } from "gboost-ui/stitches.config";

const date = new Date();
date.setHours(0, 0, 0, 0);
let value = 100;

function generateData() {
  value = Math.round(Math.random() * 10 - 5 + value);
  time.add(date, "day", 1);
  return {
    date: date.getTime(),
    value: value,
  };
}

function generateDatas(count: number) {
  const data = [];
  for (let i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}

const ChartContainer = styled("div", { width: "100%", height: 400 });

interface LineChartProps {
  id: string;
}

export function LineChart(props: LineChartProps): ReactElement {
  const { id } = props;
  const chartRef = useRef<XYChart | null>(null);
  useLayoutEffect(() => {
    const root = Root.new(id);
    root.setThemes([Animated.new(root)]);
    const chart = root.container.children.push(
      XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = chart.set(
      "cursor",
      XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = chart.xAxes.push(
      DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: "day",
          count: 1,
        },
        renderer: AxisRendererX.new(root, {}),
        tooltip: Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      ValueAxis.new(root, {
        renderer: AxisRendererY.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      "scrollbarX",
      Scrollbar.new(root, {
        orientation: "horizontal",
      })
    );

    // Set data
    const data = generateDatas(1200);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    chartRef.current = chart;
    return () => root.dispose();
  });

  // how to update
  // useLayoutEffect(() => {
  //   chartRef.current?.set("paddingRight", props.paddingRight);
  // }, [props.paddingRight]);
  return <ChartContainer id={id} />;
}
