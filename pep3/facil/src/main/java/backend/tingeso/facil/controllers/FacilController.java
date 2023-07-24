package backend.tingeso.facil.controllers;

import backend.tingeso.facil.entities.FacilEntity;
import backend.tingeso.facil.services.FacilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/facil")
public class FacilController {
    @Autowired
    FacilService facilService;

    @GetMapping
    public ResponseEntity<ArrayList<FacilEntity>> listadoProblemas(){
        ArrayList<FacilEntity> listaProblemas = facilService.obtenerData();

        ArrayList<FacilEntity> problemasFinal = facilService.seleccion(listaProblemas);

        System.out.println(problemasFinal);
        if(problemasFinal.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(problemasFinal);
    }
    @PostMapping
    public void guardarEmpleado(@RequestBody FacilEntity quiz){

        facilService.guardarPregunta(quiz);
    }
}
