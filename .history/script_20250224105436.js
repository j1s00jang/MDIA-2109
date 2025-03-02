const $spin = document.querySelector(".js__spinner.spin");
const $moreSpin = document.querySelector(".js__spinner.moreSpin");
const $mostSpin = document.querySelector(".js__spinner.mostSpin");




const keyframes = [
    { transform: "rotate(0)" },
    { 
        transform: "rotate(360deg)",
        fontSize: "0"
     }
];



const options = { 
    duration: 3000,
    iterations: Infinity,

}


$spin.animate(keyframes, options);
$moreSpin.animate(keyframes, options);
$mostSpin.animate(keyframes, options);
