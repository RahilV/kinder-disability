document.addEventListener("DOMContentLoaded", function () {
    fetch("../header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then(html => {
            document.querySelector("header").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });
});
