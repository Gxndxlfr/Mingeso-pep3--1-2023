import axios from "axios";

const API_URL = "http://localhost:8080/media/";

class UploadPreguntaFacil{
    
    subirPregunta(quiz){
        return axios.post(API_URL, quiz);
    }
}

export default new UploadPreguntaFacil()