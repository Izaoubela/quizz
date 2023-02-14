const Score = propriedades => {
  return (
    <div className="score">
      <h1> VOCÊ FINALIZOU!</h1>
      <button className="play-again" onClick={() => propriedades.playAgain(1)}>
        JOGAR NOVAMENTE!
      </button>
    </div>
  );
};

export default Score;
