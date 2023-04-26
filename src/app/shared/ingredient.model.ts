export class Ingredients {
  public name: String;
  public quantity: number;
  public price: number;

  constructor (name: String, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}
