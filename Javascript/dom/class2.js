var acronym = ['very', 'important', 'person'];

var acronym2 = ['national', 'aeronautics', 'space', 'administration'];

var a1 = acronym.reduce(function(value, item){
    return value + item.charAt(0).toUpperCase();
}, '***');


console.log(a1);

// function acro2(value, item)
// {
//     return (value + item.charAt(0).toUpperCase());
// }

// var a2 = acronym2.reduce((acro2), '');

// console.log(a2);