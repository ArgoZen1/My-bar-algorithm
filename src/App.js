import logo from './logo.svg';
import './App.sass';
import CoktailCard from './Components/CoktailCard/CoktailCard';

import { coktailList } from './model/CoktailList';


function App() {
  return (
    <div className="App">
      {coktailList.map(coktail => (
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
