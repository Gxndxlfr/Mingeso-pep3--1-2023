package backend.tingeso.facil.repositories;

import backend.tingeso.facil.entities.DificilEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DificilRepository  extends JpaRepository<DificilEntity, Long> {
}
