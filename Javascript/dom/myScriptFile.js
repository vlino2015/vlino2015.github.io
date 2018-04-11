
(function(){

//this is just a test.  One of the first thing that we ran to see if 
//everything was working.
var helloWorldTest = document.body.textContent = "Hello World";

//Step 1: creating a div element called nav
var nav = document.createElement('div');

//adding attributes to the nav container

nav.style.backgroundColor = "blue";
nav.textContent = "Hello Nate!";

//Step 2: add this container to the body of your document
//the body is the parent, and the nav is the child
document.body.appendChild(nav);

//Adding a new container to the nav container. In this example, nav is the parent
// and the new navChild is the child container.

//Step 1: Create the new paragraph element
var navChild = document.createElement('p');

//adding attributes to the paragraph element
navChild.style.backgroundColor = "yellow";
navChild.innerText = "paragraph text";

//Step 2: add this container to the nav container
//the nav container is the parent conatiner and the navChild is the child
//container.

nav.appendChild(navChild);




})();  //self invoking function