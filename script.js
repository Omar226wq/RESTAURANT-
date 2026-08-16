document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll('a[href*="wa.me"]');

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("WhatsApp order button clicked");
        });
    });

    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Navigation:", link.textContent);
        });
    });
});
