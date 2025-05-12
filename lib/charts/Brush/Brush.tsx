import type { AxisScale } from "@visx/axis";
import { Brush as VisxBrush } from "@visx/brush";
import type BaseBrush from "@visx/brush/lib/BaseBrush";
import type { BrushHandleRenderProps } from "@visx/brush/lib/BrushHandle";
import type { Bounds } from "@visx/brush/lib/types";
import { Group } from "@visx/group";
import { scaleLinear, scaleTime } from "@visx/scale";
import { extent } from "@visx/vendor/d3-array";
import { useCallback, useMemo, useRef } from "react";

import type { DataPoint } from "@/charts/AreaChart";

import chartStyle from "@/charts/styles";

export interface BrushProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  onChange: (domain: Bounds | null) => void;
}

// We need to manually offset the handles for them to be rendered at the right position
function Handle({ x, height, isBrushActive }: BrushHandleRenderProps) {
  const pathWidth = 8;
  const pathHeight = 15;
  if (!isBrushActive) {
    return null;
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path
        fill="#f2f2f2"
        d="M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12"
        stroke="#999999"
        strokeWidth="1"
        style={{ cursor: "ew-resize" }}
      />
    </Group>
  );
}

export const Brush = ({
  data,
  width = 300,
  height = 300,
  margin = { top: 0, bottom: 0, left: 0, right: 0 },
  onChange,
}: BrushProps) => {
  const brushRef = useRef<BaseBrush | null>(null);

  const getX: (d: DataPoint) => number = useCallback((d) => d.x.getTime(), []);
  const getY: (d: DataPoint) => number = useCallback((d) => d.y, []);

  // bounds
  const maxWidth = Math.max(width - margin.left - margin.right, 0);
  const maxHeight = Math.max(height - margin.top - margin.bottom, 0);

  // domain
  const xDomain: [number, number] = extent(data, getX) as [number, number];
  const yDomain: [number, number] = extent(data, getY) as [number, number];

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

  // positioning
  const initialBrushPosition = useMemo(() => {
    if (data.length === 0) {
      return {
        start: { x: 0 },
        end: { x: 0 },
      };
    }

    const initialIndex = Math.round((data.length - 1) * 0.75);
    const initialX = getX(data[initialIndex]);

    const lastX = getX(data[data.length - 1]);

    return {
      start: {
        x: xScale(initialX),
      },
      end: { x: xScale(lastX) },
    };
  }, [data, getX, xScale]);

  // styles
  const selectedBrushStyle = {
    fill: chartStyle.colors.primary,
    fillOpacity: 0.4,
    stroke: "white",
  };

  if (width === 0 || height === 0 || data.length === 0) {
    return null;
  }

  return (
    <VisxBrush
      xScale={xScale}
      yScale={yScale}
      width={maxWidth}
      height={maxHeight}
      margin={margin}
      handleSize={8}
      innerRef={brushRef}
      resizeTriggerAreas={["left", "right"]}
      brushDirection="horizontal"
      initialBrushPosition={initialBrushPosition}
      onChange={onChange}
      selectedBoxStyle={selectedBrushStyle}
      useWindowMoveEvents
      renderBrushHandle={Handle}
    />
  );
};
