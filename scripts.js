let button = document.getElementById('button');

button.addEventListener('click', function(){
    alert("Message has Sent");
})

function toggleNavbar() {
    const navList = document.querySelector('.navigate');
    navList.classList.toggle('show');
}