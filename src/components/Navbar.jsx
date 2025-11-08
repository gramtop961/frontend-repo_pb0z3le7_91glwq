import { BarChart2, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><BarChart2 size={20} /></div>
          <h1 className="text-xl font-semibold tracking-tight">Sales Monitor</h1>
        </div>
        <div className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Search size={18} /></span>
            <input
              type="text"
              placeholder="Search orders, products, customers..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white grid place-items-center font-semibold">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
