const chai =("chai");
const spies = ("chai-spies");
chai.use(spies);

function receivesAFunction(spy){
    return spy()
}
  
function returnsANamedFunction(){
    return function test(){
  }
}
  
function returnsAnAnonymousFunction(){
    return function(){
 }
}