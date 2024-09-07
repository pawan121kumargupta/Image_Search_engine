// // const accessKey="3QiJC28DVZ_Jo5BG3JIfLsFXgKKnfjDBKmWV26y4npo";
// // const searchForm= document.getElementById("search-form");
// // const searchBox= document.getElementById("search-Box");
// // const searchResult= document.getElementById("search-Result");
// // const showMoreBtn= document.getElementById("show-more-btn");


// // // let keyword="";
// // // let page =1;


// // // async function searchImage(){
// // //     keyword = searchBox.value;
// // //     const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
     
// // //     const response = await fetch(url);
// // //     const data= await response.json();

// // //     console.log(data);

    
// // // }


// // // const accessKey = "3QiJC28DVZ_Jo5BG3JIfLsFXgKKnfjDBKmWV26y4npo";
// // const page = 1; // Make sure this is defined elsewhere in your code
// // const keyword = encodeURIComponent("nature"); // Replace "nature" with your actual search term

// // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

// // // console.log(url); // For debugging purposes
// // const result= data.results;
// // results.map((result)=>{
// //     const image= document.createElement("img");
// //     image.src=result.urls.small;


// //     const imageLink=  documment.createElement("a");
// //     imageLink.target="_blank";

// //     imageLink.appendchild(image);
// //     searchResult.appendchild(imageLink);
// // })



// // searchForm.addEventListener("submit",(e)=>{
// //     e.preventDefault();
// //     page=1;
// //     searchImage();
// // })

// const accessKey = "HdI2eaZIbdW632GFGfrqD6y2RyWZ3O-GptWMac-d4w4";
// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-Box");
// const searchResult = document.getElementById("search-Result");
// const showMoreBtn = document.getElementById("show-more-btn");

// let page = 1; // Initialize page number
// let keyword = ''; // Initialize keyword

// async function searchImage() {
//     keyword = searchBox.value.trim(); // Get and trim the search keyword
//     if (!keyword) return; // If the keyword is empty, do nothing

//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(keyword)}&client_id=${accessKey}&per_page=`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
        
//         // Clear previous results if this is a new search
//         if (page === 1) {
//             searchResult.innerHTML = '';
//         }

//         // Display new results
//         data.results.forEach((result) => {
//             const image = document.createElement("img");
//             image.src = result.urls.small;
//             image.alt = result.alt_description || 'Image'; // Add alt text for accessibility

//             const imageLink = document.createElement("a");
//             imageLink.href = result.urls.full; // Link to the full-size image
//             imageLink.target = "_blank";
//             imageLink.appendChild(image);

//             searchResult.appendChild(imageLink);
//         });
//     } catch (error) {
//         console.error("Error fetching images:", error);
//     }
// }

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1; // Reset to the first page on new search
//     searchImage();
// });

// // Optional: Add functionality to load more results
// showMoreBtn.addEventListener("click", () => {
//     page += 1; // Increment page number
//     searchImage();
// });


const accessKey = "HdI2eaZIbdW632GFGfrqD6y2RyWZ3O-GptWMac-d4w4"; // Make sure this is valid
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box"); // Corrected ID
const searchResult = document.getElementById("search-result"); // Corrected ID
const showMoreBtn = document.getElementById("show-more-btn");

let page = 1; // Initialize page number
let keyword = ''; // Initialize keyword

async function searchImage() {
    keyword = searchBox.value.trim(); // Get and trim the search keyword
    if (!keyword) return; // If the keyword is empty, do nothing

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(keyword)}&client_id=${accessKey}&per_page=6`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Clear previous results if this is a new search
        if (page === 1) {
            searchResult.innerHTML = '';
        }

        // Display new results
        data.results.forEach((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description || 'Image'; // Add alt text for accessibility

            const imageLink = document.createElement("a");
            imageLink.href = result.urls.full; // Link to the full-size image
            imageLink.target = "_blank";
            imageLink.appendChild(image);

            searchResult.appendChild(imageLink);
        });

        // Show the "Show More" button if there are more results
        if (data.results.length > 0) {
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none';
        }

    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1; // Reset to the first page on new search
    searchImage();
});

// Optional: Add functionality to load more results
showMoreBtn.addEventListener("click", () => {
    page += 1; // Increment page number
    searchImage();
});

