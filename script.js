// Function to fetch news from the text file
function loadNews() {
    fetch('src/news.txt')
        .then(response => response.text())
        .then(text => document.getElementById('newsContent').innerHTML = text)
        .catch(error => console.error('Error loading news:', error)); 
}

// Call the news loading function on page load
loadNews(); 
