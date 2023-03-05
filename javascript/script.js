// if multiple by 3 => fizz
// if multiple by 5 => Buzz
// if multiple by both 3 & 5 => FizzBuzz
// Not a multiple of 3 or 5 => input
// Not a number => 'Not a number'



const output = fizzBuzz(20);
console.log(output);

function fizzBuzz(input){
if (typeof input !== 'number')
return 'Not a number';

if ((input % 3 === 0) && (input % 5 === 0))
return 'FizzBuzz';

if (input % 3 ===0)
return 'Fizz';

if (input % 5 === 0)
return 'Buzz';


return input;
}