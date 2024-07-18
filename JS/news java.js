// Function to show accidents for a particular year
function toggleAccidents(year, button) {
    // Get the accidents container
    var accidentsContainer = document.getElementById('accidents-container');

    // HTML content for accidents
    let accidentsHTML = '';

    // Add accidents specific to the selected year
    if (year === 2024) {
        accidentsHTML += `
        <article>
            <h2><u>List of Car Accidents Articles in 2024:</u></h2>
            <p>Here are some articles from 2024.</p>
            <ul>
                <li><a href="https://www.ynet.co.il/news/article/sj11eskc3t" target="_blank">The alarming data: almost one person killed per day in road accidents since the beginning of the year</a></li>
                <li><a href="https://www.israelhayom.co.il/news/local/article/15433198" target="_blank">It's a hard Saturday on the roads</a></li>
            </ul>
        </article>
        `;
    }
    else if (year === 2023) {
        accidentsHTML += `
        <article>
            <h2><u>List of Car Accidents Articles in 2023:</u></h2>
            <p>Here are some articles from 2023.</p>
            <ul>
                <li><a href="https://www.maariv.co.il/news/israel/Article-1063914" target="_blank">A deadly year</a></li>
                <li><a href="https://www.themarker.com/dynamo/cars/2023-09-13/ty-article/.premium/0000018a-8a3c-d8f7-abcb-dafd22050000" target="_blank">Failure of the Ministry of Transport and the Police</a></li>
            </ul>
        </article>
        `;
    } 
    else if (year === 2022) {
        accidentsHTML += `
        <article>
            <h2><u>List of Car Accidents Articles in 2022:</u></h2>
            <p>Stay informed about the latest car accidents and road safety news.</p>
            <ul>
                <li><a href="https://www.maariv.co.il/news/israel/Article-967783" target="_blank">Another bloody year on the roads</a></li>
                <li><a href="https://www.calcalist.co.il/local_news/article/rkksvejyi" target="_blank">105 pedestrians were killed, a 5-year record</a></li>
            </ul>
        </article>  
    `;
    }

    // If the container currently contains the accidents for the selected year, hide it; otherwise, show it
    if (accidentsContainer.innerHTML === accidentsHTML) {
        accidentsContainer.innerHTML = ''; // Hide the container
        button.classList.remove("clicked"); // Remove .clicked class from the button
    } else {
        // Remove .clicked class from all buttons
        var buttons = document.querySelectorAll('.years button');
        buttons.forEach(btn => btn.classList.remove('clicked'));

        // Show the container
        accidentsContainer.innerHTML = accidentsHTML;
        // Add .clicked class to the clicked button
        button.classList.add("clicked");
    }
}
