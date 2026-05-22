function ToolCard({ tool }) {
  return (
    <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-950">
      <h2 className="text-xl font-semibold mb-4">
        {tool.name}
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-2">
            Plan
          </label>
          <select className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3">
            {tool.plans.map((plan) => (
              <option key={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-2">
            Monthly Spend ($)
          </label>
          <input
            type="number"
            placeholder="200"
            className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-2">Seats</label>
          <input
            type="number"
            placeholder="5"
            className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3"/>
        </div>
      </div>
    </div>
  );
}
export default ToolCard;