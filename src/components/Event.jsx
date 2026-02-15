function Event() {
  return (
    <section className="event">
      {/* Invitația */}
      <p className="event-invite">
        Vă invităm cu drag să ne fiți alături la celebrarea căsătoriei noastre
        care va avea loc în data de:
      </p>

      {/* Data mare */}
      <h2 className="event-date">17 MAI 2026</h2>

      {/* Carduri verticale */}
      <div className="event-grid-vertical">
        {/* Card Biserica */}
        <div className="event-card">
          <div className="event-icon">⛪</div>
          <p>BISERICA ORTODOXĂ MIHEȘU DE CÂMPIE</p>
          <p>ORA 12:00</p>
        </div>

        {/* Card Petrecere */}
        <div className="event-card">
          <div className="event-icon">🥂</div>
          <p>
            CENTRUL DE EVENIMENTE "COLINA SASULUI" <i>MIRROR HALL</i> LUDUȘ
          </p>
          <p>ORA 14:00</p>

          {/* Hartă Google Maps embed */}
          <div className="event-map">
            <iframe
              title="Locatie Petrecere"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175437.87978541982!2d23.5976761826242!3d46.60271691991146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bddccd4c4b061%3A0x6d8dfa551b2699d2!2sColina%20Sasului!5e0!3m2!1sro!2sro!4v1771164489459!5m2!1sro!2sro"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px", marginTop: "15px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer text */}
      <p className="event-footer">Vă așteptăm cu drag!</p>
    </section>
  );
}

export default Event;
