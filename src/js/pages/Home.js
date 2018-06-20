// espacio donde van los post
const root = document.getElementById('root');
const postOfUser = document.createElement('section');
const figureUser = document.createElement('figure');
const postContain = document.createElement('form');
const postInput = document.createElement('input');
const postBtn = document.createElement('button');
const containerPosts = document.createElement('div');
const postType = document.createElement('select');
const optionPublic = document.createElement('option');
const optionFriends = document.createElement('option');


root.appendChild(postOfUser);
root.appendChild(containerPosts);
postOfUser.appendChild(figureUser);
postOfUser.appendChild(postContain);
postContain.appendChild(postInput);
postContain.appendChild(postType);
postType.appendChild(optionPublic).appendChild(document.createTextNode('Público'));
postType.appendChild(optionFriends).appendChild(document.createTextNode('Amigos'));

optionPublic.value = 'public';
optionFriends.value = 'friends';

postContain.appendChild(addBtn(postBtn, 'Postear'));

postBtn.addEventListener('click', () => {
  createPost(postInput, containerPosts, postBtn);
});

postInput.addEventListener('keyup', () => {
  validatePost(postInput, postBtn);
})
