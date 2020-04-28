document.addEventListener('DOMContentLoaded', () => {
    let width = window.outerWidth;
    let height = window.outerHeight;
    AOS.init();

    // Toggle navbar burgers
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    // Prep particle image array
    let img_src = ["img/lines-27.png","img/lines-28.png","img/lines-29.png","img/lines-30.png","img/lines-31.png","img/lines-32.png","img/lines-33.png","img/lines-34.png","img/lines-35.png",];
    let image_type = img_src.map(function (el, index) {
        return "image" + index
    });

    // Init particles
    particlesJS(
        'background-wrapper',
        {
            "particles": {
                "images": img_src,
                "number": {
                    "value": img_src.length,
                    "density": {
                        "enable": true,
                        "value_area": Math.round((0.26*-1*width) + 890)
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
                        "enable": (width>768),
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
    //document.getElementById('home-text').style.left = ((0.0108*width)-10).toString()+"rem";
    document.getElementById('background-graphic').setAttribute("viewBox", (Math.round((0.016*-1*width)+31)+" 22.5 " + (width-125) + " " + (height-200)));

    console.log("When was the last time you drank some water");
});