import { useState } from "react";

const Categories = ({ changeModeDoComponenteApp }) => {
  return (
    <div className="categorias">
      <h1>QUIZ DE PROGRAMAÇÃO!</h1>
      <h2>Para começar, escolha a categoria!</h2>
      <p>As perguntas serão baseadas na categoria escolhida</p>
      <button onClick={() => changeModeDoComponenteApp(3)}>HTML</button>
      <button onClick={() => changeModeDoComponenteApp(3)}>CSS</button>
      <button onClick={() => changeModeDoComponenteApp(3)}>JAVASCRIPT</button>
    </div>
  );
};

export default Categories;
