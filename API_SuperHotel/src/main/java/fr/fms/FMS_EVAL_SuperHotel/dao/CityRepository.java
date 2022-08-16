/**
 * 
 */
package fr.fms.FMS_EVAL_SuperHotel.dao;


import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Stagiaires08P
 *
 */
@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
