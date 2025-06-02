var txt;
function onButton(){
    txt=document.getElementsByClassName('line1')[0];
    txt.setAttribute('id', 'line1');
}
var b1Info_h5 = document.getElementById("b1Info_h5");
var btn1=document.getElementById("b1btn1");
var sagiinfo_p=document.getElementById("sagiinfo_p")
var btn2=document.getElementById("b1btn2");

function b1knowmore()
{
    sagiinfo_p.style.display="block";
    btn2.style.display="block";
    b1Info_h5.style.display = "none";
    btn1.style.display = "none";
}

function b1knowless()
{
    b1Info_h5.style.display = "block";
    btn1.style.display = "block";
    sagiinfo_p.style.display="none";
    btn2.style.display="none";
}

var b2Info_h5 = document.getElementById("b2Info_h5")
var b2btn1=document.getElementById("b2btn1");
var cygniinfo=document.getElementById("cygniinfo")
var b2btn2=document.getElementById("b2btn2");

function b2knowmore()
{
    
    b2Info_h5.style.display = "none"
    b2btn1.style.display = "none"
    cygniinfo.style.display="block";
    b2btn2.style.display="block"
}

function b2knowless()
{
    b2Info_h5.style.display = "block"
    b2btn1.style.display = "block"
    cygniinfo.style.display="none";
    b2btn2.style.display="none"
}




var b3Info_h5 = document.getElementById("b3Info_h5")
var b3btn1=document.getElementById("b3btn1");
var groinfo=document.getElementById("groinfo")
var b3btn2=document.getElementById("b3btn2");

function b3knowmore()
{
    
    b3Info_h5.style.display = "none"
    b3btn1.style.display = "none"
    groinfo.style.display="block";
    b3btn2.style.display="block"
}

function b3knowless()
{
    b3Info_h5.style.display = "block"
    b3btn1.style.display = "block"
    groinfo.style.display="none";
    b3btn2.style.display="none"
}
window.onload = function() {
    const Trash = () => {
        let x = document.getElementsByClassName('subc1')[0];
        if (x) {
            x.style.fontSize = '14px';
            x.style.right = '-1500px';
            x.style.transition = 'transform 6s ease, font-size 6s ease, right 6s ease';
        } else {
            console.error('Element with class "subc1" not found');
        }
    };

    const Back = () => {
        let x = document.getElementsByClassName('subc1')[0];
        if (x) {    
            x.style.transform = 'rotate(0deg)'; 
            x.style.fontSize = '24px';
            x.style.right = '0'; 
            x.style.transition = 'transform 6s ease, font-size 6s ease, right 6s ease'; 
        } else {
            console.error('Element with class "subc1" not found');
        }
    };

    document.querySelector('.btn').onclick = Trash;
    document.querySelector('.btn1').onclick = Back;
};
