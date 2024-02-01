import css from './styles/App.module.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experties from './components/Experties/Experties';
import Works from './components/Works/Works';

const App = () => {
  return (
    <div className={` bg-primary ${css.container}`}>
     <Header/>
     <Hero />
     <Experties/>
     <Works/>
    </div>
  );
}

export default App;
