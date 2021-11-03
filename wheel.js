const w = document.getElementById('rotate'), d=document.getElementById('displayer');
const c = [
    '0','K','3','J','7',
    '8','9','6','Q','4',
    'A','2','5','3','K',
    '5','J','7','8','9',
    '6','Q','4','A','2'
], v = 13;
let ca = 0, cv = 0, cd = false;

(function start() {
    setTimeout(spin, 1);
})();

function spin() {
    spinToNumber(Math.floor(Math.random()*25));
    setTimeout(spin, 10000);
}

function spinToNumber(index) {
    if (cd) console.log("Please wait for wheel to stop!");
    else {
        d.style.color = "purple";
        d.innerText="Spinning...";
        //d.innerText=c[index];
        cd=true;
        w.classList.remove('notransition');
        ca = 1440 + (index * 14.4);
        cv = Math.random() * v;
        w.style.transform = "rotate(" + (ca - (v/2) + cv) + "deg)";
        setTimeout(flatten, 7000, index);
        console.log("Spinning...");
    }
}

function read(index) {
    return index === 0 ? "green" : (index %2 !==0 ) ? "black" : "red";
}

function flatten(index) {
    ca = ca % 360;
    w.classList.add('notransition');
    w.style.transform = "rotate(" + (ca - (v/2) + cv) + "deg)";
    cd = false;
    d.style.color = read(index);
    d.innerText=c[index];
    console.log("Landed on " + read(index) + " " + c[index]);
}