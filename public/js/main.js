function MessageBox( message ){
    return `
        <div class="MessageBox" >
            <p>${message}</p>
        </div>
    `;
}

function PopulateMessageContainer( messages ){
    let messageContainer = document.getElementById("MessageContainer");
    let containerHTML = ``;

    for ( let i = 0; i < messages.length; i++ ){
        containerHTML += MessageBox( messages[i] );
    }

    messageContainer.innerHTML = containerHTML;
}

function ParseMessages(){
    let messages = JSON.parse( document.getElementById("data-container").getAttribute("dataAttr") );
    return messages;
}

function SendMessage(){
    let message = document.getElementById("MessageInput").value;

    window.location.replace(`/write_message/${message}`)
}

let messages = ParseMessages();

PopulateMessageContainer( messages );