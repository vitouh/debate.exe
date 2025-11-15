const chatarea = document.getElementById('chatarea');
const userinput = document.getElementById('userinput');
const sendbtn = document.getElementById('sendbtn');
const newdebatebtn = document.getElementById('newdebatebtn');
const returnmenubtn = document.getElementById('returnmenubtn');

async function getBotReply(userText) {
    const response = await fetch('http://localhost:3000/debate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ argument: userText })
    });
    const data = await response.json();
    return data.reply.toLowerCase();
}

// send button
sendbtn.addEventListener('click', async () => {
    const text = userinput.value.trim();
    if (!text) return;

    const usermsg = document.createElement('p');
    usermsg.innerHTML = `<strong>you:</strong> ${text}`;
    chatarea.appendChild(usermsg);

    const botReply = await getBotReply(text);
    const botmsg = document.createElement('p');
    botmsg.innerHTML = `<strong>bot:</strong> ${botReply}`;
    chatarea.appendChild(botmsg);

    userinput.value = '';
    chatarea.scrollTop = chatarea.scrollHeight;
});

// enter key
userinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendbtn.click();
});

// new debate
newdebatebtn.addEventListener('click', () => {
    chatarea.innerHTML = `<p><strong>bot:</strong> welcome to the ultimate debate. present your argument.</p>`;
});

// return to menu
returnmenubtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
