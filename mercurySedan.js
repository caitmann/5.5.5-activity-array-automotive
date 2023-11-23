//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        this.passengers = num;
    }
    start() {
        if(this.fuel > 0) {
            this.started = true;
        }
    }
    checkService() {
        if(this.mileage > 30000) {
            this.scheduleService = true;
        }
    }
}


//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:
let redCar = new Car("Array Automotive", "Cool", 1990, "red", 210000)
console.log("This car has " + redCar.passengers + " passengers.")
redCar.loadPassenger(1)
console.log("This car has " + redCar.passengers + " passengers.")
redCar.start()
console.log(redCar.fuel + " gallons of fuel. It is " + redCar.started + " that this car is started.")
redCar.checkService()
console.log("It is " + redCar.scheduleService + " that this car is due for service.")

//BONUS//
class Truck extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.awd = true;
        this.towPackage = true;
        this.weightCapacity = 3000;
        this.towCapacity = 15000;
        this.bedLength = 7;
    }
    stowOrTow(weight, length) {
        if(weight > 15000) {
            console.log("You are unable to transport this item in this vehicle.")
        }
        else if(weight > 3000) {
            console.log("You must tow this item due to weight.")
        } else if(length > 7) {
            console.log("You must tow this item due to length.")
        } else {
            console.log("You may transport this item in the bed of this truck.")
        }
    }

}

//BONUS TEST//
let redTruck = new Truck("Array Automotive", "Rocky", 2003, 119000)
redTruck.stowOrTow(5000, 10)
redTruck.stowOrTow(100, 2)
redTruck.stowOrTow(20000, 6)
redTruck.stowOrTow(300, 12)