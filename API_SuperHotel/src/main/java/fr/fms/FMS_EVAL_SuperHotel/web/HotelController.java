package fr.fms.FMS_EVAL_SuperHotel.web;


import fr.fms.FMS_EVAL_SuperHotel.business.IBusinessImpl;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private IBusinessImpl iBusiness;

    @GetMapping("/all")
    public List<Hotel> allUserTasks(){
        return iBusiness.getAllHotel();
    }

    @GetMapping("/{id}")
    public Hotel getHotelById(@PathVariable("id") long id) throws Exception {
       Hotel hotel =iBusiness.getHotelById(id);
     return hotel;

    }

    @PostMapping("/saveHotel")
    public Hotel saveHotel(@RequestBody Hotel hotel) throws Exception {
       return iBusiness.saveOrUpdateHotel(hotel);
    }



    @DeleteMapping("/deleteHotel/{id}")
    public void deleteHotel(@PathVariable("id") Long id) throws Exception {
        iBusiness.deleteHotel(id);

    }

    @GetMapping ("/hotelBycity/{id}")
    public List<Hotel> getHotelByCityId(@PathVariable("id") Long id){
        return iBusiness.readAllHotelByCityId(id);
    }
}


