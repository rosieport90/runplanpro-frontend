export default function Calendar({ plan }) {
  if (!plan || !plan.weeks) {
    return (
      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{typeof plan === "string" ? plan : JSON.stringify(plan, null, 2)}</pre>
    );
  }

  return (
    <div>
      {plan.weeks.map((week, i) => (
        <div key={i} className="mb-6">
          <h2 className="font-bold text-xl mb-2">Week {i + 1}</h2>
          <ul className="list-disc list-inside">
            {week.days.map((day, idx) => (
              <li key={idx}><strong>{day.day}:</strong> {day.workout}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
