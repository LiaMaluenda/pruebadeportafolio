const items = document.querySelectorAll('.ych-item');
const modal = document.getElementById('ych-modal');
const closeModal = document.getElementById('close-modal');

const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mDetails = document.getElementById('modal-details');

items.forEach(item => {
    item.addEventListener('click', () => {
        mImg.src = item.getAttribute('data-img');
        mTitle.innerText = item.getAttribute('data-title');
        mDetails.innerText = item.getAttribute('data-details');
        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Cerrar haciendo clic fuera del recuadro
window.addEventListener('click', (e) => {
    if(e.target === modal) modal.classList.remove('active');
});