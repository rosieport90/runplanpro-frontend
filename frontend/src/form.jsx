import { useState } from "react";

export default function Form({ onSubmit, loading }) {
  const [form, setForm] = useState({
    experience: "",
    race: "",
    raceDate: "",
    availability: "",
    intensity: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <label className="block font-semibold">Running Experience</label>
        <select name="experience" onChange={handleChange} required value={form.experience} className="input">
          <option value="">Select...</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">Race</label>
        <input
          name="race"
          type="text"
          placeholder="e.g. Marathon, Half Marathon"
          value={form.race}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="block font-semibold">Race Date</label>
        <input
          name="raceDate"
          type="date"
          value={form.raceDate}
          onChange={handleChange}
          required
          className="input"
        />
      </div>

      <div>
        <label className="block font-semibold">Days per Week Available to Train</label>
        <select name="availability" onChange={handleChange} required value={form.availability} className="input">
          <option value="">Select...</option>
          {[1, 2, 3, 4, 5, 6, 7].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold">Intensity Level</label>
        <select name="intensity" onChange={handleChange} required value={form.intensity} className="input">
          <option value="">Select...</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="btn">
        {loading ? "Generating..." : "Generate Plan"}
      </button>
    </form>
  );
}
