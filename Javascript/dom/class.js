
function Hello()

{
    alert("Hello World");
}

document.getElementById("btnDeal").addEventListener("click", function(){
    //write dealer logic here

    Hello();
});



// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6]
//   ];



// var newArray = [];
// var sumList = [];


// function SumArray(arr){
    
        
//         //use map to find sum
//         sumList = arr.reduce(function sum(value, item){
            
//             //console.log(item);
//             return value + item;
            
            
//         }, 0);

        
//         return sumList;
        
   
    
// }//end of SumArray




// arr.sort(function(a, b){
    
//     return (SumArray(a) - SumArray(b));
// });

// //SumArray(arr);

// console.log(arr);




// var arr = [2, 4, 5];
// var sum = arr.reduce(function combine(value, item) {
//   return value + item;
// }, 0);

// console.log(sum);


// var acronym = ['very', 'important', 'person'];

// var acronym2 = ['national', 'aeronautics', 'space', 'administration'];

// var a1 = acronym.reduce(function acro1(value, item){
//     return value + item.charAt(0).toUpperCase();
// }, '');

// console.log(a1);

// function acro2(value, item)
// {
//     return (value + item.charAt(0).toUpperCase());
// }

// var a2 = acronym2.reduce((acro2), '');

// console.log(a2);
//////////////////////////

// var c = 9;

// function TestingScope(){

//     var a = 3;

//     if(a >=0 ){

//         let a = 2;

//         console.log(a);
//     }

//     console.log(a);
// }

//console.log(a);

//TestingScope();`

//Example of callbacks

// function secondFunction(fName)
// {

//     console.log("hello world");
// }

// var result = secondFunction(TestingScope());



//passing by refrence

//setting an object

// var outside ={

//     name1: 'Veronica',
//     name2: 'Kyle'
// }

// console.log(outside.name1);

// function NameCall(obj)
// {
//     obj.name1 = "Digital Crafts";
// }

// var result = NameCall(outside);

// console.log(outside.name1);


// function simplePrint(){

//     //Printing today's date
//     //var today = new Date();
   
//     console.log("hello World");


// }


// function myCall(fun1)
// {
   
//     fun1();
// }

// myCall(simplePrint);


//printStatment("Hello ", "Digital Crafts");



// var name1 = "hello";
// var name2 = "world";
// var t1 = DigitalCrafts(name1, name2);


// var person = {

//     name: 'Veronica',
//     title: 'Insturctor',
//     status: function(){

//         console.log("Hello World");
//     }
// };

// person.status();

