import React from "react";
import './Resume.css'; // Importer le fichier CSS pour cette section

// Importer le PDF de ton CV
import pdf from '../../assets/CV_Jonathan_GAGER.pdf'; // Change le chemin si nécessaire

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Section d'en-tête */}
      <section className="resume-header">
        <h1>Mon CV</h1>
        <p>Consultez mon CV et découvrez mon parcours professionnel !</p>
      </section>

      {/* Section d'affichage du PDF */}
      <section className="resume-viewer">
        <object
          data={pdf} // Charger le fichier PDF ici
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>Il semble que votre navigateur ne supporte pas les fichiers PDF. Vous pouvez le télécharger directement <a href={pdf} download>ici</a>.</p>
        </object>
      </section>

      {/* Section de téléchargement */}
      <section className="download-section">
        <a href={pdf} download className="download-btn">
          Télécharger le CV
        </a>
      </section>
    </div>
  );
}
