import { useEffect, useState } from 'react'
import Cocktail from './components/Cocktail'
import CocktailList from './components/CocktailList'
import Header from './components/Header'
import SearchBox from './components/SearchBox'

const App = () => {
  const [cocktailInput, setCocktailInput] = useState('')
  const [cocktailList, setCocktailList] = useState([])
  const [cocktail, setCocktail] = useState([])
  const [hasClicked, setHasClicked] = useState(false)
  const [firstLoad, setFirstLoad] = useState(false)

  const loadCocktail = async url => {
    const res = await fetch(url)
    const data = await res.json()
    setCocktailList(data.drinks)
  }

  const searchForCocktail = e => {
    const inputContent = e.target.value
    setCocktailInput(inputContent)
    loadCocktail(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputContent}`)
  }
  
  const backHome = () => {
    loadCocktail(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
    setHasClicked(false)
    setCocktailInput('')
  }

  const seeCocktailContent = cocktail => {
    setHasClicked(true)
    setCocktail(cocktail)
  }
  
  useEffect(() => {
    if (!firstLoad) {
      loadCocktail('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
      setFirstLoad(true)
    }
  })

  return (
    <main className="bg-gray-700 min-h-screen text-white">
      <Header backHome={backHome}/>
      {
        !hasClicked ? (
          <>
            <SearchBox searchForCocktail={searchForCocktail} cocktailInput={cocktailInput}/>
            <CocktailList cocktailList={cocktailList} seeCocktailContent={seeCocktailContent} />
          </>
        ) :(
          <Cocktail cocktail={cocktail} />
        )
      }
      <div className='h-8'></div>
    </main>
  );
}

export default App;
