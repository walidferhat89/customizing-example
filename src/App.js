
import './App.css';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Promo from './components/Promo.js';
import Intro1 from './components/Intro1.js';
import Intro2 from './components/Intro2.js';
import Intro3 from './components/Intro3.js';

function App() {
  return(
    <div>
      <Nav name="idriss" color="blue"/>
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer logo="littleLemon " signature="copyrite, all right reserved"/>
    </div>
    
  )
    
  
}

export default App;
