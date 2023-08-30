import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/services';
import Achievement from './components/achievement/Achievement';
import Work from './components/work/Work';
import {CiCloudSun, CiCloudMoon} from 'react-icons/ci';

import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    console.log(theme)
    setIsDarkMode(!isDarkMode);
    setTheme((curr) => (curr==='light' ? 'dark':'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div>{isDarkMode ? <CiCloudMoon className='day-night theme-icon' onClick={toggleTheme}/> : <CiCloudSun className='day-night theme-icon' onClick={toggleTheme}/>}</div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        <Work/>
        <Portfolio/>
        {/* <Achievement/> */}
        <Contact/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
