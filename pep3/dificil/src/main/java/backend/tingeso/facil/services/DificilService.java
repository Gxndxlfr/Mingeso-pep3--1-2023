package backend.tingeso.facil.services;

import backend.tingeso.facil.entities.DificilEntity;
import backend.tingeso.facil.repositories.DificilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.attribute.standard.Media;
import java.util.ArrayList;

@Service
public class DificilService {
    @Autowired
    private DificilRepository dificilRepository;

    public ArrayList<DificilEntity> obtenerData(){
        return (ArrayList<DificilEntity>) dificilRepository.findAll();
    }
}
