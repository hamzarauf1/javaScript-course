console.log("This is tut 30");


const proto = {
    slogan: function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}
// // This creates hamza object
const hamza = Object.create(proto);
hamza.name = "Hamza";
hamza.role ="Programmer";
hamza.changeName("Hamza_abc");
// console.log(hamza);

// alternate old way to create object also creates "hamza" object

const hamza1 = Object.create(proto,{
    name: {value: 'Hamza', writable:true},
    role: {value: 'Programmer'},
})

hamza1.changeName("Hamza_123");
console.log(hamza1);


// employee constructor

function Employee(name, salary, experiance){
    this.name=name;
    this.salary=salary;
    this.experiance= experiance;
}

// slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Reguards ${this.name}`;
}

let hamzaObj = new Employee("Hamza", 3000 ,3);
console.log(hamzaObj.slogan());


//programmer

function Programmer(name, salary, experiance, language){
    Employee.call(this, name, salary, experiance);
    this.language= language;
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually inherit the constructor
Programmer.prototype.constructor = Programmer;



let imran = new Programmer("Imran", 2500, 1, "JavaScript");
console.log(imran);