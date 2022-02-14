---
to: "<%= features.includes(`demoDashboard`) ? `ui/src/pages/Dashboard/ColumnChart.tsx` : null %>"
---

import { ReactElement, useLayoutEffect, useRef } from "react";
import { p50, p100, Root, Tooltip } from "@amcharts/amcharts5";
import {
  AxisRendererX,
  AxisRendererY,
  CategoryAxis,
  ColumnSeries,
  ValueAxis,
  XYChart,
  XYCursor,
} from "@amcharts/amcharts5/xy";
import Animated from "@amcharts/amcharts5/themes/Animated";
import { styled } from "gboost-ui/stitches.config";

const data = [
  {
    country: "USA",
    value: 2025,
  },
  {
    country: "China",
    value: 1882,
  },
  {
    country: "Japan",
    value: 1809,
  },
  {
    country: "Germany",
    value: 1322,
  },
  {
    country: "UK",
    value: 1122,
  },
  {
    country: "France",
    value: 1114,
  },
  {
    country: "India",
    value: 984,
  },
  {
    country: "Spain",
    value: 711,
  },
  {
    country: "Netherlands",
    value: 665,
  },
  {
    country: "Russia",
    value: 580,
  },
  {
    country: "South Korea",
    value: 443,
  },
  {
    country: "Canada",
    value: 441,
  },
];

const ChartContainer = styled("div", { width: "100%", height: 400 });

interface ColumnChartProps {
  id: string;
}

export function ColumnChart(props: ColumnChartProps): ReactElement {
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
    const cursor = chart.set("cursor", XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xRenderer = AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: p50,
      centerX: p100,
      paddingRight: 15,
    });

    const xAxis = chart.xAxes.push(
      CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: AxisRendererY.new(root, {}),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", (fill, target) => {
      const colorSet = chart.get("colors");
      if (colorSet && target) {
        // @ts-expect-error wrong typings
        return colorSet.getIndex(series.columns.indexOf(target));
      }
    });

    series.columns.template.adapters.add("stroke", (stroke, target) => {
      const colorSet = chart.get("colors");
      if (colorSet && target) {
        // @ts-expect-error wrong typings
        return colorSet.getIndex(series.columns.indexOf(target));
      }
    });

    xAxis.data.setAll(data);
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
