/**
 * 
 */
package fr.fms.FMS_EVAL_SuperHotel.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

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

	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JsonIgnore
	@JoinColumn(name = "hotel_id")
	private List<Chamber> chamber;


	
}
