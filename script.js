        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const thumbnails = document.querySelectorAll('.thumbnail img');

        // Fonction pour ouvrir la lightbox
        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            // Optionnel: Ajouter une classe sur le body pour empêcher le défilement
            document.body.style.overflow = 'hidden';
        }

        // Fonction pour fermer la lightbox
        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = ''; // Réactiver le défilement
        }

        // Ajouter un écouteur d'événements à chaque miniature
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const largeSrc = thumbnail.getAttribute('data-large-src');
                openLightbox(largeSrc);
            });
        });

        // Fermer la lightbox si on appuie sur la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
