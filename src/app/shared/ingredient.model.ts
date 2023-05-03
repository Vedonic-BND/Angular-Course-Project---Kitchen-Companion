export class Ingredients {
  public name: string;
  public quantity: number;
  public price: number;

  constructor (name: string, quantity: number, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}
