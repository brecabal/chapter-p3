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
  btn.classList.add('disabled');
}

const btnEnabled = (btn) => {
  btn.removeAttribute('disabled');
  btn.classList.replace('disabled', 'enabled');
}

// crea boton
const addBtn = (btn, valueBtn) => {
  btn.appendChild(document.createTextNode(valueBtn));
  btn.setAttribute('type', 'button');
  btnDisabled(btn);
  return btn;
}

const validatePost = (post, btn) => {
  (post.value === '' ) ? btnDisabled(btn) : btnEnabled(btn);
}

// agrega nuevo post
const createPost = (post, contain, btn) => {
  const containerPost = document.createElement('div');
  const newPost = document.createElement('p');
  const navPost = document.createElement('nav');
  const ulPost = document.createElement('ul');
  const editePost = document.createElement('a');
  const deletePost = document.createElement('a');

  containerPost.appendChild(newPost);
  containerPost.appendChild(navPost);
  newPost.appendChild(document.createTextNode(post.value));
  navPost.appendChild(ulPost);
  ulPost.appendChild(document.createElement('li')).appendChild(editePost).appendChild(document.createTextNode('Editar'));
  ulPost.appendChild(document.createElement('li')).appendChild(deletePost).appendChild(document.createTextNode('Eliminar'));
  contain.insertBefore(containerPost, contain.childNodes[0]);

  editePost.setAttribute('href',"#");
  deletePost.setAttribute('href',"#");

  // editePost.addEventListener('click', );

  validatePost(post, btn);
  post.value = '';
  btnDisabled(btn);
  post.setAttribute('autofocus', 'autofocus');
}




