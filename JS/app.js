// Declaring Varaibles

const sections = document.querySelectorAll("section");

const navList = document.getElementById('nav_list')

const ul = document.querySelectorAll("ul");

const fragment = document.createDocumentFragment();

// let make a loop in order to make the meun

sections.forEach((sec) => {

    let data = sec.getAttribute("data-nav");
    let text = document.createTextNode(data);
    let a = document.createElement("a");
    let li = document.createElement("li");
    li.classList.add("menu-link");

    // Make a smooth scroll
    a.addEventListener("click", () => {
        sec.scrollIntoView({ behavior: 'smooth' });
    })

    // Add herf ID for each nav

    a.setAttribute("href", "#" + sec.getAttribute("id"));

    a.appendChild(text);
    li.appendChild(a);
    fragment.appendChild(li);
})
// Buliding a navigation list

navList.appendChild(fragment);


// Active Link

function activeLink(activeSection) {

    let link = document.querySelectorAll('a');
    let sectionNav = activeSection.getAttribute('data-nav');

    link.forEach((link) => {
        if (link.textContent === sectionNav) {
            let link = document.querySelectorAll('a');

            link.forEach((alink) => {
                alink.classList.remove('active')
            })

            link.classList.add('active');
        }
    })
}

// Active Section

window.addEventListener("scroll", () => {

    const selctedSec = document.querySelectorAll("section");

    selctedSec.forEach((sec) => {
        let rect = sec.getBoundingClientRect();

        if (rect.top > 0 && rect.bottom < window.innerHeight) {
            const active = document.querySelectorAll("active-class")
            if (active.length > 0) {
                active[0].classList.remove("active-class")
            }
            sec.classList.add('active-class');
            activeLink(sec);
        }
    });

});


// open and close menu 

function toggle() {
    var menu = document.getElementById("nav_list");
    menu.classList.toggle("show");
}
