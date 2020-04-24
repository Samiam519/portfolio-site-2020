document.addEventListener('DOMContentLoaded', () => {

    let width = window.innerWidth;

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    let img_src = ["img/lines-27.png","img/lines-28.png","img/lines-29.png","img/lines-30.png","img/lines-31.png","img/lines-32.png","img/lines-33.png","img/lines-34.png","img/lines-35.png",];
    // Name images included
    let image_type = img_src.map(function (el, index) {
        return "image" + index
    });

    particlesJS(
        'background-wrapper',
        {
            "particles": {
                "images": img_src,
                "number": {
                    "value": img_src.length,
                    "density": {
                        "enable": true,
                        "value_area": (width *0.2)
                    }
                },
                "shape": {
                    "type": image_type,
                    "stroke": {
                        "width": 0,
                    },
                    "polygon": {
                        "nb_sides": 4
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": false
                },
                "size": {
                    "value": 15,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 10,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 0.75,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 168,
                        "size": 21,
                        "duration": 2,
                        "opacity": 1,
                        "speed": 1.5
                    }
                }
            },
            "retina_detect": true
        },
        function () {
            console.log('callback - particles.js config loaded');
        }
    );

    document.getElementsByClassName('particles-js-canvas-el')[0].classList.add("animated","zoomIn","delay-1s");
    document.getElementsByClassName('home-text')[0].style.left = ((0.0108*width)-10).toString()+"rem";

});