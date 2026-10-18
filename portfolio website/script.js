const form = document.querySelector(".contact-form");
const message = document.createElement("p");
message.textContent = "Message sent successfully!";
message.classList.add("success-message");
form.addEventListener("submit", function(event){
    event.preventDefault();
    form.appendChild(message);
    form.reset();
});