import { useState } from "react";
import Categories from "./categories";

const Welcome = props => {
  const [showCategories, setShowCategories] = useState(0);
  console.log(showCategories);

  return (
    <div className="welcome">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <h2>Sejam bem-vindos</h2>
      <p className="padrao">Bora começar, clique no iniciar</p>
      <button onClick={() => props.changeMode(2)}>INICIAR</button>
      {showCategories === 1 && <Categories />}
    </div>
  );
};

export default Welcome;
