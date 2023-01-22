class Hamster {
  constructor(owner, name, price) {
  this.owner = "";
  this.name = name;
  this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}
class Person {
  constructor(name, age, height, weight, mood , hamsters, bankAccount) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log("Nice to meet you " + this.name);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice(hamster);
  }
}

//1.
const timmy = new Person('Timmy');

//2., 3., 4.
for(let i = 0; i < 5; i++){
   timmy.ageUp()
   timmy.eat()
   timmy.exercise()
}

//5. 
for(let i = 0; i < 9; i++){
  timmy.ageUp()
}
//6.
const gus = new Hamster('Timmy', 'Gus');
//console.log(gus)

//7.
gus.owner = "Timmy";

//8. 
timmy.buyHamster(gus)

//9.
for(let i = 0; i < 15; i++){
  timmy.ageUp()
}

//10.
for(let i = 0; i < 2; i++){
  timmy.eat()
  timmy.exercise()
}

console.log(timmy)

////// chef ex. 

class Dinner{
  constructor(appetizer, entree, dessert){
      this.appetizer = appetizer
      this.entree = entree
      this.dessert = dessert
  }
}
class Chef {
  constructor(){
    this.mealList = []
  }
  newMeal(appetizer, entree, dessert){
    let dinner = new Dinner(appetizer, entree, dessert);
    this.mealList.push(dinner)
  }
}

let chef1 = new Chef();
let chef2 = new Chef();
let chef3 = new Chef();

chef1.newMeal('street corn', 'cuban sandwich', 'hot fudge sundae');
chef2.newMeal('chicken samosas', 'margherita flatbread pizza', 'pineapple upside-down cheesecake');
chef3.newMeal('quesadilla', 'thai chicken salad', 'taro ice cream');

console.log(chef1.mealList)
console.log(chef2.mealList)
console.log(chef3.mealList)
