import { User } from "./user.model";

export class Eployee extends User{
  idUser!:number;
  idRole!:number;
  idLocal!:number;
  idCinema!:number;
  idHall!:number;
  startDateContract!:Date;
  salary!:number;
}