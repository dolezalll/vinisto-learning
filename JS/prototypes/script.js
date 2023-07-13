const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid

  
  // object lierials 

  // ma jednu property city a metodu greet() 

  // kdyz napisu myObject do konzole vypise to vsechny properties jak predepsane tak mnoho dalsich


  // kazdž obekt v js má vbudované funkce a parametry
  

  myObject.toString(); // "[object Object]"


 // Object.getPrototypeOf(myObject); // Object { }









 //  The prototype of an object is not always Object.prototype. Try this:



//  const myDate = new Date();
//  let object = myDate;
 
//  do {
//    object = Object.getPrototypeOf(object);
//    console.log(object);
//  } while (object);
 
//  // Date.prototype
//  // Object { }
//  // null

 

// This is called "shadowing" the property.



 const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'





