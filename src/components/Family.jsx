function Family() {
  return (
    <section className="family">
      <h2 className="family-title">CU BINECUVÂNTAREA PĂRINȚILOR</h2>

      <div className="family-grid">
        {/* Părinții */}
        <div className="family-card">
          <h3>Arpad & Otilia Fraico</h3>
        </div>
        <div className="family-card">
          <h3>Ioan & Maria Belean</h3>
        </div>
      </div>

      <h2 className="family-title">ȘI ALĂTURI DE NAȘII</h2>

      <div className="family-grid">
        {/* Nașii */}
        <div className="family-card">
          <h3>Rareș & Alexandra Șimon</h3>
        </div>
        <div className="family-card">
          <h3>Alexandru & Timea Bărăian</h3>
        </div>
      </div>
    </section>
  );
}

export default Family;
