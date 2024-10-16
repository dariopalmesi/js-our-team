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
  let { name, role, email, img } = member
   let markup = `
   <div class="col-4">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${img}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${name}}</h5>
                                    <p class="card-text">${role}</p>
                                    <p class="card-text"><small class="text-body-secondary">${email}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
   `
  teamEL.innerHTML += markup
  //  const markup = generateTeamMember(member);

  // teamEL.innerHTML += markup

}

// function generateTeamMember(member) {

// const { name, role, email, img } = member


//    return`
//    <div class="card mb-3">
//    <div class="row g-0">
//      <div class="col-md-4">
//        <img src="${img}" class="img-fluid rounded-start" alt="...">
//      </div>
//      <div class="col-md-8">
//        <div class="card-body">
//          <h5 class="card-title">${name}</h5>
//          <p class="card-text">${role}</p>
//          <p class="card-text"><small class="text-body-secondary">${email}</small></p>
//        </div>
//      </div>
//    </div>
//  </div>
//    `






  // return `
  // <div class="col-4">
  //   <div class="card">
  //     <img src="${img}" alt="" class="card-img">
  //   </div>
  // </div>
  // <div class="col-8">
  //   <h3>${name}</h3>
  //   <p>${role}</p>
  //   <p>${email}</p>
  // </div>
  // `
