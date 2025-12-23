import './HomeCard.scss'

export const HomeCard = ({ title, desc }) => {
  return (
    <article className="home-card">
      <h3>{title}</h3>
      <div className="home-card__desc">
        <p>{desc}</p>
      </div>
    </article>
  )
}
