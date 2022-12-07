
let myReq=new XMLHttpRequest();

myReq.open("GET","https://dummyjson.com/todos","true")


myReq.onreadystatechange=function(){

if(myReq.readyState==4&&myReq.status==200)
{
  let jsData=JSON.parse(this.responseText).todos;

 
  for(let i=0; i<jsData.length;i++)
  {
   if()
    document.getElementById("show").innerText+= jsData[i].id + ' ' +jsData[i].completed + "\n"
  }


  
}



}



myReq.send();