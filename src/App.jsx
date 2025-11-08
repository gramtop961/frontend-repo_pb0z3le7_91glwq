import { useMemo } from "react";
import Navbar from "./components/Navbar";
import KPIGrid from "./components/KPIGrid";
import SalesChart from "./components/SalesChart";
import RecentOrders from "./components/RecentOrders";

function App() {
  // Mocked dashboard data (frontend only)
  const kpiData = {
    revenue: "$128,430",
    revenueChange: 12.4,
    orders: "3,214",
    ordersChange: 3.2,
    aov: "$39.94",
    aovChange: -1.1,
    conversion: "2.87%",
    conversionChange: 0.6,
  };

  const salesSeries = useMemo(() => {
    const now = Date.now();
    const points = Array.from({ length: 20 }).map((_, i) => {
      const x = now - (19 - i) * 24 * 60 * 60 * 1000;
      // create a smooth-ish series
      const y = Math.round(3000 + 800 * Math.sin(i / 2) + Math.random() * 300);
      return { x, y };
    });
    // Normalize x to index for simple chart scale
    return points.map((p, i) => ({ x: i, y: p.y }));
  }, []);

  const recentOrders = [
    { id: 11235, customer: "Asep Sunarya", product: "Wireless Headphones", total: 129.99, status: "Paid" },
    { id: 11234, customer: "Siti Nurhaliza", product: "Smartwatch", total: 199.0, status: "Pending" },
    { id: 11233, customer: "Budi Santoso", product: "Gaming Mouse", total: 59.49, status: "Paid" },
    { id: 11232, customer: "Rizky Pratama", product: "Mechanical Keyboard", total: 149.99, status: "Refunded" },
    { id: 11231, customer: "Dewi Lestari", product: "USB-C Hub", total: 39.99, status: "Paid" },
    { id: 11230, customer: "Andi Wijaya", product: "4K Monitor", total: 329.0, status: "Pending" },
    { id: 11229, customer: "Putri Ayu", product: "Portable SSD", total: 89.99, status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Sales Dashboard</h2>
            <p className="text-gray-500 text-sm">Realtime overview of your store performance</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="border border-gray-200 rounded-md px-3 py-2 text-sm bg-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Year to date</option>
            </select>
            <button className="px-3 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Export</button>
          </div>
        </div>

        <KPIGrid data={kpiData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <SalesChart series={salesSeries} />
          </div>
          <div className="lg:col-span-1">
            <RecentOrders orders={recentOrders} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
