// Listener para el evento 'submit' del formulario
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    getData(document.getElementById('search').value); // Obtiene el valor del input y llama a la función
});

// Función para obtener datos de la API y verificar si el usuario existe
let getData = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        let response = await axios.get(url);
        console.log(`Usuario ${username} existe`);
        displayUser(response.data); // Llama a la función displayUser con los datos del usuario
    } catch (error) {
        console.error(`Usuario ${username} no existe`);
        showMessage(`Usuario ${username} no encontrado.`);
    }
}

// Función para mostrar el mensaje en el DOM
const showMessage = (message) => {
    const main = document.getElementById('main');
    main.innerHTML = `<p>${message}</p>`;
}

// Función para mostrar los datos del usuario en el DOM
const displayUser = (user) => {
    const main = document.getElementById('main');
    main.innerHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar"/>
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio ? user.bio : 'No bio available'}</p>
                <ul>
                    <li><strong>Repos públicos:</strong> ${user.public_repos}</li>
                    <li><strong>Seguidores:</strong> ${user.followers}</li>
                    <li><strong>Seguidos:</strong> ${user.following}</li>
                </ul>
                <a href="${user.html_url}" target="_blank" class="repo">Visitar perfil</a>
            </div>
        </div>
    `;
}

}
