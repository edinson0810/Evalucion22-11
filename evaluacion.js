// async function obtenerPosts  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
//         const posts = await response.json();

//         posts.forEach(post => {
//             console.log(`user Id: ${post.userId}, id: ${post.id}, Titulo: ${post.title}, body: ${post.body}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerPosts();

// async function obtenerComments  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    
//         const comments = await response.json();

//         comments.forEach(comments => {
//             console.log(`posts Id: ${comments.postId}, id: ${comments.id}, name: ${comments.name},emial: ${comments.email}, body: ${comments.body}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerComments();

// async function obtenerAlbum  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    
//         const albums = await response.json();

//         albums.forEach(albums => {
//             console.log(`Users Id: ${albums.userId}, id ${albums.id}, tittle: ${albums.title}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerAlbum();

// async function obtenerPhotos  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    
//         const photos = await response.json();

//         photos.forEach(photos => {
//             console.log(`albumdId: ${photos.albumId}, id ${photos.id}, tittle: ${photos.title}, url: ${photos.url}, thumbnailUrl: ${photos.thumbanailUrl}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerPhotos();


// async function obtenerTodos  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    
//         const todos = await response.json();

//         todos.forEach(todos => {
//             console.log(`userId: ${todos.userId}, id: ${todos.id}, tittle: ${todos.title}, completed: ${todos.completed}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerTodos();



// async function obtenerUsers  ()  {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
//         const users = await response.json();

//         users.forEach(users => {
//             console.log(`id: ${users.id}, name ${users.name}, username: ${users.username}, email: ${users.email}`);
            
//         });

//     } catch (error) {
//         console.log('ocurrio un error', error);
        
//     }
// }

// obtenerUsers();




// ejercicio

const request = async (url) => {
    let response = await fetch(`${url}`);
    return await response.json()
}

const users = async () => await request('https://jsonplaceholder.typicode.com/users');
const postsUser = async (userId) => await request('https://jsonplaceholder.typicode.com/posts/?userdId=${userId');
const commentsPost = async (postId) => await request('https://jsonplaceholder.typicode.com/comments/?postdId=${posId');


const load = async () => {
    let usuarios = await users();
    let arrayPosts = [];
    let arrayComments = [];

for ( const usuario of usuarios) {
    arrayPosts.push(postsUser(usuario.id))
}



let responsePost = await Promise.all(arrayPosts);

for (let i = 0; i < responsePost.length; i++) {
    const post = responsePost[i][i];
    arrayComments.push(commentsPost(post.id))
}

let responseComments = await Promise.all(arrayComments);

console.log(responseComments);
}

load();
















