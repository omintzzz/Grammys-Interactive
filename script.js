///document.addEventListener("DOMContentLoaded", function () {
    ///var artistData = {
        // Year: [Best New Artist, SOTY, ROTY, AOTY]
        ///2023: ["Samara Joy", "'Just Like That' by Bonnie Raitt", "'About Damn Time' by Lizzo", "Harry's House"],
       /// 2024: ["Victoria Monet", "'What Was I Made For?' by Billie Eilish", "'Flowers' by Miley Cyrus", "Midnights"],
       /// 2025: ["Chappell Roan", "'Not Like Us' by Kendrick Lamar", "'Not Like Us' by Kendrick Lamar", "Cowboy Carter"]
   /// };

    ///var yearCarousel = new Flickity('.year-carousel');
   /// var categoryCarousel = new Flickity('.category-carousel');
    ///var artistCarousel = new Flickity('.artist-carousel');

    document.addEventListener("DOMContentLoaded", function () {
        var yearCarousel = new Flickity('.year-carousel');
        var categoryCarousel = new Flickity('.category-carousel');
    
        // Function to show the artist image
        function showArtistIMG() {
            var imgContainer = document.querySelector('.artist-img');
            if (!imgContainer) {
                console.warn("No element with class 'artist-img' found.");
                return;
            }
    
            imgContainer.innerHTML = ""; // Clear current image
    
            var selectedYearElement = document.querySelector('.year-carousel .is-selected');
            if (!selectedYearElement) {
                selectedYearElement = document.querySelector('.year-carousel-cell'); // Default to first
            }
    
            var selectedCategoryElement = document.querySelector('.category-carousel .is-selected') 
                || document.querySelector('.category-carousel-cell'); // Default to first
    
            if (!selectedYearElement || !selectedCategoryElement) {
                console.warn("Year or category not selected");
                return;
            }
    
            var year = selectedYearElement.getAttribute("data-year");
            var category = selectedCategoryElement.getAttribute("data-category");
    
            console.log(`Selected Year: ${year}, Selected Category: ${category}`);
    
            var img = document.createElement("img");
            img.classList.add("winner-img");
    
            // ** Image selection using if statements **
            if (year == 2023 && category === "Best New Artist") {
                img.src = "grammy_winners/BNA_SAMARA.png";
            } else if (year == 2023 && category === "Song of the Year") {
                img.src = "grammy_winners/RTY_BONNIE.png";
            } else if (year == 2023 && category === "Record of the Year") {
                img.src = "grammy_winners/RTY_LIZZO.png";
            } else if (year == 2023 && category === "Album of the Year") {
                img.src = "grammy_winners/AOTY_HARRY.png";
            } else if (year == 2024 && category === "Best New Artist") {
                img.src = "grammy_winners/BNA_VICTORIA.png";
            } else if (year == 2024 && category === "Song of the Year") {
                img.src = "grammy_winners/STY_BILLIE.png";
            } else if (year == 2024 && category === "Record of the Year") {
                img.src = "grammy_winners/RTY_MILEY.png";
            } else if (year == 2024 && category === "Album of the Year") {
                img.src = "grammy_winners/AOTY_TAYLOR.png";
            } else if (year == 2025 && category === "Best New Artist") {
                img.src = "grammy_winners/BNA_CHAPPELL.png";
            } else if (year == 2025 && category === "Song of the Year") {
                img.src = "grammy_winners/STY_KENDRICK.png";
            } else if (year == 2025 && category === "Record of the Year") {
                img.src = "grammy_winners/RTY_KENDRICK.png";
            } else if (year == 2025 && category === "Album of the Year") {
                img.src = "grammy_winners/AOTY_BEYONCE.png";
            } else {
                console.warn("No image found for selected year and category.");
                return;
            }
    
            imgContainer.appendChild(img);
        }
    
        // Attach event listeners to update image on selection change
        yearCarousel.on('change', showArtistIMG);
        categoryCarousel.on('change', showArtistIMG);
    
        // Call function initially to ensure image is displayed when page loads
        setTimeout(showArtistIMG, 500); // Delay to ensure Flickity is fully initialized
    
        // Other functions for the artist and award carousels...
    });

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