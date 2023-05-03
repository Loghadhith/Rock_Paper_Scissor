//1=rock 2=paper 3=scissor
let x;
document.getElementById("Rock").onclick=function(){
    x=Math.ceil(Math.random()*3);
    console.log(x);
    //document.getElementById("label2").innerHTML=x;
    if(x==1)
    {
        document.getElementById("Print").innerHTML="It's a Tie";
        //window.alert("It's a Tie");
    }
    else if(x==2)
    {
        document.getElementById("Print").innerHTML="Computer Wins";
        //window.alert("Computer Wins");
    }
    else{
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
    }
}
document.getElementById("Paper").onclick=function(){
    x=Math.ceil(Math.random()*3);
    console.log(x);
    //document.getElementById("label2").innerHTML=x;
    if(x==1)
    {
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
    }
    else if(x==2)
    {
        document.getElementById("Print").innerHTML="It's a Tie";
        //window.alert("It's a Tie");
    }
    else{
        document.getElementById("Print").innerHTML="Computer Wins";
        //window.alert("Computer Wins");
    }
}
document.getElementById("Scissor").onclick=function(){
    x=Math.ceil(Math.random()*3);
    console.log(x);
    //document.getElementById("label2").innerHTML=x;
    if(x==1)
    {
        document.getElementById("Print").innerHTML="Computer Wins";
        //window.alert("Computer Wins");
    }
    else if(x==2)
    {
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
    }
    else{
        document.getElementById("Print").innerHTML="It's a Tie";
        //window.alert("It's a Tie");
    }
}