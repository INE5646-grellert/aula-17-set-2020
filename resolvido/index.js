const botao = document.querySelector("#login-btn");
//const login = document.querySelector("#login");
const pass = document.querySelector("#pass");

//botao.addEventListener("click", validaLogin);
login.addEventListener("focus", apagaInput);
pass.addEventListener("focus", apagaInput);

function apagaInput(event){
    event.target.value = '';
}

function validaLogin(){
    const loginStr = document.querySelector("#login").value;
    const passStr = document.querySelector("#pass").value;
    let success = true;
    
    if(!Object.keys(USERS).includes(loginStr)){
        alert("Usuário não cadastrado!");
        success = false;
    }
    else{
        if(passStr != USERS[loginStr].pass){
            alert("Senha incorreta!");
            success = false
        }
    }

    if(success){
        showContent();
    }
}

function showContent(){
    const contentDiv = document.querySelector("#content-area");
    const loginDiv = document.querySelector("#login-area");
    loginDiv.innerHTML = `Bem-vindo, <strong>Mateus!</strong>`;
    contentDiv.innerHTML = '';
    for(post of POSTS){
        const postDiv = document.createElement("DIV");
        const postStr = `${post.title}: ${post.content} <br>`;
        postDiv.className = "post";
        postDiv.innerHTML = postStr;
        contentDiv.appendChild(postDiv);
    }
}