const chatarea = document.getElementById('chatarea');
const userinput = document.getElementById('userinput');
const sendbtn = document.getElementById('sendbtn');
const newdebatebtn = document.getElementById('newdebatebtn');
const returnmenubtn = document.getElementById('returnmenubtn');

// very basic “AI” logic
function botreply(text) {
    text = text.toLowerCase();

    const responses = [
        "i see your point, but consider the opposite perspective.",
        "interesting argument, yet have you thought about the consequences?",
        "that’s valid, however it might not work in all situations.",
        "good point, but it could be flawed if examined closely.",
        "i agree partially, yet there’s another side to think about."
    ];

    // random response
    const reply = responses[Math.floor(Math.random() * responses.length)];

    // sometimes include part of user text
    return `${reply} ("${text}")`;
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

// new debate
newdebatebtn.addEventListener('click', () => {
    chatarea.innerHTML = `<p><strong>bot:</strong> welcome to the ultimate debate. present your argument.</p>`;
});

// return to menu
returnmenubtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
