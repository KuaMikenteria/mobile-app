import { useState } from 'react'
import Intro from './Intro/Intro'
import Dishes from './Food/Dishes/Dishes'
import Desserts from './Food/Desserts/Desserts'
import Kakanin from './Food/Kakanin/Kakanin'

// Import Recipe articles - example only for Recipe 1 of Dishes
import Recipe1 from './Recipe/Dishes/Recipe1'

type Category = 'Dishes' | 'Desserts' | 'Kakanin'
type Screen = 'home' | 'intro' | 'category' | 'recipe'

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [category, setCategory] = useState<Category | null>(null)
  const [recipeNumber, setRecipeNumber] = useState<number | null>(null)

  // Handler when user picks a category in Intro
  const handleCategorySelect = (choice: Category) => {
    setCategory(choice)
    setScreen('category')
    setRecipeNumber(null) // reset any recipe selected
  }

  // Handler when user picks a recipe number inside a category
  const handleRecipeSelect = (num: number) => {
    setRecipeNumber(num)
    setScreen('recipe')
  }

  // Go back to category recipe list from recipe article
  const backToCategory = () => {
    setScreen('category')
    setRecipeNumber(null)
  }

  // Go back to intro from category
  const backToIntro = () => {
    setScreen('intro')
    setCategory(null)
  }

  return (
    <div id="root">
      {screen === 'home' && (
        <div className="full-screen">
          <div className="offset-wrapper">
            <button className="purple-button" onClick={() => setScreen('intro')}>
              Click Me
            </button>
          </div>
        </div>
      )}

      {screen === 'intro' && (
        <Intro onSelect={handleCategorySelect} onBack={() => setScreen('home')} />
      )}

      {screen === 'category' && category === 'Dishes' && recipeNumber === null && (
        <Dishes
          onBack={backToIntro}
          onSelectRecipe={handleRecipeSelect}
        />
      )}

      {screen === 'category' && category === 'Desserts' && recipeNumber === null && (
        <Desserts
          onBack={backToIntro}
          onSelectRecipe={handleRecipeSelect}
        />
      )}

      {screen === 'category' && category === 'Kakanin' && recipeNumber === null && (
        <Kakanin
          onBack={backToIntro}
          onSelectRecipe={handleRecipeSelect}
        />
      )}

      {screen === 'recipe' && category === 'Dishes' && recipeNumber === 1 && (
        <Recipe1 onBack={backToCategory} />
      )}

      {/* Similarly add for other categories and recipe numbers */}
      
    </div>
  )
}

export default App
