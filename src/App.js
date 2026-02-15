// import Hero from "./components/Hero";
// import Family from "./components/Family";
// import Event from "./components/Event";
// import Countdown from "./components/Countdown";
// import RSVP from "./components/RSVP";

// function App() {
//   return (
//     <>
//       <Hero />
//       <Family />
//       <Event />
//       <Countdown />
//       <RSVP />
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";

import Hero from "./components/Hero";
import Family from "./components/Family";
import Event from "./components/Event";
import Countdown from "./components/Countdown";
import RSVP from "./components/RSVP";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-soft");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Când intră în viewport → animăm
            entry.target.classList.add("active");
          } else {
            // Când iese → resetăm animația
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.2, // 20% vizibil
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Family />
      <Event />
      <Countdown />
      <RSVP />
    </>
  );
}

export default App;
