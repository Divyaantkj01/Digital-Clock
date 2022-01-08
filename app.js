const clock = document.querySelector('.clock');

const time =  () => {

    const present = new Date();
    
    const h = present.getHours();
    const m = (present.getMinutes() < 10? '0' : '') + present.getMinutes();
    const s = (present.getSeconds() < 10? '0' : '') + present.getSeconds();


    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;

}

setInterval(time,1000);