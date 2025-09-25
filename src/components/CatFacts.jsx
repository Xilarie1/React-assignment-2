import { useEffect, useState } from "react";

export function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })

      .then((data) => {
        console.log(data);
        setFacts(data.data || data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Feil: {error}</p>;

  return (
    <ul>
      {facts.map((f, i) => (
        <li key={i}>{f.fact || f}</li>
      ))}
    </ul>
  );
}
