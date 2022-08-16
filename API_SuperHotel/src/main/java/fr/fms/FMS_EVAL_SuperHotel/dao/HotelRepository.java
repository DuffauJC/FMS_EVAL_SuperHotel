/**
 * 
 */
package fr.fms.FMS_EVAL_SuperHotel.dao;


import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @author Stagiaires08P
 *
 */
@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    List<Hotel> findByCityId(Long id);
}
