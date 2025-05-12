import type { AxisScale } from "@visx/axis";
import { curveMonotoneX } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";
import { Group } from "@visx/group";
import { useParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime } from "@visx/scale";
import { AreaClosed } from "@visx/shape";
import { extent, max, min } from "@visx/vendor/d3-array";
import React, { useMemo } from "react";
import chartStyle from "@/charts/styles";
import { scaleUpNeatly } from "@/charts/utilities";

type ChildWithSizes = {
  width?: number;
  height?: number;
};

export interface DataPoint {
  x: Date;
  y: number;
}

export interface AreaChartProps {
  data: DataPoint[];
  opacity?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  children?: React.ReactNode;
}

export const AreaChart = ({
  data,
  opacity = 1.0,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  children,
}: AreaChartProps) => {
  const { parentRef, width, height } = useParentSize({ debounceTime: 150 });

  // accessors
  const getX: (d: DataPoint) => number = useMemo(() => (d) => d.x.getTime(), []);
  const getY: (d: DataPoint) => number = useMemo(() => (d) => d.y, []);

  // domain
  const yMin = data.length > 0 ? scaleUpNeatly(min(data, getY) || 0) : 0;
  const yMax = data.length > 0 ? scaleUpNeatly(max(data, getY) || 0) : 0;
  const xDomain: [number, number] =
    data.length > 0
      ? (extent(data, getX) as [number, number])
      : [new Date().getTime() - 86400000, new Date().getTime()]; // Default to last 24 hours if no data
  const yDomain: [number, number] = useMemo(
    () => [Math.min(0, yMin), Math.max(0, yMax)] as [number, number],
    [yMin, yMax],
  );

  // bounds
  const maxWidth = Math.max(width - margin.left - margin.right, 0);
  const maxHeight = Math.max(height - margin.top - margin.bottom, 0);

  // scales
  const xScale: AxisScale<number> = useMemo(
    () =>
      scaleTime<number>({
        range: [0, maxWidth],
        domain: xDomain,
      }),
    [maxWidth, xDomain],
  );

  const yScale: AxisScale<number> = useMemo(
    () =>
      scaleLinear({
        range: [maxHeight, 0],
        domain: yDomain,
        nice: true,
      }),
    [maxHeight, yDomain],
  );

  const getXPlot = (d: DataPoint) => xScale(getX(d)) || 0;
  const getYPlot = () => yScale(0);
  const getY0Plot = (d: DataPoint) => yScale(getY(d)) || 0;

  // Handle empty data case
  if (data.length === 0) {
    return (
      <div
        ref={parentRef}
        style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div>No data available</div>
      </div>
    );
  }

  return (
    <div ref={parentRef} style={{ width: "100%", height: "100%" }}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinearGradient
            id="area-gradient"
            from={chartStyle.colors.primary}
            fromOpacity={opacity}
            to={chartStyle.colors.primaryMediumLight}
            toOpacity={opacity * 0.5}
          />
          <AreaClosed
            data={data}
            x={getXPlot}
            y={getYPlot}
            y0={getY0Plot}
            yScale={yScale}
            strokeWidth={2}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          {React.Children.map(children, (child) =>
            React.isValidElement<ChildWithSizes>(child) ? React.cloneElement(child, { width, height }) : child,
          )}
        </Group>
      </svg>
    </div>
  );
};
