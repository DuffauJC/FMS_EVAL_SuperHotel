/**
 *
 */
package fr.fms.FMS_EVAL_SuperHotel.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
@ToString
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JsonIgnore
    @JoinColumn(name = "city_id")
    private List<Hotel> hotels;



}
