function today(idk){
    console.log(`${idk}`);
}
function receivesAFunction(today){
        today(); 
    }        
        
let math = addition => 2 + 2;
  function returnsANamedFunction(){
    return math;
  }
  let math2 = function (a, b) {
    return (function(){a+b});
};

function returnsAnAnonymousFunction(){
    return math2();
}