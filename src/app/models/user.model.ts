export class User {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
    public rol: string,
  ) {}


  get fullName(){
    return this.first_name + ' ' + this.last_name;
  }
}
