function formatNomineesAsList(nomineeArray) {
    return "<ul>" + nomineeArray.map(name => `<li>${name}</li>`).join('') + "</ul>";
}

function updateContent() { // updateContent, update image, update audio, update caption
    var imgContainer = document.querySelector('.artist-img');
    if (!imgContainer) {
        console.warn("No element with class 'artist-img' found.");
        return;
    }

    var popFact = document.querySelector('.pop-culture-fact');
    if (!popFact) {
        console.warn("No element with class 'pop-culture-fact' found.");
        return;
    }

    var otherNoms = document.querySelector('.nominee-content');
    if (!otherNoms) {
        console.warn("No element with class 'nominee-content' found.");
        return;
    }

    imgContainer.innerHTML = ""; // Clear current image
    funfactTEXT = ""; // Clear current pop culture fact
    nomineeTEXT = []; // Clear current nominee content

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

    // ** Image selection using if statements ** EACH OF THESE IFS change innter html of caption, change audio source and img
    if (year == 2023 && category === "Best New Artist") {
        img.src = "grammy_winners/BNA_SAMARA.png";
        funfactTEXT = "Samara Joy also won Best Jazz Vocal Album for 'Linger Awhile.'";
        nomineeTEXT = ["Anitta", "Omar Apollo", "DOMi & JD Beck", "Muni Long", "Latto", "Måneskin", "Tobe Nwigwe", "Molly Tuttle", "Wet Leg"];
    } else if (year == 2023 && category === "Song of the Year") {
        img.src = "grammy_winners/RTY_BONNIE.png";
        funfactTEXT = "'Just Like That' also won the Grammy for Best American Roots Song.";
        nomineeTEXT = ["abcdefu (GAYLE)", "About Damn Time (Lizzo)", "All Too Well (Taylor Swift)", "As It Was (Harry Styles)", "Bad Habit (Steve Lacy)", "Break My Soul (Beyoncé)", "Easy On Me (Adele)", "God Did (DJ Khaled Featuring Rick Ross, Lil Wayne, Jay-Z, John Legend & Fridayy)", "The Heart Part 5 (Kendrick Lamar)"];
    } else if (year == 2023 && category === "Record of the Year") {
        img.src = "grammy_winners/RTY_LIZZO.png";
        funfactTEXT = "There was a dance trend on Tik Tok to 'About Damn Time.'";
        nomineeTEXT = ["Don’t Shut Me Down (ABBA)", "Easy On Me (Adele)", "Break My Soul (Beyoncé)", "Good Morning Gorgeous (Mary J. Blige)", "You And Me On The Rock (Brandi Carlile Featuring Lucius)", "Woman (Doja Cat)", "Bad Habit (Steve Lacy)", "The Heart Part 5 (Kendrick Lamar)", "As It Was (Harry Styles)"];
    } else if (year == 2023 && category === "Album of the Year") {
        img.src = "grammy_winners/AOTY_HARRY.png";
        funfactTEXT = "For the 2023 Grammy Awards, Harry Styles' hit song 'As It Was' received four nominations including Record Of The Year, Best Music Video, Best Pop Solo Performance, and Song Of The Year.";
        nomineeTEXT = ["Voyage (ABBA)", "30 (Adele)", "Un Verano Sin Ti (Bad Bunny)", "Renaissance (Beyoncé)", "Good Morning Gorgeous (Deluxe) (Mary J. Blige)", "In These Silent Days (Brandi Carlile)", "Music Of The Spheres (Coldplay)", "Mr. Morale & The Big Steppers (Kendrick Lamar)", "Special (Lizzo)"];
    } else if (year == 2024 && category === "Best New Artist") {
        img.src = "grammy_winners/BNA_VICTORIA.png";
        funfactTEXT = "'Victoria Monet was also nominated for Record Of The Year and Best R&B Song for her hit 'On My Mama',  Best Traditional R&B Performance, and Best R&B Performance.";
        nomineeTEXT = ["Gracie Abrams", "Fred again..", "Ice Spice", "Jelly Roll", "Coco Jones", "Noah Kahan", "The War And Treaty"];
    } else if (year == 2024 && category === "Song of the Year") {
        img.src = "grammy_winners/STY_BILLIE.png";
        funfactTEXT = "'What Was I Made For?' was famously included in the soundtrack of Barbie (2023).";
        nomineeTEXT = ["A&W (Lana Del Rey)", "Anti-Hero (Taylor Swift)", "Butterfly (Jon Batiste)", "Dance The Night (Dua Lipa)", "Flowers (Miley Cyrus)", "Kill Bill (SZA)", "Vampire (Olivia Rodrigo)"];
    } else if (year == 2024 && category === "Record of the Year") {
        img.src = "grammy_winners/RTY_MILEY.png";
        funfactTEXT = "This was Miley Cyrus' first Grammy win despite being in the industry as a child star.";
        nomineeTEXT = ["Worship (Jon Batiste)", "Not Strong Enough (boygenius)", "What Was I Made For? (Billie Eilish)", "On My Mama (Victoria Monét)", "Vampire (Olivia Rodrigo)", "Anti-Hero (Taylor Swift)", "Kill Bill (SZA)"];
    } else if (year == 2024 && category === "Album of the Year") {
        img.src = "grammy_winners/AOTY_TAYLOR.png";
        funfactTEXT = "This was the fourth Album of the Year award Taylor Swift has won.";
        nomineeTEXT = ["World Music Radio (Jon Batiste)", "the record (boygenius)", "Endless Summer Vacation (Miley Cyrus)", "Did You Know That There’s A Tunnel Under Ocean Blvd (Lana Del Rey)", "The Age Of Pleasure (Janelle Monáe)", "Guts (Olivia Rodrigo)", "SOS (SZA)"];
    } else if (year == 2025 && category === "Best New Artist") {
        img.src = "grammy_winners/BNA_CHAPPELL.png";
        funfactTEXT = "Chappell Roan was nominated for five other Grammy awards including Best Pop Vocal Album and Album of the Year for 'The Rise And Fall Of A Midwest Princess' in addition to Song Of The Year, Record of the Year, and Best Pop Solo Performance for her hit song 'Good Luck Babe.'";
        nomineeTEXT = ["Benson Boone", "Sabrina Carpenter", "Doechii", "Khruangbin", "Raye", "Shaboozey", "Teddy Swims"];
    } else if (year == 2025 && category === "Song of the Year") {
        img.src = "grammy_winners/STY_KENDRICK.png";
        funfactTEXT = "This iconic diss track toward Drake won five Grammy awards this year, which is the same number of Grammys Drake has in total.";
        nomineeTEXT = ["A Bar Song (Tipsy) (Shaboozey)", "Birds of a Feather (Billie Eilish)", "Die With a Smile (Lady Gaga & Bruno Mars)", "Fortnight (Taylor Swift Featuring Post Malone)", "Good Luck, Babe! (Chappell Roan)", "Please Please Please (Sabrina Carpenter)", "Texas Hold 'Em (Beyoncé)"];
    } else if (year == 2025 && category === "Record of the Year") {
        img.src = "grammy_winners/RTY_KENDRICK.png";
        funfactTEXT = "This iconic diss track toward Drake won five Grammy awards this year, which is the same number of Grammys Drake has in total.";
        nomineeTEXT = ["Now and Then (The Beatles)", "Texas Hold 'Em (Beyoncé)", "Espresso (Sabrina Carpenter)", "360 (Charli xcx)", "Birds of a Feather (Billie Eilish)", "Good Luck, Babe! (Chappell Roan)", "Fortnight (Taylor Swift Featuring Post Malone)"];
    } else if (year == 2025 && category === "Album of the Year") {
        img.src = "grammy_winners/AOTY_BEYONCE.png";
        funfactTEXT = "Throughout her extensive music career, Beyonce has finally won Album of the Year after being nominated four times previously. She is the first Black woman in the 21st century to win this award.";
        nomineeTEXT = ["New Blue Sun (André 3000)", "Short n’ Sweet (Sabrina Carpenter)", "Brat (Charli xcx)", "Djesse Vol. 4 (Jacob Collier)", "Hit Me Hard and Soft (Billie Eilish)", "The Rise And Fall Of A Midwest Princess (Chappell Roan)", "The Tortured Poets Department (Taylor Swift)"];
    } else {
        console.warn("No content found for selected year and category.");
        return;
    }

    imgContainer.appendChild(img);
    popFact.innerHTML = funfactTEXT;
    otherNoms.innerHTML = formatNomineesAsList(nomineeTEXT);
}


document.addEventListener("DOMContentLoaded", function () {
    var yearCarousel = new Flickity('.year-carousel');
    var categoryCarousel = new Flickity('.category-carousel');

    // Attach event listeners to update image on selection change
    yearCarousel.on('change', updateContent);
    categoryCarousel.on('change', updateContent);

    // Call function initially to ensure image is displayed when page loads
    setTimeout(updateContent, 500); // Delay to ensure Flickity is fully initialized

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

// Initialize the category carousel
var categoryCarousel = new Flickity('.category-carousel', {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false
});



document.addEventListener("DOMContentLoaded", function () {
    var yearCarousel = new Flickity('.year-carousel');
    var categoryCarousel = new Flickity('.category-carousel');

    yearCarousel.on('change', updateContent);
    categoryCarousel.on('change', updateContent);

    setTimeout(updateContent, 500);
});

// end culture nominee info function