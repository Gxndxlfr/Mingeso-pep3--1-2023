package backend.tingeso.facil.services;

import backend.tingeso.facil.entities.FacilEntity;
import backend.tingeso.facil.repositories.FacilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class FacilService {
    @Autowired
    private FacilRepository facilRepository;

    public ArrayList<FacilEntity> obtenerData(){
        return (ArrayList<FacilEntity>) facilRepository.findAll();
    }

    public void guardarPregunta(FacilEntity quiz) {
        facilRepository.save(quiz);
    }

    public ArrayList<FacilEntity> seleccion(ArrayList<FacilEntity> listaProblemas) {

        System.out.println(listaProblemas);
        // Crear un objeto Random para generar índices aleatorios
        Random random = new Random();

        // Lista para almacenar los 4 elementos seleccionados aleatoriamente
        List<FacilEntity> listaSeleccionada = new ArrayList<>();

        // Verificar si la listaProblemas tiene al menos 4 elementos
        if (listaProblemas.size() >= 4) {
            System.out.println("A");
            // Bucle para seleccionar 4 elementos aleatorios
            for (int i = 0; i < 4; i++) {
                // Generar un índice aleatorio dentro del rango de la listaProblemas
                int randomIndex = random.nextInt(listaProblemas.size());

                // Obtener el elemento en el índice aleatorio y agregarlo a la listaSeleccionada
                FacilEntity problemaAleatorio = listaProblemas.get(randomIndex);
                listaSeleccionada.add(problemaAleatorio);
                System.out.println(listaSeleccionada);
                // Eliminar el elemento seleccionado de listaProblemas para evitar seleccionarlo nuevamente
                listaProblemas.remove(randomIndex);
            }
        } else {
            System.out.println("B");
            // Si listaProblemas tiene menos de 4 elementos, manejar este caso según tus necesidades.
            // Por ejemplo, podrías lanzar una excepción o manejarlo de alguna otra manera.
            return (ArrayList<FacilEntity>) listaSeleccionada;
        }
        System.out.println("C");
        return (ArrayList<FacilEntity>) listaSeleccionada;
    }
}
