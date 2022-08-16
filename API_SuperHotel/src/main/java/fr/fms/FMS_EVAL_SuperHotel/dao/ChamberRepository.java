/**
 * 
 */
package fr.fms.FMS_EVAL_SuperHotel.dao;

import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author Stagiaires08P
 *
 */
@Repository
public interface ChamberRepository extends JpaRepository<Chamber, Long> {
    List<Chamber> findByHotelId(Long id);
}
