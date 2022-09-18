
//rotate a div from 0 to 360 degrees in 1 second
const compassRotate = () => {
    compass.style.transform = 'rotate(0deg)';
    compass.style.transition = 'transform 0s';
    setTimeout(() => {
        compass.style.transform = 'rotate(360deg)';
        compass.style.transition = 'transform 4s';
    }, 100);
}
compassRotate();

