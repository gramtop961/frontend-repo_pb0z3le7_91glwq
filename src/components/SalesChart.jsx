import { useMemo } from "react";

export default function SalesChart({ series }) {
  // Simple SVG line area chart without external deps
  const width = 800;
  const height = 220;
  const padding = 32;

  const { points, minY, maxY } = useMemo(() => {
    if (!series || series.length === 0) return { points: [], minY: 0, maxY: 0 };
    const xs = series.map((d) => d.x);
    const ys = series.map((d) => d.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const scaleX = (x) => padding + ((x - minX) / (maxX - minX || 1)) * (width - padding * 2);
    const scaleY = (y) => height - padding - ((y - minY) / (maxY - minY || 1)) * (height - padding * 2);

    const points = series.map((d) => `${scaleX(d.x)},${scaleY(d.y)}`).join(" ");
    return { points, minY, maxY };
  }, [series]);

  const gradientId = "grad" + Math.random().toString(36).slice(2, 7);

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Revenue Trend</h3>
        <div className="text-sm text-gray-500">Min {minY} • Max {maxY}</div>
      </div>
      <div className="w-full overflow-x-auto">
        <svg width={width} height={height} className="min-w-full">
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {points && points.length > 0 ? (
            <>
              <polyline
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
                points={points}
              />
              <polygon
                points={`${points} ${points.split(" ").slice(-1)[0].split(",")[0]},${height - 32} ${points
                  .split(" ")[0]
                  .split(",")[0]},${height - 32}`}
                fill={`url(#${gradientId})`}
              />
            </>
          ) : (
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-gray-400">
              No data
            </text>
          )}
        </svg>
      </div>
    </section>
  );
}
