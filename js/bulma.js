// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        burger.classList.toggle('is-active');
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 80
    });
    
    //const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    //observer.observe();
    
    // Ugly fix attempt for garbage image on iPhone
    // https://stackoverflow.com/questions/24154666/background-size-cover-not-working-on-ios
    var isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;
    
    if (isIphone) {
        //alert("Quel joli iPhone :)")
        var items = document.getElementsByClassName("image-all");
        for (var i=0; i < items.length; i++) {
            items[i].classList.remove('parallax');
        }
    }else{
        console.log("Thank you, no need for iPhone tricks today :)");
        var items = document.getElementsByClassName("image-all");
        for (var i=0; i < items.length; i++) {
            items[i].classList.add('parallax');
        }
    }
    // /Ugly fix attempt for garbage image on iPhone
})();
