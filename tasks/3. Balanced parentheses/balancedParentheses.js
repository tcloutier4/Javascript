export function areParenthesesBalanced(inputString) {
  // TODO: write your code here

  //gets the length of the passed string
  let stringLength = inputString.length;
  let counter = 0;
  let parenthesesTracker = 0;
  //allows us to move through the string one character at a time
  while (counter < stringLength){

    //assigns the current character to a variable so we can check if it's a parenthesis

//(()((())()))
    //moving through the string until we find a parenthesis
    while (!(inputString[counter] == "(" || inputString[counter] == ")")){
      counter++;
    }

    //making use of the tracker to figure out if the parentheses are in good order/number.
    //if the tracker ever goes negative, it's automatically false, because there are more end parentheses than beginning at some point.
    if (inputString[counter] == "("){
      parenthesesTracker++;
      counter++;
    }
    else{
      parenthesesTracker--;
      counter++;
      if (parenthesesTracker < 0){
        return false;
      }
    }

  }
  //if after going through the entire string, the tracker is 0, then it checks out and is true.
  if (parenthesesTracker == 0){
    return true;
  }
  else{
    return false;
  }
}