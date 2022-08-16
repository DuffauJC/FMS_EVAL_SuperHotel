package fr.fms.FMS_EVAL_SuperHotel.web;


import fr.fms.FMS_EVAL_SuperHotel.business.IBusinessImpl;
import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/chamber")
public class ChamberController {

    @Autowired
    private IBusinessImpl iBusiness;

    @GetMapping("/all")
    public List<Chamber> allChamber(){
        return iBusiness.getAllChamber();
    }

    @GetMapping("/{id}")
    public Chamber getChamberById(@PathVariable("id") long id) throws Exception {
      Chamber chamber =iBusiness.getChamberById(id);
     return chamber;

    }

    @PostMapping("/saveChamber")
    public Chamber saveChamber(@RequestBody Chamber chamber) throws Exception {
       return iBusiness.saveOrUpdateChamber(chamber);
    }



    @DeleteMapping("/deleteChamber/{id}")
    public void deleteChamber(@PathVariable("id") Long id) throws Exception {
        iBusiness.deleteChamber(id);

    }

    @GetMapping ("/chamberByHotel/{id}")
    public List<Chamber> getChamberByHotelId(@PathVariable("id") Long id){
        return iBusiness.getChamberByHotelId(id);
    }
}


