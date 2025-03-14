document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I am Sameer Abdullah";
    let index = 0;
    const speed = 100; 

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("name").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");

    function revealOnScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector(".about-text");

    function revealText() {
        const sectionTop = aboutText.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutText.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealText);
    revealText(); 
});


document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");

    function revealProjects() {
        const sectionTop = projectsContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            projectsContainer.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects(); 
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-content");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
                section.classList.add("show");

                setTimeout(() => {
                    section.classList.add("final");
                }, 2000);
            } else {
                section.classList.remove("show", "final"); 
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); 
});

