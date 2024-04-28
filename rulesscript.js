// Function to fetch news from the text file
function loadRules() {
    fetch('src/rules.txt')
        .then(response => response.text())
        .then(text => document.getElementById('rulesContent').innerHTML = text)
        .catch(error => console.error('Error loading rules:', error)); 
}

loadRules();