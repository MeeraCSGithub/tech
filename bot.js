const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());
txtInput.addEventListener("keyup", (event) => {
    if (event.keycode === 13) {
        renderUserMessage();
    }
});


const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput,"user");
    txtInput.value = "";
setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
}, 600);
};

const renderChatbotResponse = (userInput) => {
    const res=getChatbotResponse(userInput);
    renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
    let classname = "user-message";
    if(type !== "user") {
        classname="chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(classname);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
    return responseObj[userInput ] == undefined ? "Please try something else" : responseObj[userInput];
};

const setScrollPosition = () => {
    if (chatBody.scrollHeight > 0){
        chatBody,scrollTop = chatBody.scrollHeight;
    }
}
