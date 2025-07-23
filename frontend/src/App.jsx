import { useState } from "react";
import Form from "./components/Form";
import Calendar from "./components/Calendar";

export default function App() {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generatePlan(data) {
    setLoading(true);
    setPlan(null);
    try {
      const res = await fetch("http://localhost:5000/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setPlan(json.plan);
    } catch (e) {
      alert("Failed to generate plan");
    }
    setLoading(false);
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">RunPlanPro - Custom Marathon Plans</h1>
      <Form onSubmit={generatePlan} loading={loading} />
      {loading && <p>Generating plan...</p>}
      {plan && <Calendar plan={plan} />}
    </main>
  );
}
