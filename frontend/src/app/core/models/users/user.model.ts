export class User{
  id!:number;
  name!:string;
  email!:string;
  password!:string;
  phone!:number;

  constructor(){
  }
}

export class Client extends User{
  idClient!:number;
  points!:number;
  purchase!:number;

  constructor(){
    super();
  }
}

export class Employee extends User{
  idEmployee!:number;
  idRole!:string;
  idLocal!:number;
  idCinema!:number;
  idHall!:number;
  startDateContract!:Date;
  salary!:number;
  

  constructor(){
    super()
  }
}