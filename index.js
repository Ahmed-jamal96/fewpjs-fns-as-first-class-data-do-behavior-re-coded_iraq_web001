/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(){
  let x=document.getElementById('time').value;
  let y=parseInt(x);
  let z;
  if (y < 12)
  {
   z="Good Morning";
   return z;
  }
   if(y >= 12 && y <= 17)
   {
    z="Good Afternoon";
    return z;
  }
  if (y>17 && y<=24)
  {
  z="Good Afternoon";
  return z;
  }
  

}

  /* Write your implementation of displayMessage() */
  document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
  
  
  
  
  
  
  
  
  
} 

