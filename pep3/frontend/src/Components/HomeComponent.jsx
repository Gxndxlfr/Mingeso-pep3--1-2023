import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import gif from "../gif/monkey.gif";
import gif2 from "../gif/9vry.gif";


export default function HomeComponent() {
 
  const ComenzarFacil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-facil";
  };

  const ComenzarMedia = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-media";
  };

  const ComenzarDificil = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba-dificil";
  };

  const AgregarPregunta = () => {
    window.location.href = "/agregar-pregunta"
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h1 className="text-center">
          <b>
            {" "}
            <i>
              {" "}
              <u>¡Bienvenido a CodeChallenger!</u>
            </i>
          </b>
          <img src={gif} alt="Animación GIF" className="gif" />
        </h1>
        <h3 className="text-center">
          {" "}
          <b>
            Selecciona tu nivel de dificultad y comienza a resolver los
            desafíos.{" "}
          </b>
        </h3>
        <br></br>

        <div className="facil">
          <h2>
            <b>Modo Básico 🙂</b>
          </h2>
          <h3>
            Para principiantes en Python que quieren sumergirse en el mundo de
            la programación y aprender con desafios básicos y rápidos.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarFacil}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="medio">
          <h2>
            <b>Modo Intermedio 🤔</b>
          </h2>
          <h3>
            Para aquellos que ya tienen conocimientos en Python y quieren poner
            a prueba sus habilidades con desafios de dificultad media.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarMedia}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="dificil">
          <h2>
            <b>Modo Avanzado 😈</b>
          </h2>
          <h3>
            Para aquellos expertos en Python que buscan los mayores desafios.
          </h3>
          <button type="button" class="btn btn-primary" onClick={ComenzarDificil}>
            Comenzar
          </button>
        </div>

        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio 🐍 </b>
          </h2>
          <h3>
            ¿Has creado un desafio y quieres ver como otros se enfrentan a el?
            Accede a esta opción para agregar a un nuevo desafio.
          </h3>
          <button type="button" class="btn btn-primary" onClick={AgregarPregunta}> 
            Acceder
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; /* Eliminamos los márgenes para evitar desplazamiento */
    padding: 0; /* Eliminamos el padding para evitar desplazamiento */
  }
`;

const HomeStyle = styled.nav`
position: relative; /* Importante para que el gif2 sea el fondo del componente */
  background-image: url(${gif2}); /* Utilizamos gif2 como fondo */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh; /* Asegura que el componente ocupe al menos el 100% de la altura de la ventana */
  overflow: hidden; /* Evita que el contenido del componente desborde si es más grande que la pantalla */

.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
}

.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.gif {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 1cm; /* Tamaño de carnet en centímetros */
  height: 1cm; /* Tamaño de carnet en centímetros */
}
`;
