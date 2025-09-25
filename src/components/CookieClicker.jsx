import { useState } from "react";
export function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore((prev) => prev + 1);
  }

  return (
    <>
      <p>Poeng: {score}</p>
      <button onClick={handleClick}>
        <img src="./cookie.webp" alt="cookie" />
      </button>
    </>
  );
}
