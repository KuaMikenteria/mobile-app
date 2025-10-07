import { useState } from "react"

type RecipeProps = {
  onBack: () => void
}

const Recipe1 = ({ onBack }: RecipeProps) => {
  const [isLarge, setIsLarge] = useState(false)

  const toggleImageSize = () => setIsLarge(!isLarge)

  return (
    <article className="recipe-article">
      <button className="back-button" onClick={onBack}>Back</button>
      <h1>Recipe 1 Title</h1>

      <div className="image-container" onClick={toggleImageSize}>
        <img
          src="/assets/dishes/recipe1.jpg"
          alt="Recipe 1"
          className={isLarge ? 'large-image' : 'normal-image'}
        />
      </div>
      <figcaption>Recipe 1 Caption</figcaption>

      <section className="description">
        <p>This is a delicious dish that combines flavors of ...</p>
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
          <li>Ingredient 4</li>
          <li>Ingredient 5</li>
        </ul>
      </section>

      <section className="instructions">
        <h2>Instructions</h2>
        <ol>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Step 5</li>
        </ol>
      </section>
    </article>
  )
}

export default Recipe1
