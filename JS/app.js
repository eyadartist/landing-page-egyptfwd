window.addEventListener("load", () => {
    // let seclct the nav list
    const navList = document.getElementById("nav_list")
    //  we put fragment in order to make a best preformance for the code
    const fragment = document.createDocumentFragment();
    //  let select all sections
    const sections = document.querySelectorAll("section")
    // let select the ul
    const ui = document.querySelectorAll("ul")

    // let make a loop
    sections.forEach((sec) => {
        // let get the data name from the HTML
        let data = sec.getAttribute("data-nav")
        // let create li
        let li = document.createElement("li")
        // let get the text from the data-nav
        let text = document.createTextNode(data)
        // after that we add menu-link class
        li.classList.add("menu-link")
        // let create the link
        let a = document.createElement("a")
        // let add event in order to mke the page scroll to acho

        // Make a smooth scroll
        a.addEventListener("click", () => {
            sec.scrollIntoView({ behavior: 'smooth' })
        })

        a.appendChild(text)
        li.appendChild(a)
        fragment.appendChild(li)
    })

    navList.appendChild(fragment)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const link = document.querySelectorAll('a');
            if (entry.intersectionRatio > 0) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section)
    })

})

// open and close menu 

function toggle() {
    var menu = document.getElementById("nav_list")
    menu.classList.toggle("show")
}