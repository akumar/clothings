import './App.css';
import { Switch, Route} from 'react-router-dom'
import HomePage from './pages/home';

const HatsPage = () => (
  <div>This is hats</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
        <HomePage />
      </Switch>
      
    </div>
  );
}

export default App;
