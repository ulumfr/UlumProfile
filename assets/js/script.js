// Navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("menu-hidden");
});

 // Fungsi untuk membuka popup
 function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay-popup');

    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Memuat data dari JSON
    const url = popupId === 'popup-hobby' ? 'config/hobby.json' : 'config/skill.json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const listElement = document.getElementById(popupId === 'popup-hobby' ? 'hobby-list' : 'skill-list');
            listElement.innerHTML = '';

            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listElement.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

// Fungsi untuk menutup popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay-popup');

    popup.style.display = 'none';
    overlay.style.display = 'none';
}