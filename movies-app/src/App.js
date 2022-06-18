import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Movies } from './Screens/Movies';
import { Series } from './Screens/Series';
import { Anime } from './Screens/Anime';
import { Header } from './Components/Header';
import { Genre } from './Screens/Genre';
import { Details } from './Screens/Details';
import { connect } from 'react-redux';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' element={<Genre/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Series' element={<Series/>}/>
        <Route path='/Anime' element={<Anime/>}/>
        <Route path='/Details' element={<Details/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default connect()(App);
