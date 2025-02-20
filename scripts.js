let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Display the confirmation message
    document.getElementById("confirmation-message").style.display = "block";

    // Optionally clear the form fields
    this.reset();

    // Hide the message after 3 seconds
    setTimeout(() => {
        document.getElementById("confirmation-message").style.display = "none";
    }, 3000);
});
