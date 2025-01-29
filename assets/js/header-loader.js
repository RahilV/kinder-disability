document.addEventListener("DOMContentLoaded", function () {
    // Load the header
    fetch("header.html")
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

    // Load the footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer");
            }
            return response.text();
        })
        .then(html => {
            document.querySelector("footer").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});
