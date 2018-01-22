class Bee extends Grub {
  
  constructor() {
    // call the Grub constructor
    super();

    this.age = 5;
    this.color = 'yellow';
    // inherit .food and .eat() from Grub and Grub.prototype
    this.job = 'Keep on growing';
  }
};
