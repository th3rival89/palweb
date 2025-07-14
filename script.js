
//MENU HAMBURGER

// 1. Sélectionner les éléments HTML dont on a besoin
// On utilise document.getElementById() pour trouver les éléments grâce à leur ID.
const menuButton = document.getElementById('menu-button'); // Notre bouton hamburger
const mainMenu = document.getElementById('main-menu');     // Notre menu de navigation

// 2. Ajouter un "écouteur d'événement" au bouton
// On dit au navigateur : "Quand quelqu'un clique sur menuButton, exécute cette fonction."
menuButton.addEventListener('click', function() {
    // 3. Basculer la visibilité du menu
    // mainMenu.classList.toggle('hidden') va faire deux choses :
    // - Si la classe 'hidden' est présente sur mainMenu, elle la retire (le menu devient visible).
    // - Si la classe 'hidden' n'est PAS présente, elle l'ajoute (le menu devient invisible).
    mainMenu.classList.toggle('hidden');

    // Optionnel : Basculer l'icône du hamburger en une croix (pour le style)
    // On peut modifier le SVG du bouton pour afficher une croix quand le menu est ouvert.
    // Cette partie est plus avancée, mais voici l'idée :
    const icon = menuButton.querySelector('svg path');
    if (mainMenu.classList.contains('hidden')) {
        // Le menu est caché, afficher l'icône hamburger
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Chemin SVG pour les 3 barres
    } else {
        // Le menu est visible, afficher l'icône croix
        icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Chemin SVG pour la croix
    }
});

// Optionnel : Fermer le menu si on clique en dehors (amélioration de l'expérience utilisateur)
document.addEventListener('click', function(event) {
    // Vérifie si le clic n'était pas sur le bouton du menu ET s'il n'était pas sur le menu lui-même
    if (!menuButton.contains(event.target) && !mainMenu.contains(event.target) && !mainMenu.classList.contains('hidden')) {
        mainMenu.classList.add('hidden'); // Cache le menu
        // Réinitialise l'icône du hamburger si tu as implémenté le changement d'icône
        const icon = menuButton.querySelector('svg path');
        icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
});

// Optionnel : Fermer le menu si un lien est cliqué (utile sur mobile)
mainMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!mainMenu.classList.contains('hidden')) {
            mainMenu.classList.add('hidden'); // Cache le menu
            // Réinitialise l'icône du hamburger
            const icon = menuButton.querySelector('svg path');
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    });
});


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

