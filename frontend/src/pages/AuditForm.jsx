import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";
import ToolSelector from "../components/ToolSelector";
import { pricingData } from "../data/pricingData";
function AuditForm() {
  const [selectedTools, setSelectedTools] =
    useState(["chatgpt"]);
  const [formData, setFormData] =
    useState({});
  const [teamSize, setTeamSize] =
    useState("");

  const [useCase, setUseCase] =
    useState("Coding");

  useEffect(() => {

    const savedData =
      localStorage.getItem("audit-form");

    if (savedData) {
      const parsedData =
        JSON.parse(savedData);
      setSelectedTools(
        parsedData.selectedTools || []
      );
      setFormData(
        parsedData.formData || {}
      );
      setTeamSize(
        parsedData.teamSize || ""
      );
      setUseCase(
        parsedData.useCase || "Coding"
      );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        selectedTools,
        formData,
        teamSize,
        useCase,
      })
    );
  }, [selectedTools, formData, teamSize, useCase]);
  const updateToolData = ( toolKey, field, value ) => {
    setFormData((prev) => ({
      ...prev,
      [toolKey]: {...prev[toolKey],[field]: value,
      },
    }));
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-4">
            AI Spend Audit
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Analyze your AI tooling costs and discover opportunities
            to reduce unnecessary spending across your stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Team Size
            </label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) =>
                setTeamSize(e.target.value)
              }
              placeholder="10"
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"/>
          </div>
          <div>
            <label className="block text-sm text-neutral-400 mb-2">
              Primary Use Case
            </label>
            <select
              value={useCase}
              onChange={(e) =>
                setUseCase(e.target.value)
              }
              className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            >
              <option>Coding</option>
              <option>Writing</option>
              <option>Data Analysis</option>
              <option>Research</option>
              <option>Mixed</option>
            </select>
          </div>
        </div>
        <ToolSelector
          tools={pricingData}
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
        />
        <div className="grid lg:grid-cols-2 gap-6">
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