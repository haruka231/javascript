
//ONKEYDOWN
//function me2(){
    //alert("you have pressed a key inside input");
   //}
//function me21(){
    // alert("you have pressed a key inside textarea");
   //}

   //onkeyup
   //function me3(){
    //alert("you have released a key inside text input");
   //}
//function me31(){
     //alert("you have released a key inside textarea");
    //}

//onkeypress
 //function me4(){
       // alert("you have pressed a key inside text input");
       //}
    //function me41(){
         //alert("you have pressed a key inside textarea");
        //}

//oncontextmenu
    //function awit(){
       // alert("you have right clicked inside button ");
      //}
   //function me(){
        //alert("you have pressed a key inside textarea");
        //}

 //onblur
//function me5(){
            //alert("text input loses focus ");
          //}
    //onsubmit
    //function me6(){
        //alert("form data will submitted to the server");
   // }

       //function RAINBOW(elm){
        //elm.style.background ="red";
       //}
       function dows(){
        window.alert('page is loaded successfully');
       }

       function displayWindowSize(){
        var w= window.outerWidth;
        var h= Window.outerHeight;

        var txt ="window size: width"+w+ ", hieght="+ h;
        document.getElementById("result").innerHTML=html;

       }
       window.onresize=displayWindowSize;

