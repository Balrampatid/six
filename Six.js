/*
function add(a,b)
{
    var c=a+b;
    console.log("Addition is "+c);
}
function hello(a,b,operation)
{

    console.log("welcome to the Sky ");
  operation(a,b);
    console.log("Thankyou");
}
add(10,20)// if i have run only add function then we can directly call add function not requred 
//hello function and not any realtion but you have relation between add and hello then we use
 annanomus function  you studi first of basic 
*/
function hello(a,b,operation)
{

    console.log("welcome to the Sky ");
  operation(a,b);
    console.log("Thankyou");
}

//an 
hello(20,10,function(a,b)
{

    var c=a/b;
    console.log("c= "+c);    
})
//next is arrow function 