// /*Captura de la hora del post*/
// const time = () => {
// 	var date = new Date();
// 	var hours = date.getHours();
// 	var min = date.getMinutes();
// 	var time;
// 	if (min < 10) {
// 		min = '0' + min;
// 	}
// 	if (hours >= 12 && hours <= 24) {
// 		time = hours + ':' + min + ' PM';
// 	} else {
// 		time = hours + ':' + min + ' AM';
// 	}
// 	return time;
// }

// botones inhabilitado/ habilitado
const btnDisabled = (btn) => {
  btn.setAttribute('disabled', 'disabled');
  btn.classList.remove('enabled');
  btn.classList.add('disabled');
};

const btnEnabled = (btn) => {
  btn.removeAttribute('disabled');
  btn.classList.replace('disabled', 'enabled');
};

// crea boton
const addBtn = (btn, valueBtn) => {
  btn.appendChild(document.createTextNode(valueBtn));
  btn.setAttribute('type', 'button');
  btn.classList.add('btn');
  btnDisabled(btn);
  return btn;
};

const validatePost = (post, btn) => {
  (post.value === '' ) ? btnDisabled(btn) : btnEnabled(btn);
};

// agrega nuevo post
const createPost = (post, contain, btn) => {
  const containerPost = document.createElement('article');
  const newPost = document.createElement('p');
  const navPost = document.createElement('nav');
  const ulPost = document.createElement('ul');
  const editePost = document.createElement('a');
  const deletePost = document.createElement('a');
  const confirm = document.createElement('div');

  editePost.setAttribute('href', '#');
  editePost.classList.add('edite-post');
  deletePost.setAttribute('href', '#');
  deletePost.classList.add('delete-post');

  containerPost.appendChild(newPost);
  containerPost.appendChild(navPost);
  containerPost.appendChild(confirm);
  newPost.appendChild(document.createTextNode(post.value));
  navPost.appendChild(ulPost);
  ulPost.appendChild(document.createElement('li')).appendChild(editePost).appendChild(document.createTextNode('Editar'));
  ulPost.appendChild(document.createElement('li')).appendChild(deletePost).appendChild(document.createTextNode('Eliminar'));
  contain.insertBefore(containerPost, contain.firstChild);

  deletePost.addEventListener('click', () => {
    const confirmAction = (confirm) => {
      const containerConfirm = document.createElement('div');
      const infoConfirm = document.createElement('p');
      const ulConfirm = document.createElement('ul');
      const confirmDelete = document.createElement('a');
      const cancelDelete = document.createElement('a');

      confirmDelete.setAttribute('href', '#');
      confirmDelete.classList.add('edite-post');
      cancelDelete.setAttribute('href', '#');
      cancelDelete.classList.add('delete-post');

      containerConfirm.appendChild(infoConfirm).appendChild(document.createTextNode('¿Estás seguro?'));
      containerConfirm.appendChild(ulConfirm).appendChild(document.createElement('li')).appendChild(confirmDelete).appendChild(document.createTextNode('Aceptar'));
      containerConfirm.appendChild(ulConfirm).appendChild(document.createElement('li')).appendChild(cancelDelete).appendChild(document.createTextNode('Cancelar'));

      confirmDelete.addEventListener('click', () => {
        contain.removeChild(containerPost);
      });

      cancelDelete.addEventListener('click', () => {
        confirm.removeChild(containerConfirm);
      });

      confirm.appendChild(containerConfirm);
    };

    confirmAction(confirm);
  });

  editePost.addEventListener('click', () => {
    editePost.textContent = 'Guardar';
    const inputText = document.createElement('input');
    containerPost.appendChild(inputText);
    console.log(newPost.firstChild);

    // inputText.value = newPost.firstChild;

  });

  validatePost(post, btn);
  post.value = '';
  btnDisabled(btn);
  post.setAttribute('autofocus', 'autofocus');
};




