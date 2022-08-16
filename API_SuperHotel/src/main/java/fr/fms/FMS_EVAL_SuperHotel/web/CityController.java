package fr.fms.FMS_EVAL_SuperHotel.web;


import fr.fms.FMS_EVAL_SuperHotel.business.IBusinessImpl;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/city")
public class CityController {

    @Autowired
    private IBusinessImpl iBusiness;


    @GetMapping("/all")
    public List<City> allCities(){
        return iBusiness.getAllCity();
    }

    @GetMapping("/{id}")
    public City getCity(@PathVariable("id") long id) throws Exception {
       City city = iBusiness.getCityById(id);
            return city;
    }
    @PostMapping("/saveCity")
    public City saveCity(@RequestBody City city) throws Exception {
      return   iBusiness.saveOrUpdateCity(city);
    }

    @DeleteMapping("/deleteCity/{id}")
    public void deleteCity(@PathVariable("id") Long id) throws Exception {
        iBusiness.deleteCity(id);

    }
}

