import { Hotel } from "./hotel.model";

export class Chamber {
    id: number
    bed: number;
    hotelId:Hotel;
    dispo: boolean;
    numberChamber: number;
    price:number


    constructor(id: number, bed: number,
        hotelId: Hotel,
        dispo: boolean,
        numberChamber: number,price:number) {
        
        this.id = id
        this.bed = bed
        this.hotelId = hotelId
        this.dispo = dispo
        this.numberChamber=numberChamber
       this.price=price
    }

}
