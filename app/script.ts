document.addEventListener("DOMContentLoaded", () => {
    console.log("CONTENT LOADED");
    const RADIOS = document.querySelectorAll('input[name=difficulty]');


    // Checking for radio input changes

    RADIOS.forEach(radio => {
        radio.addEventListener("change", () => {
            let value = radio.ariaValueMax;
            console.log(value);
        });
    });

});