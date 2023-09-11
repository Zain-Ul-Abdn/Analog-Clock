//function for get weekday in alphabetic
function setDay(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let daydiv = document.querySelector('#day')
    daydiv.innerHTML = days[date.getDay()].slice(0, 3).toUpperCase();
    // daydiv.innerHTML = date.getDate();

}

// Calculate hour div rotation formula
let hrotate = (d) => 30 * (d.getHours()) + d.getMinutes() / 2;

// Calculate minute div rotation formula
let mrotate = (d) => 6 * d.getMinutes();

// Calculate secound div rotation formula
let srotate = (d) => 6 * d.getSeconds();

//Target my hour/minute/secound div by queryselector
let hourdiv = document.querySelector('#hour');
let mindiv = document.querySelector('#min');
let secdiv = document.querySelector('#sec');

//Rotatation of hour + minute + secound div every one secound
try {
    setInterval(() => {
        let date = new Date();
        setDay(date)
        hourdiv.style.transform = `rotate(${hrotate(date)}deg)`;
        mindiv.style.transform = `rotate(${mrotate(date)}deg)`;
        secdiv.style.transform = `rotate(${srotate(date)}deg)`;

    }, 1000);
} catch (error) {
    console.log(error)
}

