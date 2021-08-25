export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  //Just a random note, in your example 6 is an output, instead of fizz.

  let counter = 0;
  //creating an empty array
  let fizzBuzzArray = [];
  let currentNumber;
  while (counter < n){

      //this is just to make things more readable
      currentNumber = counter + 1;

      //checks if the number is divisible by 5
      if (currentNumber%5 == 0){

      // if it is, then checks if the number is also divisible by 3.
        if (currentNumber%3 == 0){
          fizzBuzzArray[counter] = "FizzBuzz";
          counter++;
        }
        else{
        fizzBuzzArray[counter] = "Buzz";
        counter++;
        }
      }
      else if (currentNumber%3 == 0){
        fizzBuzzArray[counter] = "Fizz";
        counter++;
      }
      else{
         fizzBuzzArray[counter] = currentNumber
         counter++;
      }
  }
  return fizzBuzzArray;
}
