let dictionary = [];

function addWord() {
    const word = document.getElementById('addWord').value.toLowerCase();
    if (word && !dictionary.includes(word)) {
        dictionary.push(word);
    } else if (dictionary.includes(word)) {
        document.getElementById('message').innerText = 'Cuvantul a fost adaugat in dictionar.';
    }
    document.getElementById('addWord').value = '';
}

function searchWord() {
    const word = document.getElementById('searchWord').value.toLowerCase();
    if (dictionary.includes(word)) {
        document.getElementById('message').innerText = 'Cuvantul se afla in dictionar.';
    } else {
        document.getElementById('message').innerText = 'Cuvantul nu se afla in dictionar.';
    }
    document.getElementById('searchWord').value = '';
}