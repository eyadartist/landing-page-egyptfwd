window.addEventListener('load', () => {

    // Declaring Varaibles

    const sections = document.querySelectorAll("section");

    const navList = document.getElementById('nav_list')

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

    window.addEventListener("scroll", () => {
        const Menulink = document.querySelectorAll('a');

        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        Menulink.forEach((links) => links.classList.remove('active'))
        Menulink[index].classList.add('active');

    });


    // Active Section

    window.addEventListener("scroll", () => {
        const selctedSec = document.querySelectorAll("section");

        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        selctedSec.forEach((section) => section.classList.remove('active-class'))
        selctedSec[index].classList.add('active-class');

    });


    // open and close menu 

    function toggle() {
        let menu = document.getElementById("nav_list");
        menu.classList.toggle("show");
    };
});
