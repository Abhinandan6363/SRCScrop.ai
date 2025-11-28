import React, { useState } from "react";
import InputField from "../components/InputField";
import { seasons } from "../data/seasons";
import { soilTypesInIndia } from "../data/soilType";
import { getFertilizerForCrop } from "../data/getFertilizer";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [fertilizers, setFertilizers] = useState([]);

  const [soilType, setSoilType] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [temp, setTemp] = useState("");
  const [season, setSeason] = useState("");

  const normalizeSeason = (season) => {
    if (!season) return "year_round";
    const s = season.toLowerCase();
    if (s.includes("summer")) return "summer";
    if (s.includes("monsoon")) return "monsoon";
    if (s.includes("autumn")) return "autumn";
    if (s.includes("winter")) return "winter";
    return "year_round";
  };

  const handlePredict = (e) => {
    e.preventDefault();

    const s = normalizeSeason(season);
    const seasonMap = {
      summer: "Maize",
      monsoon: "Paddy",
      autumn: "Wheat",
      winter: "Mustard",
      year_round: "Vegetables",
    };

    let crop = seasonMap[s];

    const phNum = Number(ph);
    if (!isNaN(phNum)) {
      if (phNum < 5.5) crop = "Rice";
      if (phNum > 8.0) crop = "Barley";
    }

    setResult({
      crop,
      confidence: "Rule-based (no ML)",
    });

    // Only array: [ {type, qty, usage} ]
    setFertilizers(getFertilizerForCrop(crop));
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Crop Recommendation</h1>

      <form onSubmit={handlePredict}>

        {/* Soil Type */}
        <div className="mb-4">
          <label className="text-sm font-semibold block mb-1">Soil Type</label>
          <select
            className="w-full border px-3 py-2 rounded-lg"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          >
            <option value="">Select Soil Type</option>
            {soilTypesInIndia.map((soil, idx) => (
              <option key={idx} value={soil}>{soil}</option>
            ))}
          </select>
        </div>

        {/* pH */}
        <InputField
          label="pH Value"
          type="number"
          step="0.1"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
        />

        {/* Rainfall */}
        <InputField
          label="Average Rainfall (mm)"
          type="number"
          step="10"
          value={rainfall}
          onChange={(e) => setRainfall(e.target.value)}
        />

        {/* Temperature */}
        <InputField
          label="Temperature (°C)"
          type="number"
          step="1"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />

        {/* Season */}
        <div className="mb-4">
          <label className="text-sm font-semibold block mb-1">Growing Season</label>
          <select
            className="w-full border px-3 py-2 rounded-lg"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="">Select Season</option>
            {seasons.map((s, idx) => (
              <option key={idx} value={s.label}>{s.label}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-green-700"
        >
          Predict
        </button>
      </form>

      {/* Crop Result */}
      {result && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Recommended Crop:</h2>
          <p className="text-lg mt-2">🌾 {result.crop}</p>
          
        </div>
      )}

      {/* Fertilizer Output */}
{fertilizers.length > 0 && (
  <div className="fert-box">
    <h2 className="fert-title">Fertilizer Suggestions:</h2>

    {fertilizers.map((item, index) => (
      <div key={index} className="fert-card">
        <p><strong>Type:</strong> {item.type}</p>
        <p><strong>Quantity:</strong> {item.qty}</p>
        <p><strong>Purpose:</strong> {item.usage}</p>
      </div>
    ))}
  </div>
)}

    </div>
  );
}
