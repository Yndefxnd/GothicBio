

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-gallery');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 
    });

    images.forEach(image => {
        observer.observe(image);
    });
});


const element = document.getElementById('text');
let textArray = [
  "From the shadows of the screen, my digital worlds are born. Python and",
  "JavaScript are my tools, the frontend, my canvas. A fledgling creator,",
  "I weave code from shadows and light. Each pixel, each line – the seed of",
  "something new and unknown. And who knows what secrets will be",
  "revealed in this endless abyss?"
];

let index = 0;
let currentTextIndex = 0;
let animating = false;

function type() {
    if (currentTextIndex < textArray.length) {
        if (index < textArray[currentTextIndex].length) {
            element.innerHTML += textArray[currentTextIndex][index];
            index++;
            setTimeout(type, 50);
        } else {
            animating = false;
            index = 0;
            currentTextIndex++;

            element.innerHTML += "<br>";
            setTimeout(type, 1000);
        }
    }
}

type();


