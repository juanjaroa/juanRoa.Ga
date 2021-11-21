particlesJS("particles-js", {
    particles: {
        number: { value: 250, density: { enable: true, value_area: 1000 } },
        color: { value: "#ffffff" },
        shape: {
            type: ["circle", "edge", "triangle", "polygon"],
            stroke: { width: 0, color: "" },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 3, opacity_min: 0.75, sync: false }
        },
        size: {
            value: 6,
            random: true,
            anim: { enable: true, speed: 3, size_min: 3, sync: true }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1,
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
            grab: { distance: 300, line_linked: { opacity: 1 } },
            bubble: { distance: 150, size: 5, duration: 0.5, opacity: 1 },
            repulse: { distance: 50, duration: 0.5 },
            push: { particles_nb: 6 },
            remove: { particles_nb: 1 }
        }
    },
    retina_detect: true
});