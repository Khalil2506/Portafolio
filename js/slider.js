document.addEventListener('DOMContentLoaded', (event) => {
    const Slider = document.querySelector("#Slider");
    let SliderSession = document.querySelectorAll(".slider_session");
    let SliderSessionLast = SliderSession[SliderSession.length - 1];
    const btnleft = document.getElementById("btn-left");
    const btnright = document.getElementById("btn-right");

    // Colocar la última diapositiva al principio para la vista inicial correcta
    Slider.insertAdjacentElement('afterbegin', SliderSessionLast);
    Slider.style.marginLeft = "-100%";

    function next() {
        let SliderFirst = document.querySelectorAll(".slider_session")[0];
        Slider.style.transition = "margin-left 1s";
        Slider.style.marginLeft = "-200%";
        setTimeout(function () {
            Slider.style.transition = "none";
            Slider.insertAdjacentElement('beforeend', SliderFirst);
            Slider.style.marginLeft = "-100%";
        }, 1000);
    }

    function prev() {
        let SliderSession = document.querySelectorAll(".slider_session");
        let SliderSessionLast = SliderSession[SliderSession.length - 1];
        Slider.style.transition = "margin-left 1s";
        Slider.style.marginLeft = "0";
        setTimeout(function () {
            Slider.style.transition = "none";
            Slider.insertAdjacentElement('afterbegin', SliderSessionLast);
            Slider.style.marginLeft = "-100%";
        }, 1000);
    }

    btnleft.addEventListener('click', function () {
        prev();
    });

    btnright.addEventListener('click', function () {
        next();
    });

    setInterval(function () {
        next();
    }, 6000);
});