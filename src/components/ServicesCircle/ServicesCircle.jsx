import './ServicesCircle.scss'

export const ServicesCircle = () => {
  return (
    <div className="services-circle">
      <div className="card">
        <div className="card__circle"></div>
        <div className="card__content">
          <h3>Bilan comportemental</h3>
          <p>
            Une première séance pour comprendre la situation, identifier les
            déclencheurs et construire un plan clair.
          </p>
          <button className="btn btn--primary">Découvrir le bilan</button>
        </div>
        <div className="card__icon"></div>
      </div>

      <div className="card">
        <div className="card__circle"></div>
        <div className="card__content">
          <h3>Séances individuelles</h3>
          <p>
            On travaille sur le concret : marche en laisse, rappel, gestion des
            émotions, calme à la maison…
          </p>
          <button className="btn btn--primary">Voir les séances</button>
        </div>
        <div className="card__icon"></div>
      </div>

      <div className="card">
        <div className="card__circle"></div>
        <div className="card__content">
          <h3>Balades éducatives</h3>
          <p>
            Pour apprendre à observer, garder la distance, se détendre et
            progresser en extérieur (petits groupes).
          </p>
          <button className="btn btn--primary">Voir les balades</button>
        </div>
        <div className="card__icon"></div>
      </div>

      <div className="card">
        <div className="card__circle"></div>
        <div className="card__content">
          <h3>Et plus encore !</h3>
          <p>
            Séances collectives, garde à domicile et visites en votre absence
            (sur devis).
          </p>
          <button className="btn btn--primary">Voir tous les services</button>
        </div>
        <div className="card__icon"></div>
      </div>
    </div>
  )
}
