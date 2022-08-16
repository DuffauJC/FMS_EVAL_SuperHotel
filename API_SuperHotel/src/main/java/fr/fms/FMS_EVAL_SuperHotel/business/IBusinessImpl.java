/**
 *
 */
package fr.fms.FMS_EVAL_SuperHotel.business;

import fr.fms.FMS_EVAL_SuperHotel.dao.ChamberRepository;
import fr.fms.FMS_EVAL_SuperHotel.dao.CityRepository;
import fr.fms.FMS_EVAL_SuperHotel.dao.HotelRepository;
import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;
import fr.fms.FMS_EVAL_SuperHotel.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * @author Stagiaires08P
 */
@Service
public class IBusinessImpl implements IBusiness {

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    CityRepository cityRepository;

    @Autowired
    ChamberRepository chamberRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    EntityManager entityManager;


    /**
     * @return
     */
    @Override
    public List<Hotel> getAllHotel() {
        return hotelRepository.findAll();
    }

    /**
     * @return
     */
    @Override
    public List<Hotel> getHotelByCityId(Long id) {
        return hotelRepository.findByCityId(id);
    }

    /**
     * @param hotel
     * @return
     * @throws Exception
     */
    @Override
    public Hotel saveOrUpdateHotel(Hotel hotel) throws Exception {
        hotelRepository.save(hotel);
        return hotel;
    }

    /**
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteHotel(Long id) throws Exception {
        hotelRepository.deleteById(id);
    }

    /**
     * @param id
     * @return
     */
    @Override
    public List<Hotel> readAllHotelByCityId(Long id) {
        return hotelRepository.findByCityId(id);
    }

    @Override
    public Hotel getHotelById(Long id) throws Exception {
        return hotelRepository.findById(id).get();
    }
    /**
     * @return
     */
    @Override
    public List<Chamber> getAllChamber() {
        return chamberRepository.findAll();
    }

    /**
     * @return
     */
    @Override
    public List<Chamber> getChamberByHotelId(Long id) {
        return chamberRepository.findByHotelId(id);
    }

    /**
     * @param chamber
     * @return
     * @throws Exception
     */
    @Override
    public Chamber saveOrUpdateChamber(Chamber chamber) throws Exception {
        chamberRepository.save(chamber);
        return chamber;
    }

    /**
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteChamber(Long id) throws Exception {
        chamberRepository.deleteById(id);
    }

    /**
     * @param id
     * @return
     * @throws Exception
     */


    /**
     * @return
     */
    @Override
    public List<City> getAllCity() {
        return cityRepository.findAll();
    }

    /**
     * @param city
     * @return
     * @throws Exception
     */
    @Override
    public City saveOrUpdateCity(City city) throws Exception {
        cityRepository.save(city);
        return city;
    }

    /**
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteCity(Long id) throws Exception {
        cityRepository.deleteById(id);
    }

    /**
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public City getCityById(Long id) throws Exception {
        return cityRepository.findById(id).get();
    }

    /**
     * @return
     */
    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    /**
     * @param user
     * @return
     * @throws Exception
     */
    @Override
    public User saveOrUpdateUser(User user) throws Exception {
        userRepository.save(user);
        return user;
    }

    /**
     * @param id
     * @throws Exception
     */
    @Override
    public void deleteUser(Long id) throws Exception {
        userRepository.deleteById(id);
    }
}
