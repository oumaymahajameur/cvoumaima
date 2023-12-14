document.addEventListener('DOMContentLoaded', function () {
    animateSkillBars();
  });
  
  function animateSkillBars() {
    var skillBars = document.querySelectorAll('.bar-skill-progress-html, .bar-skill-progress-css, .bar-skill-progress-js, .bar-skill-progress-excel');
  
    skillBars.forEach(function (bar) {
      var width = 0;
      var targetWidth = bar.dataset.progress;
  
      var animation = setInterval(function () {
        if (width >= targetWidth) {
          clearInterval(animation);
        } else {
          width++;
          bar.style.width = width + '%';
        }
      }, 10);
    });
  }
  


  document.addEventListener('DOMContentLoaded', function () {
    animateDiplomesFormations();
});

function animateDiplomesFormations() {
    // Ajoutez votre code JavaScript pour la section "Diplômes et Formations" ici
    // Par exemple, vous pouvez ajouter une classe ou une animation spécifique.
    var diplomesFormationsSection = document.getElementById('diplomes-formations');

    // Exemple : Ajouter une classe à la section
    diplomesFormationsSection.classList.add('animation-diplomes-formations');
}






document.addEventListener('DOMContentLoaded', function () {
  // Définir les niveaux de compétence pour chaque langue
  setLanguageStars('arabicStars', 4); // 4 étoiles pour l'arabe
  setLanguageStars('frenchStars', 3); // 3 étoiles pour le français
  setLanguageStars('englishStars', 3); // 3 étoiles pour l'anglais
});

function setLanguageStars(containerId, starsCount) {
  var starContainer = document.getElementById(containerId);

  for (var i = 0; i < starsCount; i++) {
      var starIcon = document.createElement('i');
      starIcon.classList.add('fas', 'fa-star');
      starContainer.appendChild(starIcon);
  }

  // Ajouter des étoiles grises si nécessaire                  
  for (var i = starsCount; i < 5; i++) {
      var starIcon = document.createElement('i');
      starIcon.classList.add('fas', 'fa-star', 'star-gray');
      starContainer.appendChild(starIcon);
  }
}

