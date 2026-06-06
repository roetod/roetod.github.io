const roles = [
    "Programmer",
    "Videographer",
    "Photographer"
];

const role = document.getElementById("role");

let current = 0;

function changeRole(){

    role.classList.remove("role-in");
    role.classList.add("role-out");

    setTimeout(() => {

        current++;

        if(current >= roles.length){
            current = 0;
        }

        role.textContent = roles[current];

        role.classList.remove("role-out");
        role.classList.add("role-in");

    }, 500);
}

setInterval(changeRole, 3000);

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.classList.add('show');
        }

    });

});