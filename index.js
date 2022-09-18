const compass = document.getElementById('compass'); // get compass element
const children = document.getElementsByClassName('beat'); //get array of children
const focus = document.getElementsByClassName('beatFocus');


const bar = Array.from(children); // convert to array
const seg = 1000;
 bar

const bpm = (bpm) => {
    return (seg / bpm) * 60;
}

const addFocus = () => {
    bar[0].classList.add('beatFocus');
    bar.push(bar.shift());
}

const metronome = () => {
    setInterval(() => {
        bar.forEach((e) => {
            e.classList.remove('beatFocus');
        });
        addFocus();
    }, bpm(90));
}

metronome();


console.log(children);
console.log(bar);