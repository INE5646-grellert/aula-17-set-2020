
const loginInput = document.getElementById("login");
//const loginInput = document.querySelector("#login");
loginInput.addEventListener("click", apagaValor);

// apaga o conteúdo das caixas de input (login, senha)
function apagaValor(event){
    const caixaTexto = event.target;
    //---- FIXME imeplementar método ------

}

function validaLogin(){
    let success = false;

    //---- FIXME imeplementar método ------


    //-------------------------------------

    if(success){
        alert("Sucesso! Bem-vindo");
        showPosts();
    }
    else{
        alert("login/senha inválidos!");
    }
}

// esse método deve adicionar os posts na div #content-area (use DOM api)
function showPosts(){
    
    const contentDiv = document.querySelector("#content-area");
    contentDiv.innerHTML = '';

    //---- FIXME imeplementar método ------



    //-------------------------------------
}

// DOM (exemplo):
// ... content-area -->  post --> post-title
//                            --> post-author
//                            --> post-content
//               