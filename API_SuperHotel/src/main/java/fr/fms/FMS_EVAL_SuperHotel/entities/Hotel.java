/**
 * 
 */
package fr.fms.FMS_EVAL_SuperHotel.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import fr.fms.FMS_EVAL_SuperHotel.security.models.Role;
import fr.fms.FMS_EVAL_SuperHotel.security.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Stagiaires08P
 *
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hotel {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String phone;
	private String address;
	private int stars;
	private int freeChambers;
	private String imgName;

	@ManyToOne
	private City city;



	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JsonIgnore
	@JoinColumn(name = "hotel_id")
	private List<Chamber> chamber;

	@ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinTable(  name = "gestionnaire_hotel",
			joinColumns = @JoinColumn(name = "hotel_id"),
			inverseJoinColumns = @JoinColumn(name = "user_id"))
	private List<User> user;

	public Hotel(Long id, String name, String phone, String address, int stars, int freeChambers, String imgName, City city) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.stars = stars;
		this.freeChambers = freeChambers;
		this.imgName = imgName;
		this.city = city;
	}


}
