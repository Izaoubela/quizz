const Welcome = ({ changeMode }) => {
  return (
    <div className="welcome">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <h2>Sejam bem-vindos</h2>
      <p className="padrao">Bora começar, clique no iniciar</p>
      <button onClick={() => changeMode(2)}>INICIAR</button>
    </div>
  );
};

export default Welcome;
