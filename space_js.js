function fun(){
    var x=document.getElementsByClassName('query')[0];
    var y=document.getElementsByClassName('menu')[0];
    y.style.display="none";
    x.style.display="block";
}
function fun1(){
    var y=document.getElementsByClassName('query')[0];
    var x=document.getElementsByClassName('menu')[0];
    x.style.display="block";
    y.style.display="none";
}
$('.uni').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
        {
            breakpoint: 1060,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: '20px',
            }
        },
        {
            breakpoint: 480, 
            settings: {
                slidesToShow: 1,
                centerPadding: '5px',  
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                centerPadding: '3px', 
            }
        }
    ]
});

const trackArea = document.querySelector('.track_area');
const tracker = document.querySelector('.cursor_tracker');
const trackerSize = tracker.offsetWidth;
let trackerX = 0;
let trackerY = 0;
let mouseX = 0;
let mouseY = 0;
const speed = 0.05;
let isVisible = false;

trackArea.addEventListener('mousemove', e => {
    if (!isVisible) {
        isVisible = true;
        tracker.style.opacity = 1;
        requestAnimationFrame(updatePosition);
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
});
trackArea.addEventListener('mouseleave', () => {
    isVisible = false;
    tracker.style.opacity = 0;
});

const updatePosition = () => {
    const distanceX = mouseX - (trackerX + trackerSize / 2);
    const distanceY = mouseY - (trackerY + trackerSize / 2);
    trackerX += distanceX * speed;
    trackerY += distanceY * speed;
    tracker.style.transform = `translate(${trackerX}px, ${trackerY}px)`;
    requestAnimationFrame(updatePosition);
};