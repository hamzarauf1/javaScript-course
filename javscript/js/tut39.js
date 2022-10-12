console.log("This is tut 39");

function func1(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const error =true;
            if(!error){
                console.log("Your promise has been fulfilled");
                resolve();
            }
            else{
                console.log("Your promise has not been fulfilled");
                reject("Sorry not fulfilled");
            }

        }, 3000);
    })
}

func1().then(function(){
    console.log("Thanks for resolving");
}).catch(function(error){
    console.log("Very bad bro "+ error);
})