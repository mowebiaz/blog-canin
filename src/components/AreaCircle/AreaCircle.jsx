import './AreaCircle.scss'

export const AreaCircle = () => {
  return (
    <div
      className="radial"
      style={{ '--size': '520px', '--hub': '40px' }}
    >
      <div className="hub">Grenoble</div>
      <div
        className="city"
        style={{ '--deg': '10deg', '--r': '180px' }}
      >
        <span className="edge"></span>
        <span className="label">Meylan</span>
      </div>
      <div
        className="city"
        style={{ '--deg': '55deg', '--r': '220px' }}
      >
        <span className="edge"></span>
        <span className="label">Crolles</span>
      </div>
      <div
        className="city"
        style={{ '--deg': '110deg', '--r': '140px' }}
      >
        <span className="edge"></span>
        <span className="label">Échirolles</span>
      </div>
      <div
        className="city"
        style={{ '--deg': '160deg', '--r': '240px' }}
      >
        <span className="edge"></span>
        <span className="label">Vif</span>
      </div>
      <div
        className="city"
        style={{ '--deg': '210deg', '--r': '200px' }}
      >
        <span className="edge"></span>
        <span className="label">Seyssins</span>
      </div>
      <div
        className="city"
        style={{ '--deg': '300deg', '--r': '170px' }}
      >
        <span className="edge"></span>
        <span className="label">Voiron</span>
      </div>
    </div>
  )
}
