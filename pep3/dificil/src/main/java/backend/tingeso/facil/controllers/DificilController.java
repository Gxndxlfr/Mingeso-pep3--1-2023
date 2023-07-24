package backend.tingeso.facil.controllers;

import backend.tingeso.facil.entities.DificilEntity;
import backend.tingeso.facil.services.DificilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/dificil")
public class DificilController {
    @Autowired
    DificilService dificilService;

    @GetMapping
    public ResponseEntity<ArrayList<DificilEntity>> listadoProblemas(){
        ArrayList<DificilEntity> listaProblemas = dificilService.obtenerData();
        if(listaProblemas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(listaProblemas);
    }
    @PostMapping
    public void guardarEmpleado(@RequestBody DificilEntity quiz){

        dificilService.guardarPregunta(quiz);
    }
}
