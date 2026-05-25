// one button switches what season of pictures are rotated between - start at first image when season switches
// one button switches between pictures - ten total for each season

// global vars
let images = [[{src: "photos/winter-test1.jpeg", alt: "A pinecone sitting in a snowbank."},
    {src: "photos/winter-test2.jpeg", alt: "A ski rack sitting in front of a snowy mountain."}],
[{src: "photos/spring-test1.jpeg", alt: "Yellow roses with other flowers in the background."},
    {src: "photos/spring-test2.jpeg", alt: "White cherry blossoms on a tree branch in front of a blue sky."}],
[{src: "photos/summer-test1.jpeg", alt: "A white sand beach with a teal-colored ocean behind."},
    {src: "photos/summer-test2.jpeg", alt: "A pale yellow sunset behind some palm trees."}],
[{src: "photos/fall-test1.jpeg", alt: "A tree with red and orange leaves sitting next to a small city street in the rain."},
    {src: "photos/fall-test2.jpeg", alt: "A small lake with trees with red and orange leaves around it."}]];
let imgCounter = 0;
let currentSeason = 0; // 0 - Winter, 1 - Spring, 2 - Summer, 3 - Fall
const imgNum = 2; // can modify if number of linked images changes - must be even across seasons

// add event listener so that when a specific button is pushed calls the change image function
const imgButton = document.getElementById("img-button");
const seasonButton = document.getElementById("season-button");

imgButton.addEventListener("click", changeImage);
seasonButton.addEventListener("click", changeImageSeason);

// change image function that selects based on the id and changes the img src
function changeImage() {
    const img = document.getElementById("season-img");
    imgCounter++;
    if (imgCounter == imgNum) {
        imgCounter = 0;
    }
    img.src = images[currentSeason][imgCounter].src;
    img.alt = images[currentSeason][imgCounter].alt;
    console.log("called changeImage")
}

function changeImageSeason() {
    const img = document.getElementById("season-img");
    const text = document.getElementById("season-text");
    switch (currentSeason){
        case 0: 
            currentSeason++;
            text.textContent = "Season: Spring";
            break;
        case 1:
            currentSeason++;
            text.textContent = "Season: Summer";
            break;
        case 2:
            currentSeason++;
            text.textContent = "Season: Fall";
            break;
        case 3:
            currentSeason = 0;
            text.textContent = "Season: Winter";
            break;
        default:
            console.log("Error with switching seasons");
    }
    img.src = images[currentSeason][0].src;
    img.alt = images[currentSeason][0].alt;
}
