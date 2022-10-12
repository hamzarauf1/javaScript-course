for (let index = 1; index < 101; index++) {
    if(index % 15 ==0){
        console.log("The Number is Fizz Buzz");
        continue;
    }
    else if(index % 3 == 0){
        console.log("The Number is Fizz");
        continue;
    }
    else if (index % 5 ==0){
        console.log("The Number is Buzz");
        continue;
    }
   console.log("The Number is ", index);
}