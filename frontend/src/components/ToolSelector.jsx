function ToolSelector({
  tools,
  selectedTools,
  setSelectedTools,
}) {
  const toggleTool=(toolKey)=>{
    if (selectedTools.includes(toolKey)) {
      setSelectedTools(
        selectedTools.filter((tool)=>tool!== toolKey)
      );
    } else {
      setSelectedTools([...selectedTools, toolKey]);
    }
  };
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-5">
        Select AI Tools
      </h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(tools).map(([key, tool]) => {
          const isSelected =
            selectedTools.includes(key);

          return (
            <button
              key={key}
              onClick={() => toggleTool(key)}
              className={`px-5 py-3 rounded-xl border transition font-medium ${ isSelected
                    ? "bg-white text-black border-white"
                    : "border-neutral-700 text-white hover:border-neutral-500"
                }`}
            >
              {tool.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ToolSelector;