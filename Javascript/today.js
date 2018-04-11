

// class Person {
//     constructor (name) {
//       this.name = name;
//     }
//     greet(other) {
//       console.log(`Hello ${other.name}, I'm ${this.name}`);
//     }
//   }

//   var aPerson1 = new Person("Veronica");
//   var aPerson2 = new Person("Paul");

//   aPerson1.greet(aPerson2);
//Closure

var p = new Promise(function(resolve, reject) {
  resolve("hello world");
});

p.then(function(str) {
  alert(str);
});


function add (a, b) {

    
    var innerAddFunction = function () {
        // var a = 3;
    // var b = 4;
      return a+b;
    }
    
    
    return innerAddFunction;
  }
  
  var myResult = add(5, 5);
  var myResult2 = add(10, 4);
  var myResult3 = add(10, 11);

  console.log(myResult);
  console.log(myResult2());
  console.log(myResult3());

  //console.log(myResult);
  



// var Y = function(){

//   //code goes here
// }

//  console.dir(Y);


//object constructor
// var X = function(j) {
//     this.i = 0; //setting default value
//     this.j = j;

    

//     this.getJ = function() {
//         return this.j;
//     }
    
// };


// //prototype
// X.prototype.getJ = 
// function(){
//     return this.j;
// };

//  var x1 = new X(1);
//  var x2 = new X(2);

//  var TodayDate = new Date();

//  console.log(TodayDate.toString());

 

 //closure




// console.log(x1.getJ());
// console.log(x2.getJ());

// console.log(X);
// console.log(x1);
// console.log(x2);


// var course = {
//     title: "Digital Crafts 16 Week Bootcamp",
//     instructor: "Veronica Lino",
//     level: 1,
//     published: true,
//     views = 0
//     }
// ;


// //creating an object construction
// var Course = function(title, instructor, level, published){
//         this.title = title;
//         this.instructor = instructor;
//         this.level = level;
//         this.published = published;
      
// };

// var course1 = new Course("Digital Crafts 16 Week Bootcamp", "Veronica", 0, true);
// var course2 = new Course("Digital Crafts Flex Progam", "Paul", 0, true);

// console.log(course1);


// console.log(course1.title);

// console.log(course1["title"]);
