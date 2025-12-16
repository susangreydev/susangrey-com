function emailScript() {

    navigator.clipboard.writeText("contact@susangrey.com").then(alert("⚠️ CONTACT@SUSANGREY.COM COPIED TO CLIPBOARD ⚠️"));

    window.location.href("mailto:contact@susangrey.com");

}

document.getElementById("contact_button").addEventListener("click", emailScript);
document.getElementById("profile_email_icon").addEventListener("click", emailScript);
