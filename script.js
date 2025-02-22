document.addEventListener("DOMContentLoaded", function () {
    var artistData = {
        2023: ["Samara Joy", "Artist B", "Artist C"],
        2024: ["Victoria Monet", "Artist E", "Artist F"],
        2025: ["Chappell Roan", "Artist H", "Artist I"]
    };

    var yearCarousel = new Flickity('.year-carousel');
    var artistCarousel = new Flickity('.artist-carousel');

    function updateArtists(year) {
        var artistContainer = document.querySelector('.artist-carousel');
        artistContainer.innerHTML = ""; // Clear current artists

        artistData[year].forEach(function (artist) {
            var cell = document.createElement("div");
            cell.classList.add("carousel-cell");
            cell.textContent = artist;
            artistContainer.appendChild(cell);
        });

        artistCarousel.reloadCells(); // Refresh Flickity
    }

    // Initial load
    updateArtists(2023);

    yearCarousel.on('change', function (index) {
        var selectedYear = document.querySelector('.year-carousel .is-selected').dataset.year;
        updateArtists(selectedYear);
    });
});