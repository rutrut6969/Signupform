function closeForm() {
    document.getElementById('overlay').classList.add('hide');
    document.getElementById('overlay').classList.remove('show')
    document.getElementById('show').classList.remove('hide')
}

function show() {
    document.getElementById('overlay').classList.remove('hide');
    document.getElementById('overlay').classList.add('show')
    document.getElementById('show').classList.add('hide')
}