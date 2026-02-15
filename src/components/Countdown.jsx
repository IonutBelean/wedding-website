import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2026-05-17T12:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <h2 className="reveal-soft">Numărăm zilele până la marele eveniment!</h2>

      <div className="countdown-grid">
        <div className="countdown-card reveal">
          <span>{timeLeft.days}</span>
          <p>Zile</p>
        </div>

        <div className="countdown-card reveal">
          <span>{timeLeft.hours}</span>
          <p>Ore</p>
        </div>

        <div className="countdown-card reveal">
          <span>{timeLeft.minutes}</span>
          <p>Minute</p>
        </div>

        <div className="countdown-card reveal">
          <span>{timeLeft.seconds}</span>
          <p>Secunde</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
