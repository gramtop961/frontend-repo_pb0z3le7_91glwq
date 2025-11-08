export default function KPIGrid({ data }) {
  const items = [
    {
      label: "Revenue",
      value: data.revenue,
      change: data.revenueChange,
      positive: data.revenueChange >= 0,
    },
    {
      label: "Orders",
      value: data.orders,
      change: data.ordersChange,
      positive: data.ordersChange >= 0,
    },
    {
      label: "Avg. Order Value",
      value: data.aov,
      change: data.aovChange,
      positive: data.aovChange >= 0,
    },
    {
      label: "Conversion Rate",
      value: data.conversion,
      change: data.conversionChange,
      positive: data.conversionChange >= 0,
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.label} className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="text-sm text-gray-500">{it.label}</div>
          <div className="mt-1 flex items-baseline justify-between">
            <div className="text-2xl font-semibold">{it.value}</div>
            <div className={`text-sm font-medium ${it.positive ? "text-emerald-600" : "text-rose-600"}`}>
              {it.positive ? "+" : ""}{it.change}%
            </div>
          </div>
          <div className="mt-2 h-2 w-full bg-gray-100 rounded">
            <div
              className={`h-2 rounded ${it.positive ? "bg-emerald-500" : "bg-rose-500"}`}
              style={{ width: `${Math.min(Math.abs(it.change) * 2, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
