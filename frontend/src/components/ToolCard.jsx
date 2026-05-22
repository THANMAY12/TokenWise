function ToolCard({ tool, toolKey, formData, updateToolData }) {
    const currentData = formData[toolKey] || {};
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
                    <select
                        value={currentData.plan || ""}
                        onChange={(e) =>
                            updateToolData(
                                toolKey,
                                "plan",
                                e.target.value
                            )
                        }
                        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition">
                        <option value="">
                            Select Plan
                        </option>
                        {tool.plans.map((plan) => (
                            <option
                                key={plan.name}
                                value={plan.name}>
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
                        value={currentData.spend || ""}
                        onChange={(e) =>
                            updateToolData(
                                toolKey,
                                "spend",
                                e.target.value
                            )
                        }
                        placeholder="200"
                        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"/>
                </div>
                <div>
                    <label className="block text-sm text-neutral-400 mb-2">Seats</label>
                    <input
                        type="number"
                        value={currentData.seats || ""}
                        onChange={(e) =>
                            updateToolData(
                                toolKey,
                                "seats",
                                e.target.value
                            )
                        }
                        placeholder="5"
                        className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    />
                </div>
            </div>
        </div>
    );
}
export default ToolCard;