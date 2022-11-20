import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Reason from "./Sections/Reason";

import './App.css';


function App() {
  return (
    <main className="main">
       <Navbar/>
       <div className="app_section_container"> 
       <Home/>
        <About/>
        <Reason/>
        
       </div>
       <Footer></Footer>
    </main>
  );
}

export default App;
 