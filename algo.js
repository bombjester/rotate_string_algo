var rotateString = function(A, B) {
  if(A == B){
      return true;
  }
    for(letter in B){
        var front = B.slice(0, letter)
       var back = B.substring(letter, B.length)
       //console.log(back+front, A)
        if(back+front == A){
            return true;
        }
    }

        return false;
    
};