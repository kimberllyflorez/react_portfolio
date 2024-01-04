import  AppNavBar  from './components/NavBar';
import AppBanner from './components/banner';
import Skill from './components/skills';
import Projects from './components/project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app-style.css';

function App() {
  return (
      <div className="App">
        <AppNavBar/>
        <AppBanner/>
        <Skill/>
        <Projects/>
      </div>
    );
  }
  
  export default App;
  