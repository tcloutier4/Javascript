export function isPalindrome(inputString) {
  // TODO: write your code here

  //I'm assuming that you can input things like spaces and punctuations and not ruin the essence of a palindrome.

  // If you want to use a very long example I recommend Dmitri Martin's palindrome (he was one of my favorite comedians as a kid)
  //  https://users.math.yale.edu/public_html/People/frame/Fractals/Panorama/Literature/Martin/MartinPalindrome.html
  
  //CODE BEGIN

  //grabs the length of the passed string
  let stringLength = inputString.length - 1;
  let counter = 0;

  //makes the string all lower case, because I'm assuming capitalization doesn't ruin the eseence of a plaindrome.
  inputString = inputString.toLowerCase();

  //Coding the while statement like this means that it only goes through by left half and right half
  //  meaning we don't double check once we hit the middle of the palindrome
  while (counter <= stringLength){
      //Assigning the current characters on both ends of the string
      let leftToRightCharacter = inputString[counter];
      let rightToLeftCharacter = inputString[stringLength];

      //Checks to make sure the character assigned is a letter
      while (!leftToRightCharacter >= "a" && leftToRightCharacter <= "z"){
        counter++;
      }
      while (!rightToLeftCharacter >= "a" && rightToLeftCharacter <= "z"){
        stringLength--;
      }

      //Once we've assigned a letter to both variables, we check if they're equal.
      //If they're equal, then we move the counters again
      if (rightToLeftCharacter == leftToRightCharacter){
        counter++;
        stringLength--;
      }
      //If they're not equal, then it's not a palindrome.
      else {return false;}
  }
  return true;
}