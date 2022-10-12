console.log("This is tut 27");


// Object literal for creating object
    let car ={
        name: 'Toyota',
        topSpeed: 220,
        run: function(){
            console.log("Car is running");
        }
    }
    console.log(car);

    //creating a constructor 

    function generalCar(givenName, givenSpeed ){
        this.name = givenName;
        this.speed = givenSpeed;
        this.run = function(){
            console.log(`${this.name} is running`);
        }
        this.analyze = function(){
            console.log(`this car is slower ${200 - this.speed} KM/H than mercedes`);
        }
    }

    car1 = new generalCar('Suzuki', 120);
    car2 = new generalCar('Honda', 180);
    console.log(car1);