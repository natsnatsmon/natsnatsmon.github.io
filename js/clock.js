const clock = document.getElementById("clock");

function getTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, 0);
    const minute = String(now.getMinutes()).padStart(2, 0);
    const second = String(now.getSeconds()).padStart(2, 0);
    clock.innerText = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);