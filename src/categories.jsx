import { useState } from "react";

const Categories = () => {
  const [showQuestions, setShowQuestions] = useState(0);
  const [texto, setTexto] = useState("");

  const changeShowQuestionsPassandoParametro = (parametro1, parametro2) => {
    setShowQuestions(parametro1);
    setTexto(parametro2);
  };

  return (
    <div className="categorias">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <h2>Para começar, escolha a categoria!</h2>
      <p>As perguntas serão baseadas na categoria escolhida</p>
      <button onClick={() => changeShowQuestionsPassandoParametro(1, "IZA")}>
        HTML
      </button>
      <button onClick={() => changeShowQuestionsPassandoParametro(2, "BELA")}>
        CSS
      </button>
      <button onClick={() => changeShowQuestionsPassandoParametro(3, "")}>
        JAVASCRIPT
      </button>
      {showQuestions === 1 && (
        <h1>
          {texto},{showQuestions}
        </h1>
      )}
      {showQuestions === 2 && <h1>{texto}</h1>}
      {showQuestions === 3 && <h1>{texto}</h1>}
    </div>
  );
};

export default Categories;
