import "./App.css";
import Contacts from "./components/Contacts";
import Intro from "./components/Intro";
// import Modal from "./components/Modals/Modal";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App bg-dark ">
      <Navigation />

      <Intro />

      <Skills />

      <Projects />

      <Contacts />
    </div>
  );
}

export default App;
