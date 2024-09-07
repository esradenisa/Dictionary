let dictionary = [];

function addWord() {
    const word = document.getElementById('addWord').value.toLowerCase();
    if (word && !dictionary.includes(word)) {
        dictionary.push(word);
        document.getElementById('message').innerText = 'The word was saved in the dictionary.';
    } else if (dictionary.includes(word)) {
        document.getElementById('message').innerText = 'The word is already saved in the dictionary.';
    }
    document.getElementById('addWord').value = '';
}

function searchWord() {
    const word = document.getElementById('searchWord').value.toLowerCase();
    if (dictionary.includes(word)) {
        document.getElementById('message').innerText = 'We found the word in the dictionary.';
    } else {
        document.getElementById('message').innerText = 'We did not find the word in the dictionary.';
    }
    document.getElementById('searchWord').value = '';
}
