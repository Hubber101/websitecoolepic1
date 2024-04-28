function loadNews() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/news.txt', true);

    xhr.onload = function() {
        if (this.status == 200) {
            document.getElementById('newsContent').textContent = this.responseText;
        } else {
            console.error('Error loading news:', this.status);
        }
    };

    xhr.onerror = function() {
        console.error('Error loading news. Check if file exists.');
    }

    xhr.send();
}

// Call the news loading function on page load
loadNews(); 
