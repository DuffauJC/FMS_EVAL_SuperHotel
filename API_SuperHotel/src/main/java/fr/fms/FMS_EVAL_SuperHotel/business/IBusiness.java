/**
 *
 */
package fr.fms.FMS_EVAL_SuperHotel.business;

import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;

import java.util.List;
import java.util.Optional;

/**
 * @author Stagiaires08P
 *
 */
public interface IBusiness {

    //	gestion hotel /////////////

    public List<Hotel> getAllHotel();

    public List<Hotel> getHotelByCityId(Long id);

    public void saveOrUpdateHotel(Hotel hotel) throws Exception;

    public void deleteHotel(Long id) throws Exception;


    //	gestion chambre /////////////

    public List<Chamber> getAllChamber();

    public List<Chamber> getChamberByHotelId(Long id);

    public void saveOrUpdateChamber(Chamber chamber) throws Exception;

    public void deleteChamber(Long id) throws Exception;


    //	gestion city ////////////

    public List<City> getAllCity();

    public void saveOrUpdateCity(City city) throws Exception;

    public void deleteCity(Long id) throws Exception;


    // gestion des gestionnaires par l'admin ///////////

    public List<User> getAllUser();

    public void saveOrUpdateUser(User user) throws Exception;

    public void deleteUser(Long id) throws Exception;
}
