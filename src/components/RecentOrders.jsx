export default function RecentOrders({ orders }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold">Recent Orders</h3>
        <button className="text-indigo-600 text-sm hover:underline">View all</button>
      </div>
      <ul className="divide-y divide-gray-100">
        {orders.slice(0, 6).map((o) => (
          <li key={o.id} className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
            <div>
              <div className="font-medium">#{o.id}</div>
              <div className="text-gray-500">{o.customer}</div>
            </div>
            <div className="text-gray-600">{o.product}</div>
            <div className="font-medium">${o.total.toLocaleString()}</div>
            <div className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${o.status === "Paid" ? "bg-emerald-50 text-emerald-700" : o.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"}`}>
                {o.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
