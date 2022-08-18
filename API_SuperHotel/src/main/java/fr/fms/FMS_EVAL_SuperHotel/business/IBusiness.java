/**
 *
 */
package fr.fms.FMS_EVAL_SuperHotel.business;

import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.security.models.ERole;
import fr.fms.FMS_EVAL_SuperHotel.security.models.Role;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;

import java.util.List;
import java.util.Optional;

/**
 * @author Stagiaires08P
 */
public interface IBusiness {

    //	gestion hotel /////////////

    public List<Hotel> getAllHotel();

    public Hotel saveOrUpdateHotel(Hotel hotel) throws Exception;

    public void deleteHotel(Long id) throws Exception;

    public Hotel getHotelById(Long id) throws Exception;

    public List<Hotel> readAllHotelByCityId(Long id);

    public List<Hotel> findByUserId(Long id);

    //	gestion chambre /////////////

    public List<Chamber> getAllChamber();

    public List<Chamber> getChamberByHotelId(Long id);

    public Chamber saveOrUpdateChamber(Chamber chamber) throws Exception;

    public void deleteChamber(Long id) throws Exception;

    public Chamber getChamberById(Long id) throws Exception;

    //	gestion city ////////////

    public List<City> getAllCity();

    public City saveOrUpdateCity(City city) throws Exception;

    public void deleteCity(Long id) throws Exception;

    public City getCityById(Long id) throws Exception;

    public Optional<City> findCityByName(String name) throws Exception;


    // gestion des gestionnaires par l'admin ///////////

    public List<User> getAllUser();

    public User saveOrUpdateUser(User user) throws Exception;

    public void deleteUser(Long id) throws Exception;

   public User getUserById(long id);

   public List<Role> getAllRoles();

   public Optional<Role> findRoleByName(ERole name);

  public  List<User> readAllUserByRolesName(ERole name);
}
