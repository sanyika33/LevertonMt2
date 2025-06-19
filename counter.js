
document.addEventListener('DOMContentLoaded', () => {
    const count = document.getElementById('player-count');
    const fakePlayerCount = Math.floor(Math.random() * 500) + 100;
    count.textContent = fakePlayerCount;
});
