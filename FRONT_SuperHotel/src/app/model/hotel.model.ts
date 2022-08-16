import { City } from "./city.model";

export class Hotel {
    id: number
    name: string;
    address: string;
    freeChambers: number
    imgName: string
    phone: string
    stars: number
    city: City

    constructor(id: number, name: string, address: string,
        freeChambers: number,
        imgName: string,
        phone: string,
        stars: number,
        city: City) {
        
        this.id = id
        this.name = name
        this.address = address
        this.freeChambers = freeChambers
        this.phone = phone
        this.stars = stars
        this.city = city
        this.imgName = imgName

    }

}
