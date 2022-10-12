console.log("This is tut 28");

let obj = {
    name:'Hamza',
    address: 'Mars',
    tel: 147
};

function Obj(givenName){
    this.name = givenName;
};

Obj.prototype.getName = function(){
    return this.name;
};

Obj.prototype.setName = function(newName){
    this.name = newName;
};
let obj2 = new Obj("alpha");
console.log(obj2);