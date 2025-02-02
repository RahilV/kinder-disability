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
            initializeMenu(); // Call function to bind event listeners
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

// Function to reinitialize menu toggle after loading header
function initializeMenu() {
    const mobileMenuButton = document.querySelector(".xb-nav-mobile");
    const mobileMenu = document.querySelector(".xb-header-menu");
    const closeMenu = document.querySelector(".xb-menu-close");

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    }

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    });
}
