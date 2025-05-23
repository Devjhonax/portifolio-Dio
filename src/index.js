const skill = document.getElementById("sc1")
const portifolio = document.getElementById("sc2")
const xp = document.getElementById("sc3")

skill.addEventListener("click", function () {
    skill.classList.toggle("active")

    if (skill.classList.contains("active")) {
        skill.innerHTML += `
            <div class="habilit">
                <h3>Habilidades Profissionais:</h3>
                <div>
                    <img src="./src/img/icons8-html-5-72.png" alt="hmtl">
                    <img src="./src/img/icons8-css3-72.png" alt="css">
                    <img src="./src/img/icons8-javascript-72.png" alt="javascript">
                </div>
            </div>
        `;
    } else {
        skill.innerHTML = `
            <div class="skill">
                Skill
                <img class="expandir" src="./src/img/icons8-seta-para-expandir-48.png" alt="seta">
            </div>
        `;
    }
})

portifolio.addEventListener("click", function () {
    portifolio.classList.toggle("active")

    if (portifolio.classList.contains("active")){
        portifolio.innerHTML += `
         Seção em andamento. Aguarde Novas atualizações...
        `
    }else{
        portifolio.innerHTML = `
            <div class="skill">
                Projetos
                <img class="expandir" src="./src/img/icons8-seta-para-expandir-48.png" alt="seta">
            </div>
        `;        
    }
}
)

xp.addEventListener("click", function () {
    xp.classList.toggle("active")

    if(xp.classList.contains("active")){
        xp.innerHTML += `
        <p>Sou um desenvolvedor full-stack em constante evolução, sempre em busca de 
        novos aprendizados e desafios que expandam meus conhecimentos. Atualmente, estou
         em busca de oportunidades como freelancer para fortalecer minha experiência prática e contribui
          com soluções eficientes e criativas.</p>
        `
    }else {
        xp.innerHTML = `
            <div class="skill">
                Sobre Mim
                <img class="expandir" src="./src/img/icons8-seta-para-expandir-48.png" alt="seta">
            </div>        
        `
    }
})