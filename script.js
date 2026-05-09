const chatBox = document.getElementById("chatBox");

function addMessage(text, className){

    const message = document.createElement("div");

    message.classList.add(className);

    message.innerHTML = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function calculate(expression){

    try{

        let result = eval(expression);

        return `
        ✅ Resultado: <b>${result}</b>
        `;

    } catch(error){

        return `
        ❌ Não consegui resolver essa conta.
        `;
    }
}

function sendMessage(){

    const input = document.getElementById("userInput");

    const text = input.value;

    if(text.trim() === ""){
        return;
    }

    addMessage(text, "user-message");

    input.value = "";

    setTimeout(() => {

        const response = calculate(text);

        addMessage(response, "bot-message");

    }, 600);
}

document
.getElementById("userInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();
    }
});