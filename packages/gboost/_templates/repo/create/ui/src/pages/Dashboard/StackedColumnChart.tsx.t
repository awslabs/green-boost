---
to: "<%= features.includes(`demoDashboard`) ? `ui/src/pages/Dashboard/StackedColumnChart.tsx` : null %>"
---

import { ReactElement, useLayoutEffect, useRef } from "react";
import {
  Bullet,
  Label,
  Legend,
  p50,
  percent,
  Root,
  Tooltip,
} from "@amcharts/amcharts5";
import {
  AxisRendererX,
  AxisRendererY,
  CategoryAxis,
  ColumnSeries,
  ValueAxis,
  XYChart,
} from "@amcharts/amcharts5/xy";
import Animated from "@amcharts/amcharts5/themes/Animated";
import { styled } from "gboost-ui";

const data = [
  {
    year: "2021",
    europe: 2.5,
    namerica: 2.5,
    asia: 2.1,
    lamerica: 1,
    meast: 0.8,
    africa: 0.4,
  },
  {
    year: "2022",
    europe: 2.6,
    namerica: 2.7,
    asia: 2.2,
    lamerica: 0.5,
    meast: 0.4,
    africa: 0.3,
  },
  {
    year: "2023",
    europe: 2.8,
    namerica: 2.9,
    asia: 2.4,
    lamerica: 0.3,
    meast: 0.9,
    africa: 0.5,
  },
];

const ChartContainer = styled("div", { width: "100%", height: 400 });

interface StackedColumnChartProps {
  id: string;
}

export function StackedColumnChart(
  props: StackedColumnChartProps
): ReactElement {
  const { id } = props;
  const chartRef = useRef<XYChart | null>(null);
  useLayoutEffect(() => {
    const root = Root.new(id);
    root.setThemes([Animated.new(root)]);
    const chart = root.container.children.push(
      XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = chart.xAxes.push(
      CategoryAxis.new(root, {
        categoryField: "year",
        renderer: AxisRendererX.new(root, {}),
        tooltip: Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      ValueAxis.new(root, {
        min: 0,
        max: 100,
        numberFormat: "#'%'",
        strictMinMax: true,
        calculateTotals: true,
        renderer: AxisRendererY.new(root, {}),
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    const legend = chart.children.push(
      Legend.new(root, {
        centerX: p50,
        x: p50,
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name: string, fieldName: string) {
      const series = chart.series.push(
        ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          valueYShow: "valueYTotalPercent",
          categoryXField: "year",
        })
      );

      series.columns.template.setAll({
        tooltipText:
          "{name}, {categoryX}:{valueYTotalPercent.formatNumber('#.#')}%",
        tooltipY: percent(10),
      });
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return Bullet.new(root, {
          sprite: Label.new(root, {
            text: "{valueYTotalPercent.formatNumber('#.#')}%",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: p50,
            centerX: p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries("Europe", "europe");
    makeSeries("North America", "namerica");
    makeSeries("Asia", "asia");
    makeSeries("Latin America", "lamerica");
    makeSeries("Middle East", "meast");
    makeSeries("Africa", "africa");

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
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
