import { useState } from "react";
import Welcome from "./welcome";
import Categories from "./categories";

function App() {
  const [gameMode, setModeGame] = useState(1);
  function changeMode() {
    setModeGame(2);
  }

  return (
    <div>
      {gameMode == 1 && <Welcome changeMode={changeMode} />}
      {gameMode == 2 ? <Categories /> : null}
    </div>
  );
}

export default App;
