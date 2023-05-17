
team = [
    {   
        "nome":"Wayne Barnett",
        "ruolo":"Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    {
        "nome":"Angela Lopez",
        "ruolo":"Social Media Manager",
        "foto":"angela-lopez-social-media-manager.jpg"
    },
    {
        "nome":"Scott Estrada",
        "ruolo": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    {
        "nome":"Barbara Ramos",
        "ruolo":"Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
]

const container = document.getElementById("container");
console.log(container);
for (let i = 0; i < team.length; i++){
    let puntatore = team[i];
    const nome = puntatore.nome;
    const ruolo = puntatore.ruolo;
    const foto = puntatore.foto;
    const membri = ` <div class="members">
                                <img src="img/${foto}" alt="img">
                                <p class="element">${nome}</p>
                                <p class="element">${ruolo}</p>
                    </div>`;
    container.innerHTML += membri;
}