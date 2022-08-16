/**
 *
 */
package fr.fms.FMS_EVAL_SuperHotel.business;

import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;

import java.util.List;

/**
 * @author Stagiaires08P
 */
public interface IBusiness {

    //	gestion hotel /////////////

    public List<Hotel> getAllHotel();

    public List<Hotel> getHotelByCityId(Long id);

    public Hotel saveOrUpdateHotel(Hotel hotel) throws Exception;

    public void deleteHotel(Long id) throws Exception;

    public Hotel getHotelById(Long id) throws Exception;
   public  List<Hotel> readAllHotelByCityId(Long id);


    //	gestion chambre /////////////

    public List<Chamber> getAllChamber();

    public List<Chamber> getChamberByHotelId(Long id);

    public Chamber saveOrUpdateChamber(Chamber chamber) throws Exception;

    public void deleteChamber(Long id) throws Exception;



    //	gestion city ////////////

    public List<City> getAllCity();

    public City saveOrUpdateCity(City city) throws Exception;

    public void deleteCity(Long id) throws Exception;

    public City getCityById(Long id) throws Exception;


    // gestion des gestionnaires par l'admin ///////////

    public List<User> getAllUser();

    public User saveOrUpdateUser(User user) throws Exception;

    public void deleteUser(Long id) throws Exception;
}
