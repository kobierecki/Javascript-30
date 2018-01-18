
window.addEventListener('keydown', function(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 if(!audtio) return;
 console.log(audio);
 audio.currentTime = 0;
 audio.play();
});