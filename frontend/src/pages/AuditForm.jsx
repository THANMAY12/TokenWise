import { useState } from "react";
import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";
import ToolSelector from "../components/ToolSelector";
import { pricingData } from "../data/pricingData";
function AuditForm() {
  const [selectedTools, setSelectedTools] = useState(["chatgpt"]);
  const [formData, setFormData] = useState({});
  const updateToolData = (
    toolKey,
    field,
    value
  ) => {

    setFormData((prev) => ({
      ...prev, [toolKey]: { ...prev[toolKey], [field]: value, },
    }));
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-4">
            AI Spend Audit
          </h1>
          <p className="text-neutral-400 text-lg">
            Analyze your AI tooling costs and identify optimization opportunities.
          </p>
        </div>
        <ToolSelector
          tools={pricingData}
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}/>
        <div className="grid md:grid-cols-2 gap-6">
          {selectedTools.map((toolKey) => (
            <ToolCard
              key={toolKey}
              toolKey={toolKey}
              tool={pricingData[toolKey]}
              formData={formData}
              updateToolData={updateToolData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default AuditForm;