import { BrowserRouter } from 'react-router-dom';
import { Contact, Experience, Intro, Navbar, Tech, Projects, About, Background } from './components';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <div className="relative z-0">
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
