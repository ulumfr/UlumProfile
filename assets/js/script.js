// Navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("menu-hidden");
});

// Fungsi untuk membuka popup 
function openPopup(popupId) {
    const popup = $(`#${popupId}`);
    const overlay = $('#overlay-popup');

    popup.css('display', 'block');
    overlay.css('display', 'block');

    // Memuat data dari JSON
    const url = popupId === 'popup-hobby' ? 'config/hobby.json' : 'config/skill.json';
    
    // Implementasi jQuery mengatur css popup >> melakukan permintaan ajax untuk  mengambil data json
    $.getJSON(url, function(data) {
        const listElement = $(`#${popupId === 'popup-hobby' ? 'hobby-list' : 'skill-list'}`);
        listElement.empty();

        $.each(data, function(index, item) {
            const listItem = $('<li>').text(item);
            listElement.append(listItem);
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error loading JSON:', errorThrown);
    });
}

// Fungsi untuk menutup popup
function closePopup(popupId) {
    const popup = $(`#${popupId}`);
    const overlay = $('#overlay-popup');

    popup.css('display', 'none');
    overlay.css('display', 'none');
}
