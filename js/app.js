setTimeout(function() {
    document.body.className = 'initialised';
}, 500);

let liveByTheCode = document.getElementById('liveByTheCode');
liveByTheCode.addEventListener('mouseover', function() {
    liveByTheCode.innerText = liveByTheCode.innerText === 'LIVE BY THE CODE' ? 'DIE BY THE CODE' : 'LIVE BY THE CODE';
})

// this function falls behind if it runs a long time, but since the content on the site is not alot to consume I believe it's fine
function timeout() {

    if(window.innerWidth > 1024) {

        let container = document.getElementById('workExamples');
        let liArray = container.querySelectorAll('li');

        container.style.opacity = 0;

        setTimeout(function() {
            liArray[0].parentNode.appendChild(liArray[0]);
            container.style.opacity = 1;
        }, 400);
    }
    setTimeout(timeout, 8000);
}

setTimeout(timeout, 8000);