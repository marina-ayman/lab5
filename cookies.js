// 1-	Make a login  form and store user data in local storage and cookies  and remove from it from cookies.




var namee=document.getElementById("name");
var emaill=document.getElementById("Email");
var pass=document.getElementById("pass1");

var getN=  localStorage.getItem("UserName");
var getE=  localStorage.getItem("UserEmail");
var getP=  localStorage.getItem("UserPass");


function clickk(){



    localStorage.setItem("UserName",namee.value);
    localStorage.setItem("UserEmail",emaill.value);
    localStorage.setItem("UserPass",pass.value);


    var div=document.createElement("div");
       div.innerHTML=`UserName ${getN}  UserEmail ${getE}  UserPass${getP}  `;
       document.body.appendChild(div)

}


function clickke(){

    


    var mydate=new Date();
    var d= mydate.getDate() +10;  mydate .setDate(d);

    date.setMonth(date.getMonth()+3);



       var namee= document.cookie="usernamecookie="+namee.value+"expires"+mydate.toGMTString();
   var emaill=  document.cookie="useremailcookie="+emaill.value+"expires"+mydate.toGMTString();
   var pass=  document.cookie="userpasscookie="+pass.value+"expires"+mydate.toGMTString();
}



function remoove(){
    var newDate = new Date();  newDate.setTime(newDate.getDate() - 1);
    document.cookie="usernamecookie="+namee.value+"expires"+mydate.toGMTString();
    document.cookie="useremailcookie="+emaill.value+"expires"+mydate.toGMTString();
    document.cookie="userpasscookie="+pass.value+"expires"+mydate.toGMTString();
}



