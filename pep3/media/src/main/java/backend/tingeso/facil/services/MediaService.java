package backend.tingeso.facil.services;

import backend.tingeso.facil.entities.MediaEntity;
import backend.tingeso.facil.repositories.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.attribute.standard.Media;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class MediaService {
    @Autowired
    private MediaRepository mediaRepository;

    public ArrayList<MediaEntity> obtenerData(){
        return (ArrayList<MediaEntity>) mediaRepository.findAll();
    }
    public void guardarPregunta(MediaEntity quiz) {
        mediaRepository.save(quiz);
    }

    public ArrayList<MediaEntity> seleccion(ArrayList<MediaEntity> listaProblemas) {
        // Crear un objeto Random para generar índices aleatorios
        Random random = new Random();

        // Lista para almacenar los 4 elementos seleccionados aleatoriamente
        List<MediaEntity> listaSeleccionada = new ArrayList<>();

        // Verificar si la listaProblemas tiene al menos 4 elementos
        if (listaProblemas.size() >= 4) {
            // Bucle para seleccionar 4 elementos aleatorios
            for (int i = 0; i < 4; i++) {
                // Generar un índice aleatorio dentro del rango de la listaProblemas
                int randomIndex = random.nextInt(listaProblemas.size());

                // Obtener el elemento en el índice aleatorio y agregarlo a la listaSeleccionada
                MediaEntity problemaAleatorio = listaProblemas.get(randomIndex);
                listaSeleccionada.add(problemaAleatorio);

                // Eliminar el elemento seleccionado de listaProblemas para evitar seleccionarlo nuevamente
                listaProblemas.remove(randomIndex);
            }
        } else {
            // Si listaProblemas tiene menos de 4 elementos, manejar este caso según tus necesidades.
            // Por ejemplo, podrías lanzar una excepción o manejarlo de alguna otra manera.
            return (ArrayList<MediaEntity>) listaSeleccionada;
        }
        System.out.println("C");
        return (ArrayList<MediaEntity>) listaSeleccionada;
    }
}
