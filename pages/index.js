export default function Home() {
  return (
    <div className="min-h-screen">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Products </div>
            <div className="stat-value">0</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Active Orders </div>
            <div className="stat-value">0</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  );
}
