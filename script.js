document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    // Vérifie que les éléments existent avant d'ajouter l'écouteur d'événements
    if (line1) {
        line1.addEventListener('animationend', (event) => {
            // S'assurer que c'est bien l'animation 'typing' qui est terminée
            if (event.animationName === 'typing') {
                // Ajoute la classe pour masquer le curseur de la première ligne
                line1.classList.add('hide-cursor');
            }
        });
    }

    // Aucune action spécifique n'est nécessaire pour la fin de l'animation de la deuxième ligne,
    // car son curseur est déjà configuré pour clignoter indéfiniment via CSS.
});

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les boîtes de service que tu veux animer
    const serviceBoxes = document.querySelectorAll('.service-box-hidden');

    // Options pour l'Intersection Observer
    const options = {
        root: null, // null signifie le viewport comme racine
        rootMargin: '0px', // Pas de marge autour du viewport
        threshold: 0.2 // Déclenche quand 20% de l'élément est visible
    };

    // Callback qui s'exécute quand l'observation change
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si l'élément est visible (intersecting)
            if (entry.isIntersecting) {
                // Ajoute la classe qui déclenche l'animation
                entry.target.classList.add('service-box-revealed');
                // Retire la classe qui la cachait initialement
                entry.target.classList.remove('service-box-hidden');
                // Arrête d'observer cet élément, l'animation n'a besoin de se déclencher qu'une fois
                observer.unobserve(entry.target);
            }
        });
    };

    // Crée l'observateur
    const observer = new IntersectionObserver(observerCallback, options);

    // Commence à observer chaque boîte de service
    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
});