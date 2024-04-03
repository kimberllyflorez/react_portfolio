import  AppNavBar  from './components/NavBar';
import AppBanner from './components/banner';
import Skill from './components/skills';
import Projects from './components/project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app-style.css';
import AboutMe from './components/aboutme';
import {  getLangFromUrl, useTranslations } from './i18n/utils';
import { defaultLang } from './i18n/ui';

function App() {
  const currentLang = getLangFromUrl(window.location);
  const translate = useTranslations(currentLang || defaultLang);
  return (
      <div className="App">
        <AppNavBar translate= {translate}/>
        <AppBanner  />
        <Skill/>
        <Projects/>
        <AboutMe/>
        
      </div>
    );
  }
  
  export default App;
  