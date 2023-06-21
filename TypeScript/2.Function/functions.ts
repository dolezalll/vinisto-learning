// typovani

function add(x:number, y:number):number { 
    return x + y;
}


// volitelne paramertry

function retrunName(name:string, surname?:string): string {
    
    if (surname)
     return name + ' ' + surname;
     else return name;
    
}

let nameWithoutSurname = retrunName("Jack");
let nameWithSurname = retrunName("Jack", "Doe");


//  volitelne parametry , predefinovany parametr

function returnNameWithPredefinedParameter(name: string, surname = "Doe"): string {
    return name + " " + surname;
  }

  let nameWithPredefinedParameter = returnNameWithPredefinedParameter("Jack");




  // libovolny pocet parametru 
function returnPerson(name: string, surname: string, age: number, anyParam1: any, anyParam2: any): string {
     return name + " " + surname + " " + age + " " + anyParam1 + " " + anyParam2;
}

let nameWithAnyParam = returnPerson("John","Doe", 34, true, "Developer");



  // libovolny pocet parametru  "pole"
function returnPersonWithHobby(name:string, ...hobby: string[]):string {
    
    return name + "has a hobby" +  hobby.join(", ");
    
}

let returnPersonHobby = returnPersonWithHobby("John", "Computer","Karaoke", "Cooking");



// pretezovani metody

function searchAddress(street: number, city: string): void;
function searchAddress(street: string, city: string): void;
function searchAddress(street, city): void {

    if(typeof street !== 'number') {
        console.log(`Adress is ${street}, ${city}. `);
        
      }
    
    
    else if(typeof street !== 'string') {

      console.log(`${city} is without street, but house number is ${street}`); 
    }

}


searchAddress('Nad papirnou 111', 'Teplice');
searchAddress(122, 'Teplice');






