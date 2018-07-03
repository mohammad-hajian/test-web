$('.navbar-nav li a').on('click', function(event) {

    if (this.hash !== "") {
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000,


            window.location.hash = hash;
        });
    }
});