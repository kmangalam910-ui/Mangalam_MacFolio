import { Navbar, Welcome, Dock, Home } from "#components";
import { Resume, Safari, Terminal, Finder, TextFile, ImageFile, Contact } from "#windows";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
      <Home />
    </main>
  );
};

export default App;
