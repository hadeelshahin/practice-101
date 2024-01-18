//Constructor Function:
function Car(name, model, make) {
  this.name = name;
  this.model = model;
  this.make = make;
  // this.displayInfo = function () {
  // console.log(`
  // Car Name :${this.name}
  // Car Model : ${this.model} };
}
//add method using prototype
Car.prototype.displayInfo = function () {
  //this works same as Classes with extends but manually
  console.log(`
    Car Name :${this.name}
    Car Model : ${this.model}
    Car Country Make :${this.make}`);
};
const carObj = new Car("Toyota", 2016, "Japan");
carObj.displayInfo();
console.log(carObj.__proto__); // to access al the methods and proprties that inherited from the prototype
console.log(carObj.__proto__ === Car.prototype); //true
const car2 = new carObj.__proto__.constructor("BMW", 2010, "Germany"); // helps in case we don't have access to the constructor
car2.displayInfo();
Car.showData = function () {
  console.log(`model :${car2.model}`); //this works
  console.log("showdata");
};
//carObj.showData(); will not work
//instaed:
Car.showData();
/*In JavaScript, when add a method to a constructor function's prototype,
 it becomes a method that is shared among all instances created with that constructor.
  However, if  add a method directly to the constructor function itself, it becomes a static method,
   meaning it is not part of the instances but is accessible directly from the constructor. */

   const course = {
    // new Object()
    title: 'title',
    rating: 5
  };
  
  // console.log(Object.getPrototypeOf(course));
  Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printRating: function() {
      console.log(`${this.rating}/5`);
    }
  });
  
  const student = Object.create({
    printProgress: function() {
      console.log(this.progress);
    }
  }, {
    name: {
      configurable: true,
      enumerable: true,
      value: 'hadeel',
      writable: true
    }
  });
  
  // student.name = 'hadeel';
  
  Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
  });
  
  student.printProgress();
  
  console.log(student);
  
  course.printRating();
  