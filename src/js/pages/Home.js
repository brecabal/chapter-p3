const root = document.getElementById('root');
const postOfUser = document.createElement('section');
const figureUser = document.createElement('figure');
const postContain = document.createElement('form');
const postInput = document.createElement('input');
const postBtn = document.createElement('button');
const allPost = document.createElement('div');
const containerPosts = document.createElement('div');
const postType = document.createElement('select');
const optionPublic = document.createElement('option');
const optionFriends = document.createElement('option');

postInput.setAttribute('placeholder', '¿Qué está pasando?');
postInput.setAttribute('autofocus', 'autofocus');
optionPublic.value = 'public';
optionFriends.value = 'friends';

root.appendChild(postOfUser);
root.appendChild(containerPosts);
postOfUser.appendChild(figureUser);
postOfUser.appendChild(allPost);

allPost.appendChild(postContain);
allPost.appendChild(document.createElement('h2')).appendChild(document.createTextNode('Mis post'));
postContain.appendChild(postInput);
postContain.appendChild(postType);
postContain.appendChild(addBtn(postBtn, 'Publicar'));
postType.appendChild(optionPublic).appendChild(document.createTextNode('Público'));
postType.appendChild(optionFriends).appendChild(document.createTextNode('Amigos'));

figureUser.appendChild(document.createTextNode('acá va a ir el usuario'));

postBtn.addEventListener('click', () => {
  createPost(postInput, containerPosts, postBtn);
});

postInput.addEventListener('keyup', () => {
  validatePost(postInput, postBtn);
});
