// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
    if (a.includes(x) == true){
      return true;
    }
    else{ return false
    }
  }

  // Lärdomar
// Bättre att skriva det som const check = (a,x) => a.includes(x); Då om array.includes() hittar värdet returneras true och om inte False. Därför är en if-sats helt onödig