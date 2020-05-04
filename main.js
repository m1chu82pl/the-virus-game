document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.anim-bg'); // pobieramy wszystkie elementy .anime-bg
  
  document.addEventListener('mousemove', function(event) { // nasłuchiw na ruch myszki
    console.log(event);
    const { clientX, clientY } = event; // wywołanie wartości "clientX i Y" z eventu
    const centerX = window.innerWidth / 2; // odczytanie środka strony
    const centerY = window.innerHeight / 2;
    
    elements.forEach(element => { // przypisanie  każdego pobranego elementu "ratioX i Y" do zmiennej
      console.log(element);
      const ratioX = -element.getAttribute('ratioX'); 
      const ratioY = -element.getAttribute('ratioY');

      const moveX = clientX - centerX;  // przypisanie ruchu myszki "clientX" i "clientY" do zmiennej
      const moveY = clientY - centerY;  // oraz przypis im 0 gdy kursor jest na środku VP

      element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`; //nadanie stylów liniowych 
    })
  })

  document.addEventListener('touchmove', function(event) {
    console.log(event);
    let touchX = event.targetTouches[0].clientX;
    let touchY = event.targetTouches[0].clientY;
    console.log(touchX);
    console.log(touchY);
    

    const centerX = window.innerWidth / 2; 
    const centerY = window.innerHeight / 2;
    
    elements.forEach(element => {
      const ratioX = -element.getAttribute('ratioX'); 
      const ratioY = -element.getAttribute('ratioY');

      const moveX = touchX - centerX;  
      const moveY = touchY - centerY;  

      element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`;
    })
    event.preventDefault();
  })

})
