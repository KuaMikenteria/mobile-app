type Props = {
  onBack: () => void
  onSelectRecipe: (num: number) => void
}

const Dishes = ({ onBack, onSelectRecipe }: Props) => {
  return (
    <div className="foods-screen">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          className="image-button"
          onClick={() => onSelectRecipe(num)}
        >
          <img src={`/assets/dishes/recipe${num}.jpg`} alt={`Recipe ${num}`} />
          <span>Recipe {num}</span>
        </button>
      ))}
      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  )
}

export default Dishes
