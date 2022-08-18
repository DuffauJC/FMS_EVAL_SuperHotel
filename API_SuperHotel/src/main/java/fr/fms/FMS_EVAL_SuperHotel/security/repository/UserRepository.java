package fr.fms.FMS_EVAL_SuperHotel.security.repository;


import fr.fms.FMS_EVAL_SuperHotel.security.models.ERole;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);


  List<User> findByRolesName(ERole name);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
