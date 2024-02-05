import css from './styles/App.module.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experties from './components/Experties/Experties';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={` bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <AboutMe />
      <Experties />
      <Works />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
