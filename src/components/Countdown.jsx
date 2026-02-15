import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2026-05-17T12:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((distance / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className="countdown">
      <h2>Numărăm zilele până la marele eveniment!</h2>

      <div className="countdown-grid">
        <div className="countdown-card">
          <span>{timeLeft.days}</span>
          <p>Zile</p>
        </div>
        <div className="countdown-card">
          <span>{timeLeft.hours}</span>
          <p>Ore</p>
        </div>
        <div className="countdown-card">
          <span>{timeLeft.minutes}</span>
          <p>Minute</p>
        </div>
        <div className="countdown-card">
          <span>{timeLeft.seconds}</span>
          <p>Secunde</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
