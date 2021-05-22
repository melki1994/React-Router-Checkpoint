import './App.css';
import MovieApp from './Components/MovieApp';
import Descriptions from './Components/Descriptions';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={MovieApp}/> 
         <Route  path="/Descriptions/:Id" component={Descriptions}/> 
       </Switch> 
      {/* <MovieApp/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;