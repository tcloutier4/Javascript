export function encryptCaesar(inputString, key) {
  // TODO: write your code here

  //In case we put in a negative number, this will bring it to the same letter of the 0-26 range
  while (key < 0){
    key = key+26
  }


  let newString = "";
  let stringLength = inputString.length;
  let counter = 0;


  while (counter < stringLength){
      //grabs the ascii character of the current string
      let newCharacter = inputString[counter].charCodeAt();
      //checks to make sure it's a capital letter (wasn't sure if you'd want small letters, but it's easy enough to add in an elif for 97 to 122)
      if (newCharacter >= 65 && newCharacter <= 90){
        while (newCharacter + key > 90){
          //in case the user puts in a number greater than 26, it'll bring it to the equivalent letter of the current range.
          newCharacter = newCharacter - 26;
        }
        //adds the the new letter to the end of the newString variable
        newString += String.fromCharCode(newCharacter + key);
        counter++;
      }
      else{
        //if the character is a punctuation or a number (or a lowercase letter for this version), then it stays the same 
        newString += inputString[counter];
        counter++;
      }
  }
  return newString;

}
