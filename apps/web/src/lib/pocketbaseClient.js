import PocketBase from 'pocketbase';

// URL padrão do PocketBase local. Altere caso o seu servidor backend rode em outra porta.
const pb = new PocketBase('http://127.0.0.1:8090');

export default pb;