package fr.fms.FMS_EVAL_SuperHotel;

import fr.fms.FMS_EVAL_SuperHotel.dao.ChamberRepository;
import fr.fms.FMS_EVAL_SuperHotel.dao.CityRepository;
import fr.fms.FMS_EVAL_SuperHotel.dao.HotelRepository;
import fr.fms.FMS_EVAL_SuperHotel.entities.Chamber;
import fr.fms.FMS_EVAL_SuperHotel.entities.City;
import fr.fms.FMS_EVAL_SuperHotel.entities.Hotel;
import fr.fms.FMS_EVAL_SuperHotel.fileService.properties.FileUploadProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        FileUploadProperties.class
})
public class FmsEvalSuperHotelApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(FmsEvalSuperHotelApplication.class, args);
    }

    @Autowired
    CityRepository cityRepository;

    @Autowired
    HotelRepository hotelRepository;

    @Autowired
    ChamberRepository chamberRepository;


    /**
     * @param args
     * @throws Exception
     */
    @Override
    public void run(String... args) throws Exception {

        System.out.println("Salut");
        //dataCreation();


    }

    public void dataCreation() {

        //		city

        City Toulouse = cityRepository.save(new City(null, "Toulouse"));
        City Marseille = cityRepository.save(new City(null, "Marseille"));
        City Lyon = cityRepository.save(new City(null, "Lyon"));
        City Paris = cityRepository.save(new City(null, "Paris"));

//        Hotel
        Hotel Hotel_Nord = hotelRepository
                .save(new Hotel(null, "Hotel Du Nord", "0412548", "45, av de la Gare", 3, 12, "hotel.png", Toulouse));
        Hotel Hotel_Sud = hotelRepository
                .save(new Hotel(null, "Hotel Du Sud", "0412548", "45, av de la Brouette", 3, 10, "hotel.png", Toulouse));
        Hotel Hotel_Marseille = hotelRepository
                .save(new Hotel(null, "Hotel De la plage", "0412548", "45, av de la plage", 4, 19, "hotel.png", Marseille));
        Hotel Hotel_Lyon = hotelRepository
                .save(new Hotel(null, "Hotel Du Bouchon", "0412548", "45, av de la Lyonnaise", 6, 25, "hotel.png", Lyon));
        Hotel Hotel_Paris = hotelRepository
                .save(new Hotel(null, "Hotel Mont-Martre", "0412548", "45, av des champs en cotons", 2, 10, "hotel.png", Paris));
        
// chamber
        chamberRepository.save(new Chamber(null, 1, 1, 65.2, true, Hotel_Nord));
        chamberRepository.save(new Chamber(null, 2, 2, 90, true, Hotel_Nord));
        chamberRepository.save(new Chamber(null, 3, 1, 65.2, true, Hotel_Nord));

        chamberRepository.save(new Chamber(null, 1, 1, 65.2, true, Hotel_Sud));
        chamberRepository.save(new Chamber(null, 2, 2, 90, true, Hotel_Sud));
        chamberRepository.save(new Chamber(null, 3, 1, 65.2, true, Hotel_Sud));

        chamberRepository.save(new Chamber(null, 1, 1, 65.2, true, Hotel_Marseille));
        chamberRepository.save(new Chamber(null, 2, 2, 90, true, Hotel_Marseille));
        chamberRepository.save(new Chamber(null, 3, 1, 65.2, true, Hotel_Marseille));

        chamberRepository.save(new Chamber(null, 1, 1, 65.2, true, Hotel_Lyon));
        chamberRepository.save(new Chamber(null, 2, 2, 90, true, Hotel_Lyon));
        chamberRepository.save(new Chamber(null, 3, 1, 65.2, true, Hotel_Lyon));

        chamberRepository.save(new Chamber(null, 1, 1, 65.2, true, Hotel_Paris));
        chamberRepository.save(new Chamber(null, 2, 2, 90, true, Hotel_Paris));
        chamberRepository.save(new Chamber(null, 3, 1, 65.2, true, Hotel_Paris));

    }
}
