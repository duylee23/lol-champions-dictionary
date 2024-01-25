import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Champions from "./components/Champions";
import Collection from "./components/Collection";
import ChampionInfo from "./components/ChampionInfo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="select-none">
      <Header/>
      <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path="/champions" element= {<Champions/>}/>
        <Route path="/champion-info/:id" element = {<ChampionInfo/>} />
        <Route path="/collection" element= {<Collection/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
