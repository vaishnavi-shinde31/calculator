let screen = document.getElementById("screen"); //input
let buttons = document.querySelectorAll("button"); //button tagname
let screenvalue='';
for (items of buttons) 
{
  items.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    //console.log(e);
    //console.log(buttonText);

    if (buttonText == 'X') {
      buttonText = '*';
      //console.log(buttonText);
      screenvalue += buttonText;
      screen.value = screenvalue; //screen input id
    }
     else if (buttonText == 'clr') {
      screenvalue = " ";
      screen.value = screenvalue;
    } 
    else if(buttonText == '=') 
    {
      screen.value = eval(screenvalue);
    
  }
     else 
    {
      screenvalue += buttonText;
      screen.value = screenvalue;
    }
  })
}
