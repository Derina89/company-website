/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


/* ================================
   CONTACT FORM VALIDATION
================================ */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        const successMessage =
            document.getElementById("successMessage");


        // Clear previous errors

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";


        let valid = true;


        /* Name */

        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            valid = false;

        }

        else if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;

        }


        /* Message */

        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;

        }

        else if (message.value.trim().length < 10) {

            messageError.textContent =
                "Message should contain at least 10 characters.";

            valid = false;

        }


        /* Success */

        if (valid) {

            successMessage.textContent =
                "✓ Your message has been submitted successfully!";

            contactForm.reset();

        }

    });

}