import './App.sass';
import CoktailCard from './Components/CoktailCard/CoktailCard';

import { coktailList } from './model/CoktailList';
import AppBar from './Components/AppBar/AppBar';
import { useState } from 'react';


function App() {

  const [cocktails, setCocktails] = useState(coktailList)

  const handleSearch = (criteria) => {
    if (criteria === '') {
      setCocktails(coktailList)
    } else {
      setCocktails(coktailList.filter(cocktail =>
        cocktail.name
          .toLowerCase()
          .startsWith(criteria.toLowerCase()
          )))
    }

  }

  return (
    <div className="App">
      <AppBar filter={handleSearch} />
      {cocktails.map(coktail => (
        <CoktailCard
          name={coktail.name}
          ingredients={coktail.ingredients}
          image={coktail.image}
        />
      ))}
    </div>
  );
}

export default App;
