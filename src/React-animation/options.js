
const options = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 150,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "rgb(182, 182, 202)",
        },
        links: {
            color: "rgb(182, 182, 202)",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 6,
        },
        number: {
            density: {
                enable: true,
                area: 600,
            },
            value: 80,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 3, max: 6 },
        },
    },
    detectRetina: true,
}

export const optionEnglish = {
    strings: ['Web developer', 'Forex Trader', 'Industrial Engineer'],
    autoStart: true,
    loop: true,
    delay: 50,
    pauseFor: 1000
}
export const optionSpanish={
    strings: ['Desarrollador Web', 'Forex Trader', 'Ingeniero Industrial'],
    autoStart: true,
    loop: true,
    delay: 50,
    pauseFor: 1000
}


export default options

