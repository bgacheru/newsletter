"use strict";
class EmailValidator {
    constructor() {
        this.form = document.querySelector("form");
        this.cont1 = document.querySelector(".cont");
        this.cont2 = document.querySelector(".cont2");
        this.emailInput = document.getElementById("email");
        this.dismissButton = this.cont2.querySelector("button");
        this.errorMessage = document.createElement("div");
        this.init();
    }
    isEmailValid(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }
    validateEmail() {
        const userEmail = this.emailInput.value.trim();
        if (userEmail === "") {
            this.errorMessage.textContent = "Please provide your email address";
        }
        else if (!this.isEmailValid(userEmail)) {
            this.errorMessage.textContent = "Please provide a valid email";
        }
        else {
            this.errorMessage.textContent = "";
            const userEmailSpan = document.querySelector("#useremailaddress");
            userEmailSpan.textContent = userEmail;
            this.cont1.classList.add("hide");
            this.cont2.classList.remove("hide");
        }
    }
    init() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.validateEmail();
        });
        this.dismissButton.addEventListener("click", () => {
            this.cont2.classList.add("hide");
            this.cont1.classList.remove("hide");
        });
        this.form.appendChild(this.errorMessage);
    }
}
// Instantiate the class to run the code
new EmailValidator();
