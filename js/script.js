const cards = document.querySelectorAll('.arch-card');

cards.forEach(card => {
    const wrapper = card.querySelector('.artwork-wrapper');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const percentageY = (y / rect.height) * 100;

        if(card.matches(':hover')) {
            wrapper.style.transform = `scale(1.03) translateY(${(percentageY - 50) * 0.15}px)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'scale(1) translateY(0px)';
    });
});