package backend.tingeso.facil.services;

import backend.tingeso.facil.entities.DificilEntity;
import backend.tingeso.facil.repositories.DificilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.attribute.standard.Media;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class DificilService {
    @Autowired
    private DificilRepository dificilRepository;

    public ArrayList<DificilEntity> obtenerData(){
        return (ArrayList<DificilEntity>) dificilRepository.findAll();
    }

    public void guardarPregunta(DificilEntity quiz) {
        dificilRepository.save(quiz);
    }

    public ArrayList<DificilEntity> seleccion(ArrayList<DificilEntity> listaProblemas) {
        // Crear un objeto Random para generar índices aleatorios
        Random random = new Random();

        // Lista para almacenar los 4 elementos seleccionados aleatoriamente
        List<DificilEntity> listaSeleccionada = new ArrayList<>();

        // Verificar si la listaProblemas tiene al menos 4 elementos
        if (listaProblemas.size() >= 4) {
            // Bucle para seleccionar 4 elementos aleatorios
            for (int i = 0; i < 4; i++) {
                // Generar un índice aleatorio dentro del rango de la listaProblemas
                int randomIndex = random.nextInt(listaProblemas.size());

                // Obtener el elemento en el índice aleatorio y agregarlo a la listaSeleccionada
                DificilEntity problemaAleatorio = listaProblemas.get(randomIndex);
                listaSeleccionada.add(problemaAleatorio);

                // Eliminar el elemento seleccionado de listaProblemas para evitar seleccionarlo nuevamente
                listaProblemas.remove(randomIndex);
            }
        } else {
            // Si listaProblemas tiene menos de 4 elementos, manejar este caso según tus necesidades.
            // Por ejemplo, podrías lanzar una excepción o manejarlo de alguna otra manera.
            return (ArrayList<DificilEntity>) listaSeleccionada;
        }
        System.out.println("C");
        return (ArrayList<DificilEntity>) listaSeleccionada;
    }
}
