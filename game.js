var pl1=document.getElementsByClassName("planet1")[0];
    var pl2=document.getElementsByClassName("planet2")[0];
    var pl3=document.getElementsByClassName("planet3")[0];
    var pl4=document.getElementsByClassName("planet4")[0];
    var pl5=document.getElementsByClassName("planet5")[0];

function onbtn()
{
    pl1.setAttribute('id','sinking');
    pl2.setAttribute('id','sinking');
    pl3.setAttribute('id','sinking');
    pl4.setAttribute('id','sinking');
    pl5.setAttribute('id','sinking');
}


function offbtn(){
    pl1.setAttribute('id','backtoplacep1');
    pl2.setAttribute('id','backtoplacep2');
    pl3.setAttribute('id','backtoplacep3');
    pl4.setAttribute('id','backtoplacep4');
    pl5.setAttribute('id','backtoplacep5');
}