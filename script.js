const mySkillsLink = document.getElementById("mySkills-link");
const mySkillsMenu = document.getElementById("mySkills-menu");


//aggiungo l'evento click al singolo elemento, controllo se è visibile, allora quando click verrà tolta e viceversa//
mySkillsLink.addEventListener("click", function () {
  if(mySkillsMenu.style.display === "block") {
    mySkillsMenu.style.display = "none";
  }else {
    mySkillsMenu.style.display = "block";
  }
});


const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', function() {
    section.style.transform = 'translateX(10px) translateY(-10px)';
    section.style.translate = 'transform 0.3s ease-out';
  });

  section.addEventListener('mouseout', function() {
    section.style.transform = '';
    section.style.translate = '';
  })
})





