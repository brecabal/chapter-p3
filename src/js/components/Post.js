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

// validar
const validatePost = (post, btn) => {
  (post.value === '' ) ? btnDisabled(btn) : btnEnabled(btn);
}

// agrega nuevo post
const createPost = (post, contain, btn) => {
  const containerPost = document.createElement('div');
  const newPost = document.createElement('p');

  newPost.appendChild(document.createTextNode(post.value));
  containerPost.appendChild(newPost);
  // validatePost(post, btn);
  // primerito
  contain.insertBefore(newPost, contain.childNodes[0]);
  post.value = '';
}

