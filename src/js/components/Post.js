// botones inhabilitado/ habilitado
const btnDisabled = (btn) => {
  btn.disabled = 'disabled';
  btn.classList.add('disabled');
}

const btnEnabled = (btn) => {
  btn.disabled = '';
  btn.classList.replace('disabled', 'enabled');
}

// crea boton
const addBtn = (btn, valueBtn) => {
  btn.appendChild(document.createTextNode(valueBtn));
  btn.type = 'button';

 // btnDisabled(btn);
  return btn;
}


const validatePost = (post, btn) => {
  (post.value === '' ) ? btnDisabled(btn) : btnEnabled(btn);
}

// // agrega nuevo post
// const createPost = (post, contain) => {
//   const containerPost = document.createElement('div');
//   const newPost = document.createElement('p');

//   newPost.appendChild(document.createTextNode(post.value));
//   containerPost.appendChild(newPost);
//   // validatePost(post, btn);
//   // primerito
//   contain.insertBefore(newPost, contain.childNodes[0]);
//   post.value = '';
// }

// agrega nuevo post
const createPost = (post, contain) => {
  const newPost =+ `
    <div>
      <p>${post.value}</p>
    </div>
  `;
  // validatePost(post, btn);
  // primerito
  // contain.insertBefore(newPost, contain.childNodes[0]);
  return newPost;
  post.value = '';
}


