import { useState } from "react";
import data from "../db.json";

const Question = ({ changeForScore }) => {
  const [position, setPosition] = useState(0);

  const changePosition = () => {
    setPosition(position + 1);
  };

  return (
    <div className="question-board">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <p>
        Pergunta {position + 1} de {data.length}
      </p>
      <h2>{data[position].title}</h2>

      <div className="all-alternatives">
        {data[position].alternatives.map((item, indice) => {
          return (
            <div key={indice} className="alternative">
              {item}
            </div>
          );
        })}
      </div>
      {position < data.length - 1 ? (
        <button className="next-question" onClick={changePosition}>
          Continuar
        </button>
      ) : (
        <button className="next-question" onClick={() => changeForScore(4)}>
          Finalizar
        </button>
      )}
    </div>
  );
};

export default Question;
