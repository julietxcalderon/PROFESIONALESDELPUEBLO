document.getElementById('logout-button').addEventListener('click', () => {
    localStorage.removeItem('token');

    window.location.href = 'index.html';
});

if (!localStorage.getItem('token')) {
    window.location.href = 'index.html';
}