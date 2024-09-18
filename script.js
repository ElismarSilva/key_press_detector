document.addEventListener("keydown", (event) => {
    let keyCode = event.keyCode;  // Obtém o código da tecla pressionada
    let key = event.key;  // Obtém o nome da tecla pressionada
    let element = document.getElementById("k");  // Seleciona o elemento HTML com o ID "k"

    // Verifica se a tecla pressionada foi a barra de espaço (código 32)
    if (keyCode === 32) {
        // Atualiza o conteúdo do elemento com a mensagem e a tecla "espaço" estilizada
        element.innerHTML = `Key code <span style="color: red; border: 2px solid red; padding: 4px; margin: 0 5px;">space</span> = ${keyCode} `;
    } else {
        // Atualiza o conteúdo do elemento com a mensagem e a tecla pressionada estilizada
        element.innerHTML = `Key code <span style="color: red; border: 4px solid red; padding: 4px; margin: 0 5px;">${key}</span> = ${keyCode} `;

        console.log(`Key code ${key} = ${keyCode}`);
    }
});
