import { useState } from "react";
import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay";


function App() {
  const [isGameStarted ,setIsGameStarted]=useState(false);
  const toggelgamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  };
  return (
    <>
      {isGameStarted ? <Gameplay/> : <StartGame toggle={toggelgamePlay}/>}
    </>
  );
}

export default App;
