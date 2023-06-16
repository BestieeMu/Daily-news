import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./LayOut";
import NewBody from "./Pages/NewBody/NewBody";
import {  useRef, useState } from "react";
import News from "./Pages/NewsF/News";
import Error from "./Pages/error/Error";

function App() {
  const [data, setData] = useState([]);

  const LifeStyle = useRef(null);
  const Technology = useRef(null);
  const Politics = useRef(null); 
  const Entertainments = useRef(null);

const scrollToSection = (sectionRef) => {
window.scrollTo({
  top: sectionRef.current.offsetTop,
  behavior: "smooth",
});
}

  return (
    <>
      <Routes>
        <Route path="/" exact element={<LayOut LifeStyle={LifeStyle} Entertainments={Entertainments} Politics={Politics} Technology={Technology} scrollToSection={scrollToSection} />}>
          <Route path="/:slug" element={<NewBody />} />
          <Route index element={<News LifeStyle_={LifeStyle} Entertainments_={Entertainments} Politics_={Politics} Technology_={Technology} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
