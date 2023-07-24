package backend.tingeso.facil.repositories;

import backend.tingeso.facil.entities.MediaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaRepository  extends JpaRepository<MediaEntity, Long> {
}
