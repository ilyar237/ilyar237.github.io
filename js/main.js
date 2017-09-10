var isSad=true;

function changeImage()
{
     var imges= document.getElementsByTagName("img"); 
    if(isSad)
    { 
    imges[0].src="images/happy.jpg";
    isSad=false;
    }
    else{
    imges[0].src="images/sad.png";
    isSad=true;
    }
}

function changeColor(inputText)
{
    debugger;
    //var myTB= document.getElementsByTagName("input");
    inputText.style.backgroundColor="yellow";
}

function changeLoweCase(inputText2)
{
    debugger;
   // var myTB= document.getElementsByTagName("input");
    inputText2.value= inputText2.value.toLowerCase();
}
