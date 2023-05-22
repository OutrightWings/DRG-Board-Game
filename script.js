function toggleDropdown() {
    var dropdownMenu = document.getElementById("image-dropdown-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}

function changeImage(imageSrc) {
    var selectedImage = document.getElementById("selected-image");
    selectedImage.src = imageSrc;
    toggleDropdown();
}
