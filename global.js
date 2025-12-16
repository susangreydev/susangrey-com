function emailScript() {

    navigator.clipboard.writeText("contact@susangrey.com").then(alert("CONTACT@SUSANGREY.COM COPIED TO CLIPBOARD"));

    window.location.href = "mailto:contact@susangrey.com";

}


function expandProfileImage() {

    const lightbox = document.getElementById("lightbox");

    lightbox.style.display = "flex";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.9)"

}


document.getElementById("contact_button").addEventListener("click", emailScript);
document.getElementById("profile_email_icon").addEventListener("click", emailScript);
document.getElementById("profile_img").addEventListener("click", expandProfileImage);
lightbox.addEventListener("click", function() {

    lightbox.style.display = "none";

});

const expandedImage = document.createElement("img");
expandedImage.src = "./0.png";
expandedImage.style.maxHeight = "clamp(800px, 2vw, 1000px)";
expandedImage.style.margin = "clamp(3rem, 2vw, 5rem)";
expandedImage.style.border = "2px solid rgb(255, 255, 255)"
expandedImage.style.borderRadius = "20px";
expandedImage.style.cursor = "pointer";

lightbox.appendChild(expandedImage);
