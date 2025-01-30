document.getElementById('memory-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    if (title && description && image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const memory = {
                title: title,
                description: description,
                image: e.target.result
            };

            addMemoryToPage(memory);
            saveMemoryToLocalStorage(memory);

            document.getElementById('memory-form').reset();
        };
        reader.readAsDataURL(image);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

function addMemoryToPage(memory) {
    const memoryList = document.getElementById('memory-list');

    const memoryElement = document.createElement('div');
    memoryElement.classList.add('memory');

    memoryElement.innerHTML = `
        <h3>${memory.title}</h3>
        <p>${memory.description}</p>
        <img src="${memory.image}" alt="${memory.title}" style="max-width: 100%; height: auto;">
    `;

    memoryList.appendChild(memoryElement);
}

function saveMemoryToLocalStorage(memory) {
    let memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.push(memory);
    localStorage.setItem('memories', JSON.stringify(memories));
}

function loadMemoriesFromLocalStorage() {
    const memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.forEach(memory => addMemoryToPage(memory));
}

// Cargar recuerdos al cargar la página
window.onload = loadMemoriesFromLocalStorage;document.getElementById('memory-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    if (title && description && image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const memory = {
                title: title,
                description: description,
                image: e.target.result
            };

            addMemoryToPage(memory);
            saveMemoryToLocalStorage(memory);

            document.getElementById('memory-form').reset();
        };
        reader.readAsDataURL(image);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

function addMemoryToPage(memory) {
    const memoryList = document.getElementById('memory-list');

    const memoryElement = document.createElement('div');
    memoryElement.classList.add('memory');

    memoryElement.innerHTML = `
        <h3>${memory.title}</h3>
        <p>${memory.description}</p>
        <img src="${memory.image}" alt="${memory.title}" style="max-width: 100%; height: auto;">
    `;

    memoryList.appendChild(memoryElement);
}

function saveMemoryToLocalStorage(memory) {
    let memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.push(memory);
    localStorage.setItem('memories', JSON.stringify(memories));
}

function loadMemoriesFromLocalStorage() {
    const memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.forEach(memory => addMemoryToPage(memory));
}

// Cargar recuerdos al cargar la página
window.onload = loadMemoriesFromLocalStorage;
