document.addEventListener('DOMContentLoaded', () => {
    setTimeout(openLeftPop, 2000);
});

function openPopup() {
    const popup = document.getElementById('userInfo');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('userInfo');
    popup.style.display = 'none';

    const ty = document.getElementById('ty');
    ty.style.display = 'none';
}

function send(event) {
    event.preventDefault();
    closePopup();

    const ty = document.getElementById('ty');
    ty.style.display = 'block';
    setTimeout(closePopup, 10000);
}

// ...........................

function openLeftPop() {
    const sidePopup = document.getElementById('leftPopWindow');
    sidePopup.style.transform = 'translate(0%, 50%)';
}

function closeSidePopup() {
    const sidePopup = document.getElementById('leftPopWindow');
    sidePopup.style.transform = 'translate(100%, 50%)';
}