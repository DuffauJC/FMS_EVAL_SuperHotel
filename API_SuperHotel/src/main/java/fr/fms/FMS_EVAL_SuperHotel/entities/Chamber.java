package fr.fms.FMS_EVAL_SuperHotel.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.*;


/**
 * @author Stagiaire08P
 *
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Chamber {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private int bed;
	private float price;

	@ManyToOne
	private Hotel hotel;


}
