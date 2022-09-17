const compass = document.getElementById('compass'); // get compass element
const children = document.getElementsByClassName('beat'); //get array of children
const focus = document.getElementsByClassName('beatFocus'); 

const seg = 1000;

// get current time
const changeColor = () => {
    let beat = 0;
    setInterval(function(){
        children[0].classList.toggle('beatFocus') // toggle class
        beat++;
        if(beat === children.length){
            beat = 0;
        }
    }, seg);
};
changeColor();

// const remove = () => {
//     let beat = 0;
//     setInterval(function(){
//         children[beat].classList.remove('beatFocus')
//         beat++;
//         if(beat === children.length){
//             beat = 0;
//         }
//     }, 1000);
// };

// let remove = () => {
//     for (let i = 0; i < children.length; i++) {
//         children[i].classList.remove('beatFocus');
//     }

console.log(children);


