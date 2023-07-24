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
        ArrayList<MediaEntity> problemasFinal = mediaService.seleccion(listaProblemas);
        System.out.println(problemasFinal);
        System.out.println(problemasFinal);
        if(problemasFinal.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(problemasFinal);
    }
    @PostMapping
    public void guardarEmpleado(@RequestBody MediaEntity quiz){

        mediaService.guardarPregunta(quiz);
    }
}
