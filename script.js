document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Ваше сообщение отправлено!");
        this.reset();
    });
});
