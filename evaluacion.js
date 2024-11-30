const solicitud = async (url) => {
const respuesta = await fetch(url);
    return await respuesta.json();
}

const usuarios = async () => await solicitud(`https://jsonplaceholder.typicode.com/users`);
const postsUsuario = async (userId) => await solicitud(`https://jsonplaceholder.typicode.com/posts/?userdId=${userId}`);
const comentariosPost = async (postId) => await solicitud(`https://jsonplaceholder.typicode.com/comments/?postdId=${postId}`);
const albums = async (userId) => await solicitud(`https://jsonplaceholder.typicode.com/albums/albums?userId=${userId}`);
const fotosAlbum = async(albumId) => await solicitud(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

const cargar = async () => {
    let users = await usuarios();
    const respuesta = await Promise.all(
    users.map(async (user) => {
        // const albumes = await albums(user.id);
        // const foticos = await Promise.all(
        // albumes.map(async (album) => {
        //     const fotos = await fotosAlbum(album.id);
        //    return {...albumes, fotos };
        //     })   
        // )
       const posts = await postsUsuario(user.id);
    //ok
const postComentarios = await Promise.all(
    posts.map(async (post) => {
    const comentarios = await comentariosPost(post.id);
   return {...post, comentarios};
    })   
);

return { ...user, posts: postComentarios}
})
);

console.log(respuesta);
}


cargar()


