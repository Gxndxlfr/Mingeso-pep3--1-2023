package backend.tingeso.facil.services;

import backend.tingeso.facil.entities.MediaEntity;
import backend.tingeso.facil.repositories.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.attribute.standard.Media;
import java.util.ArrayList;

@Service
public class MediaService {
    @Autowired
    private MediaRepository mediaRepository;

    public ArrayList<MediaEntity> obtenerData(){
        return (ArrayList<MediaEntity>) mediaRepository.findAll();
    }
}
