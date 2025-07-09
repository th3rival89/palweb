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