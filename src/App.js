import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <AboutMe/>
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
