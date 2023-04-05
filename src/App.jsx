import { BrowserRouter } from 'react-router-dom';
import { Contact, Experience, Intro, Navbar, Tech, Projects, About } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#03100E]">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Intro />
          <About />
        </div>
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Projects />
          <Contact />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
