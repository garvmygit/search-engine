const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');
const searchHistory = document.getElementById('search-history');
const noHistoryMessage = document.getElementById('no-history-message');

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (history.length > 0) {
        history.forEach(term => addToHistory(term));
    } else {
        noHistoryMessage.style.display = 'block';
    }
}

function saveHistory(term) {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(history));
}

function addToHistory(searchTerm) {
    const listItem = document.createElement('li');
    listItem.textContent = searchTerm;
    searchHistory.appendChild(listItem);
    noHistoryMessage.style.display = 'none';
}

clearButton.addEventListener('click', function() {
    searchHistory.innerHTML = '';
    noHistoryMessage.style.display = 'block';
    localStorage.removeItem('searchHistory');
});

searchButton.addEventListener('click', function() {
    const input = document.getElementById('search-input').value;
    if (input) {
        addToHistory(input);
        saveHistory(input);
        document.getElementById('search-input').value = '';
    }
});

window.onload = loadHistory;
