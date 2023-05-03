//1=rock 2=paper 3=scissor
let x;
let cp;
let cc;
cp=Number(cp);
cc=Number(cc);
cp=0;
cc=0;
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
        cc=cc+1;
    }
    else{
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
        cp=cp+1;
    }
    document.getElementById("cp").innerHTML=cp;
    document.getElementById("cc").innerHTML=cc;
}
document.getElementById("Paper").onclick=function(){
    x=Math.ceil(Math.random()*3);
    console.log(x);
    //document.getElementById("label2").innerHTML=x;
    if(x==1)
    {
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
        cp=cp+1;
    }
    else if(x==2)
    {
        document.getElementById("Print").innerHTML="It's a Tie";
        //window.alert("It's a Tie");
    }
    else{
        document.getElementById("Print").innerHTML="Computer Wins";
        //window.alert("Computer Wins");
        cc=cc+1;
    }
    document.getElementById("cp").innerHTML=cp;
    document.getElementById("cc").innerHTML=cc;
}
document.getElementById("Scissor").onclick=function(){
    x=Math.ceil(Math.random()*3);
    console.log(x);
    //document.getElementById("label2").innerHTML=x;
    if(x==1)
    {
        document.getElementById("Print").innerHTML="Computer Wins";
        //window.alert("Computer Wins");
        cc=cc+1;
    }
    else if(x==2)
    {
        document.getElementById("Print").innerHTML="You Win";
        //window.alert("You Win");
        cp=cp+1
    }
    else{
        document.getElementById("Print").innerHTML="It's a Tie";
        //window.alert("It's a Tie");
    }
    document.getElementById("cp").innerHTML=cp;
    document.getElementById("cc").innerHTML=cc;
}
