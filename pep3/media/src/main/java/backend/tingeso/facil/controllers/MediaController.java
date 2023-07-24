package backend.tingeso.facil.controllers;

import backend.tingeso.facil.entities.MediaEntity;
import backend.tingeso.facil.services.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/media")
public class MediaController {
    @Autowired
    MediaService mediaService;

    @GetMapping
    public ResponseEntity<ArrayList<MediaEntity>> listadoProblemas(){
        ArrayList<MediaEntity> listaProblemas = mediaService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
    @PostMapping
    public void guardarEmpleado(@RequestBody MediaEntity quiz){

        mediaService.guardarPregunta(quiz);
    }
}
