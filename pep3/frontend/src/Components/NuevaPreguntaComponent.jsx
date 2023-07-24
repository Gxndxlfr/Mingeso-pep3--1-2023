import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import UploadPreguntaFacil from "../services/UploadPreguntaFacil";
import UploadPreguntaMedia from "../services/UploadPreguntaMedia";
import UploadPreguntaDificil from "../services/UploadPreguntaDificil";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import gif from "../gif/monkey.gif"; // Asegúrate de proporcionar la ruta correcta del GIF

export default function NuevaPreguntaComponent(props){

    const initialState = {
        pregunta: "",
        codigo: "",
        respuesta: "",
        categoria: ""
    };

    const [input, setInput] = useState(initialState);
    
    const changeCodigoHandler = event => {
        setInput({ ...input, codigo: event.target.value });
        console.log(input.codigo);
    };

    const changePreguntaHandler = event => {
        setInput({ ...input, pregunta: event.target.value });
        console.log(input.pregunta);
    };

    const changeRespuestaHandler = event => {
        setInput({ ...input, respuesta: event.target.value });
        console.log(input.respuesta);
    };
    const changeCategoriaHandler = (event) => {
        setInput({ ...input, categoria: event.target.value }); 
        console.log(input.categoria);
      };

    const ingresarPregunta = (e) => {
        e.preventDefault();
    // Lógica para redireccionar según el valor de la categoría
    switch (input.categoria) {
        case 'facil':
            ingresarPreguntaFacil(e);
        break;
        case 'media':
        ingresarPreguntaMedia(e);
        break;
        case 'dificil':
        ingresarPreguntaDificil(e);
        break;
        default:
        console.log('Categoría no válida');
    }
    };


    const ingresarPreguntaFacil = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que deseas agregar el nuevo proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Pregunta agregada correctamente!", {icon: "success", timer: "3000"});
                let quiz = { codigo: input.codigo, pregunta: input.pregunta, respuesta: input.respuesta};
                console.log(input.codigo)
                console.log(input.pregunta)
                console.log(input.respuesta)
                console.log("quiz => " + JSON.stringify(quiz));
                UploadPreguntaFacil.subirPregunta(quiz).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Pregunta no agregada.", icon: "error"});
            }
        });
    };
    
    const ingresarPreguntaMedia = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que deseas agregar el nuevo proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Pregunta agregada correctamente!", {icon: "success", timer: "3000"});
                let quiz = { codigo: input.codigo, pregunta: input.pregunta, respuesta: input.respuesta};
                console.log(input.codigo)
                console.log(input.pregunta)
                console.log(input.respuesta)
                console.log("quiz => " + JSON.stringify(quiz));
                UploadPreguntaMedia.subirPregunta(quiz).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Pregunta no agregada.", icon: "error"});
            }
        });
    };

    const ingresarPreguntaDificil = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que deseas agregar el nuevo proveedor?",
            text: "Una vez enviado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Pregunta agregada correctamente!", {icon: "success", timer: "3000"});
                let quiz = { codigo: input.codigo, pregunta: input.pregunta, respuesta: input.respuesta};
                console.log(input.codigo)
                console.log(input.pregunta)
                console.log(input.respuesta)
                console.log("quiz => " + JSON.stringify(quiz));
                UploadPreguntaDificil.subirPregunta(quiz).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Pregunta no agregada.", icon: "error"});
            }
        });
    };

    return(
            
            <Styles>
            <div className="home">
                <NavbarComponent />
                    <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>Nueva Pregunta</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <Form> 
                                        <Form.Group className="mb-3" controlId="pregunta" value = {input.pregunta} onChange={changePreguntaHandler}>
                                            <Form.Label>Pregunta</Form.Label>
                                            <Form.Control type="pregunta" placeholder="" />
                                        </Form.Group>
                    
                                        <Form.Group className="mb-3" controlId="codigo" value={input.codigo} onChange={changeCodigoHandler}>
                                            <Form.Label>Código Python</Form.Label>
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="respuesta" value = {input.respuesta} onChange={changeRespuestaHandler}>
                                            <Form.Label>Respuesta</Form.Label>
                                            <Form.Control type="respuesta"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="categoria" value={input.categoria} onChange={changeCategoriaHandler}>
                                            <Form.Label>Categoría</Form.Label>
                                            <Form.Control as="select">
                                                <option value="">Seleccione dificultad de la pregunta</option>
                                                <option value="facil">Fácil</option>
                                                <option value="media">Media</option>
                                                <option value="dificil">Difícil</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <Button className="boton" onClick={(e) => ingresarPregunta(e)}>Agregar Pregunta</Button>
                            </div>
                        </div>
                    </div>
                
            </div>
            <img src={gif} alt="Animación GIF" className="gif" />
            </Styles>
        )
    }


const Styles = styled.div`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
}

.home{
    background-color: #006992;
    margin: 0;
    padding: 0;
}

.mainclass{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    border: 9px solid #CED0CE;
    background-color: #DADDD8;
    width: 50%;
    padding: 36px;
}

input[type=rut], input[type=fecha] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

Button {
    background-color: #42bfbb;
    color: white;
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
}

Button:hover {
    opacity: 0.8;
}

.formcontainer {
    text-align: left;
    margin: 24px 100px 9px;
}

.container {
    padding: 24px 0;
    text-align:left;
}

span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
}
.gif {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 3cm; /* Tamaño de carnet en centímetros */
    height: 3cm; /* Tamaño de carnet en centímetros */
  }
`