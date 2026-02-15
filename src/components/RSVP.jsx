import { useState } from "react";

function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obținem referința la formular
    const form = e.target;

    // Trimitem datele către Formspree
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true); // afișăm mesajul de confirmare
        } else {
          alert("A apărut o eroare. Încearcă din nou.");
        }
      })
      .catch(() => alert("A apărut o eroare. Încearcă din nou."));
  };

  return (
    <section className="rsvp">
      {!submitted ? (
        <>
          <h2>
            Vă rugăm să ne confirmați prezența până la data de 30 aprilie 2026
          </h2>

          <form
            className="rsvp-form"
            action="https://formspree.io/f/mgolkrvb"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Nume și prenume */}
            <input
              type="text"
              name="name"
              placeholder="Nume și Prenume"
              required
            />

            {/* Număr de telefon */}
            <input
              type="tel"
              name="phone"
              placeholder="Număr de telefon"
              required
            />

            {/* Radio buttons */}
            <div className="rsvp-radio">
              <label>
                <input type="radio" name="presence" value="da" required />{" "}
                Confirm prezența
              </label>
              <label>
                <input type="radio" name="presence" value="nu" /> Nu pot să
                ajung
              </label>
            </div>

            {/* Mesaj */}
            <textarea
              name="message"
              placeholder="Dacă doriți, ne puteți lăsa un mesaj aici"
            ></textarea>

            {/* Buton */}
            <button type="submit">Trimite răspuns</button>
          </form>
        </>
      ) : (
        <div className="rsvp-confirmation">
          <h2>Vă mulțumim pentru răspuns!</h2>
          <p>Mesaj primit ✅</p>
        </div>
      )}
    </section>
  );
}

export default RSVP;
