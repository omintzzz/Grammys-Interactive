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

// Initialize the category carousel with arrows
var categoryCarousel = new Flickity('.category-carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true // Enable arrows
});

// Initialize the award winners carousel with arrows
var awardCarousel = new Flickity('.award-carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: true // Enable arrows
});

// Award data categorized by type
var awardData = {
    "Best New Artist": ["Samara Joy", "Artist B", "Artist C"],
    "Song of the Year": ["Song A", "Song B", "Song C"],
    "Record of the Year": ["Record X", "Record Y", "Record Z"],
    "Album of the Year": ["Album 1", "Album 2", "Album 3"]
};

// Function to update awards based on the selected category
function updateAwards(category) {
    var awardContainer = document.querySelector('.award-carousel');
    awardContainer.innerHTML = ""; // Clear current awards

    if (awardData[category]) {
        awardData[category].forEach(function (award) {
            var cell = document.createElement("div");
            cell.classList.add("carousel-cell");
            cell.textContent = award;
            awardContainer.appendChild(cell);
        });

        // Refresh Flickity to recognize new cells
        awardCarousel.reloadCells();
        awardCarousel.select(0); // Reset to first cell
    } else {
        console.warn(`No awards found for category: ${category}`);
    }
}

// Initial load for Best New Artist
updateAwards("Best New Artist");

// Event listener for category changes
categoryCarousel.on('change', function (index) {
    var selectedCell = document.querySelector('.category-carousel .carousel-cell.is-selected');
    var selectedCategory = selectedCell?.dataset.category;

    if (selectedCategory) {
        updateAwards(selectedCategory);
    }
});


});