// espacio donde van los post
// const root = document.getElementById('root');
// const postOfUser = document.createElement('section');
// const figureUser = document.createElement('figure');
// const postContain = document.createElement('form');
// const postInput = document.createElement('input');
// const postBtn = document.createElement('button');
// const containerPosts = document.createElement('div');
// const postType = document.createElement('select');

// root.appendChild(postOfUser);
// root.appendChild(containerPosts);
// postOfUser.appendChild(figureUser);
// postOfUser.appendChild(postContain);
// postContain.appendChild(postInput);
// postContain.appendChild(postType);
// postType.appendChild(document.createElement('option'));

// postContain.appendChild(addBtn(postBtn, 'Postear'));

// postBtn.addEventListener('click', () => {
//   createPost(postInput, containerPosts);
// });


const createWall = () => {
  return `
    <main>
      <section>
        <figure></figure>
        <form>
          <input type="text" id="post-input">
          <select name="post-type" id="post-type">
            <option value="public">Público</option>
            <option value="friends">Amigos</option>
          </select>
          <button id="post-btn" type="button">Postear</button>
        </form>
      </section>
      <section id="container-posts"></section>
    </main>
  ` 
}


const root = document.getElementById('root');
root.innerHTML = createWall();

const postBtn = document.getElementById('post-btn');
const postInput = document.getElementById('post-input');
const containerPosts = document.getElementById('container-posts');

postBtn.addEventListener('click', () => {
  createPost(postInput, containerPosts);
})
