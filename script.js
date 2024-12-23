
//const APIURL = 'https://api.github.com/users/'


/*let getData = async (url) => {
      
    try {
      let response = await axios.get(url);
      console.log("Connection successful");
      let json_response = response.data;
      return json_response;
      }catch (error) {
        console.error(`Error fetching data: ${error}`);              
      }
    }
    let endpoint = 'https://api.github.com/users/YefGav';
  getData(endpoint).then(data => {
    console.log(data); // Mostrar el objeto completo en la consola
  });*/

  // Función para obtener datos de la API
  

  document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
      getData(document.getElementById('search').value); // Obtiene el valor del input y llama a la función
});

let getData = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        let response = await axios.get(url);
        console.log(`Usuario ${username} existe`);
        mostrarUser(response.data);
        } catch (error) {
            console.error(`Usuario ${username}  no existe`); 
           }
}
const showMessage = (message) => { 
    const main = document.getElementById('main');
     main.innerHTML = `<p>${message}</p>`; }
const mostrarUser = (user) => {
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

// Función para probar la existencia de un usuario
/*let testUsername = async (username) => {
    let data = await getData(username);
    if (data) {
        console.log(data); // Mostrar el objeto completo en la consola si el usuario existe
    } else {
        console.log(`No user found with username: ${username}`);
    }
}

// Probar con un usuario existente y uno inexistente
testUsername('YefGav'); // Existente
testUsername('NonExistentUser123456'); // Inexistente*/
