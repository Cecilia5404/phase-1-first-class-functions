function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction () {
        console.log("Hello world, I am named!")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello world, I am anonymous!")
    }
} 
  