package fr.fms.FMS_EVAL_SuperHotel.web;


import fr.fms.FMS_EVAL_SuperHotel.business.IBusinessImpl;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.security.models.ERole;
import fr.fms.FMS_EVAL_SuperHotel.security.models.Role;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IBusinessImpl iBusiness;

    @GetMapping("/all")
    public List<User> allUser(){
        return iBusiness.getAllUser();
    }

    @GetMapping("/allRoles")
    public List<Role> allRoles(){
        return iBusiness.getAllRoles();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") long id) throws Exception {
      User user =iBusiness.getUserById(id);
     return user;

    }
    @GetMapping("/userByRole/{role}")
    public List<User> getUserByRoleName(@PathVariable("role") String role) throws Exception {
        Optional<Role> r = iBusiness.findRoleByName(ERole.valueOf(role));
        if (r.isPresent()) {
            return iBusiness.readAllUserByRolesName(ERole.valueOf(role));
        }
        return null;
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable("id") Long id) throws Exception {
        iBusiness.deleteUser(id);

    }

}


