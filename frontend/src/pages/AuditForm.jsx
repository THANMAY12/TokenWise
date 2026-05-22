import ToolCard from "../components/ToolCard";
import { pricingData } from "../data/pricingData";

function AuditForm() {
  const tools = Object.values(pricingData);
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-4">
            AI Spend Audit
          </h1>
          <p className="text-neutral-400 text-lg">
            Analyze your AI tooling costs and identify optimization opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default AuditForm;