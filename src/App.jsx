import { useState } from "react";
import Welcome from "./welcome";
import Categories from "./categories";
import Question from "./question";
import Score from "./score";

function App() {
  const [gameMode, setModeGame] = useState(1);

  function changeMode(mode) {
    setModeGame(mode);
  }

  return (
    <div>
      {gameMode == 1 && <Welcome changeMode={changeMode} />}
      {gameMode == 2 ? (
        <Categories changeModeDoComponenteApp={changeMode} />
      ) : null}
      {gameMode == 3 && <Question changeForScore={changeMode} />}
      {gameMode == 4 && <Score playAgain={changeMode} />}
    </div>
  );
}

export default App;
