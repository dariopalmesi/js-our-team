// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

const teamEL = document.getElementById('team')
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);

  const markup = generateTeamMember(member);
  
}

function generateTeamMember(member) {
  return `
  <div class="col-4">
    <div class="card">
      <img src="./assets/img/female3.png" alt="" class="card-img">
    </div>
  </div>
  <div class="col-8">
    <h3>Name</h3>
    <p>roles</p>
    <p>Email</p>
  </div>
  `
}