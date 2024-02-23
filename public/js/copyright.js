// public/js/copyright.js

document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    const copyrightNotice = `© ${currentYear} Copyright neonpulse`;

    // Create a div element
    const divElement = document.createElement("div");
    divElement.style.textAlign = "center"; // Center-align text in the div
    // Add a class for potential additional styling or future reference
    divElement.className = "copyright-wrapper";

    // Create a paragraph element
    const pElement = document.createElement("p");
    pElement.textContent = copyrightNotice;
    pElement.style.color = "white"; // Make the text color white
    // Add a class for potential additional styling or future reference
    pElement.className = "copyright-notice";

    // Append the p element to the div
    divElement.appendChild(pElement);

    // Append the div to the body or any specific element you want it to appear in
    document.body.appendChild(divElement);
});

