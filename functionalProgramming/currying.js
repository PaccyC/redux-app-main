function add (a){
    return function(b){
        return a+b;
    }
}
// Calling function
add(1)(5);