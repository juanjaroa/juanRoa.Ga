particlesJS("particles-js", {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 600 } },
        color: { value: "random" },
        shape: {
            type: ["circle", "edge", "triangle", "polygon"],
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 6 }
        },
        opacity: {
            value: 0.75,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.33, sync: false }
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 4, size_min: 3, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.66,
            width: 0.75
        },
        move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: true, mode: ["repulse", "grab", "bubble"] },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 1 } },
            bubble: { distance: 100, size: 5, duration: 0.5, opacity: 1 },
            repulse: { distance: 33, duration: 0.5 },
            push: { particles_nb: 10 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});