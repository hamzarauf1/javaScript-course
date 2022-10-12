console.log("this is tut 31");

class Employee{
    constructor(givenName, givenExperiance, givenDivision){
        this.name = givenName;
        this.givenExperiance = givenExperiance;
        this.givenDivision = givenDivision
    }
    slogan(){
        return ` I am ${this.name} and i love this company`;
    }

    joiningYear(){
        return 2022 - this.givenExperiance;
    }

    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperiance, givenDivision, language, github){
        super(givenName, givenExperiance, givenDivision);
        this.language = language;
        this.github = github;
    }

    favLanguage(){
        if(this.language== "Python"){
            return "Python";
        }
        else{
            return "JavaScript";
        }
    }

    static multiply(a,b){
        return a*b;
    }
}

// hamza = new Employee("Hamza", 3, "Division");
// console.log(hamza.joiningYear());

// console.log(Employee.add(4,88));

hamza = new Programmer("hamza", 5, "Web Development", "JavaScript", "abc.123");
console.log(hamza);
console.log(hamza.favLanguage());
console.log(Programmer.multiply(5,7));