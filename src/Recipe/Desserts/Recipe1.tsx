import { useState } from 'react'
import '../../Recipe.css'

type Props = {
  onBack: () => void
}

const Recipe1 = ({ onBack }: Props) => {
  const [isLarge, setIsLarge] = useState(false)

  const toggleImageSize = () => {
    setIsLarge(!isLarge)
  }

  return (
    <article className="recipe-article">
      <h1>Dessert Recipe 1</h1>

      <div className="image-container" onClick={toggleImageSize}>
        <img
          src="/assets/desserts/recipe1.jpg"
          alt="Dessert Recipe 1"
          className={isLarge ? 'large-image' : 'normal-image'}
        />
      </div>
      <figcaption>Sweet and Creamy Delight</figcaption>

      <section className="description">
        <p>This dessert is a creamy, sweet treat perfect for any occasion. It's quick to make and a hit with both kids and adults!</p>
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup condensed milk</li>
          <li>1/2 cup all-purpose cream</li>
          <li>Crushed graham crackers</li>
          <li>Sliced bananas</li>
          <li>Chocolate syrup</li>
        </ul>
      </section>

      <section className="instructions">
        <h2>Instructions</h2>
        <ol>
          <li>Layer crushed grahams at the bottom of a glass.</li>
          <li>Add banana slices.</li>
          <li>Pour a layer of cream and condensed milk mixture.</li>
          <li>Repeat layers as desired.</li>
          <li>Top with chocolate syrup and chill for 30 minutes before serving.</li>
        </ol>
      </section>

      <button className="back-button" onClick={onBack}>Back to Desserts</button>
    </article>
  )
}

export default Recipe1
