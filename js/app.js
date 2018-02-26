setTimeout(function() {
    document.body.className = 'hovered';
}, 500);

var liveByTheCode = document.getElementById('liveByTheCode');
liveByTheCode.addEventListener('mouseover', function() {
    liveByTheCode.innerText = liveByTheCode.innerText === 'LIVE BY THE CODE' ? 'DIE BY THE CODE' : 'LIVE BY THE CODE';
})