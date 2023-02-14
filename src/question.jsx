const Question = ({changeForScore}) => {
  return (
    <div className="question-board">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <p>Pergunta 1 de 5</p>
      <h2>PRIMEIRO PERGUNTA!</h2>

      <div className="all-alternatives">
        <div className="alternative">ALTERNATIVA 1</div>
        <div className="alternative">ALTERNATIVA 2</div>
        <div className="alternative">ALTERNATIVA 3</div>
        <div className="alternative">ALTERNATIVA 4</div>
      </div>

      <button className="next-question" onClick={() => changeForScore(4) }>Continuar</button>
    </div>
  );
};

export default Question;
