console.log("this is tut 51");

//Iterators
function fruitIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }

}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Mango'];
console.log("My array is", myArray);

// using iterator
const fruits = fruitIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);