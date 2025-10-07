import './Intro.css'

type IntroProps = {
  onSelect: (choice: 'Dishes' | 'Desserts' | 'Kakanin') => void
  onBack: () => void
}

const Intro = ({ onSelect, onBack }: IntroProps) => {
  return (
    <div className="intro-screen">
      <button
        className="image-button"
        onClick={() => onSelect('Dishes')}
      >
        <img src="src/assets/dishes.png" alt="Dishes" />
        <span>Dishes</span>
      </button>

      <button
        className="image-button"
        onClick={() => onSelect('Desserts')}
      >
        <img src="src/assets/desserts.png" alt="Desserts" />
        <span>Desserts</span>
      </button>

      <button
        className="image-button"
        onClick={() => onSelect('Kakanin')}
      >
        <img src="src/assets/kakanin.png" alt="Kakanin" />
        <span>Kakanin</span>
      </button>

      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  )
}

export default Intro
