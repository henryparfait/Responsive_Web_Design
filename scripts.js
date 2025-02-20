document.addEventListener("DOMContentLoaded", function () {
    // Responsive Navbar
    const navbar = document.getElementById("navbar");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Menu";
    toggleButton.onclick = function () {
        navbar.classList.toggle("active");
    };
    document.body.insertBefore(toggleButton, navbar);

    // Form Validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
