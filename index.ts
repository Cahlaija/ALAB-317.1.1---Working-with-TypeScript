//@ts-check
//ALAB 317.1.1 - Working with TypeScript

class Vehicle {
make: string;
model: string;
wheels: number;
status: "started" | "stopped";

constructor(make: string, model: string, wheels: number) {
this.make = make;
this.model = model;
this.wheels = wheels;
this.status = "stopped";

}
start(): void {
    this.status ="started";
}
stop(): void {
    this.status ="stopped";
}
}

class Car extends Vehicle {
constructor(make: string, model: string){
    super(make,model, 4);
}
}
class MotorCycle extends Vehicle {
constructor(make: string, model: string) {
    super(make, model, 2);
}
}

//part 3 

class NCycle<T> {
make: T | T[];
model: T | T[];
wheels: number;
status: "started" | "stopped";

constructor(
    make: T | T[],
    model: T | T[],
    wheels: number
){
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = "stopped";
}

start(): void {
    this.status = "started";
}
stop(): void {
    this.status = "stopped";
}
print(index: number = 0): void {
    if (
        !Array.isArray(this.make) &&
        !Array.isArray(this.model)
    ) {
        console.log(
            `This is a ${this.make} ${this.model} NCycle.`
         );
    } else if (
        Array.isArray(this.make) &&
        Array.isArray(this.model) &&
        index < this.make.length &&
        index < this.model.length
    ) {
        console.log(
            `This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`
        );
    } else {
        console.log("This NCycle was not created properly.");
    }
}

printAll(): void {
    if (
        !Array.isArray(this.make) &&
        !Array.isArray(this.model)
    ) {
        console.log(
            `This is a ${this.make} ${this.model} NCycle.`
        );
    } else if (
        Array.isArray(this.make) &&
        Array.isArray(this.model)
    ) {
        const max = Math.min(
            this.make.length,
            this.model.length
        );

        for (let i = 0; i < max; i++) {
            console.log(
                `This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`
            );
        }
    } else {
        console.log("This NCycle was not created properly.");
    }
}
}

const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const makes4 = ["Volkswagen", "Tesla", "Audi"];
const models4 = ["passat", "Model X", "A4"];

const testCycle4 = new NCycle<string>(
    makes4,
    models4,
    4
);

testCycle4.print(2);
testCycle4.printAll();

function printStatus(vehicle: Vehicle): void {
    console.log(vehicle.status);
}