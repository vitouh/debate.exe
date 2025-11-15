const chatarea = document.getElementById('chatarea');
const userinput = document.getElementById('userinput');
const sendbtn = document.getElementById('sendbtn');
const newdebatebtn = document.getElementById('newdebatebtn');
const returnmenubtn = document.getElementById('returnmenubtn');

// simulated ai reply
function botreply(usertext) {
    let response = `hmm, interesting point about "${usertext}". here's my counter: ...`;
    return response;
}

// send button click
sendbtn.addEventListener('click', () => {
    const text = userinput.value.trim();
    if (!text) return;

    const usermsg = document.createElement('p');
    usermsg.innerHTML = `<strong>you:</strong> ${text}`;
    chatarea.appendChild(usermsg);

    const botmsg = document.createElement('p');
    botmsg.innerHTML = `<strong>bot:</strong> ${botreply(text)}`;
    chatarea.appendChild(botmsg);

    userinput.value = '';
    chatarea.scrollTop = chatarea.scrollHeight;
});

// enter key
userinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendbtn.click();
});

// new debate button
newdebatebtn.addEventListener('click', () => {
    chatarea.innerHTML = `<p><strong>bot:</strong> welcome to the ultimate debate. present your argument.</p>`;
});

// return to menu
returnmenubtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
