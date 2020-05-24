


window.addEventListener('load', () => {




    // UWU nonsense
    var path = anime.path('svg#uwu_path path');

    anime({
        targets: '.advancedJavascript.pathFollower:nth-child(1)',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path("angle"),
        easing: 'linear',
        duration: 10000,
        loop: true,
    });
    anime({
        targets: '.advancedJavascript.pathFollower:nth-child(1) h1',
        keyframes: [
            { scale: 2, duration: 0 },
            { scale: () => { return anime.random(2, 3); } },
            { scale: 2 },
        ],
        easing: 'linear',
        duration: 10000,
        loop: true,
    });

    setTimeout(() => {
        anime({
            targets: '.advancedJavascript.pathFollower:nth-child(2)',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path("angle"),
            easing: 'linear',
            duration: 10000,
            loop: true,
        });
        anime({
            targets: '.advancedJavascript.pathFollower:nth-child(2) h1',
            keyframes: [
                { scale: 2, duration: 0 },
                { scale: () => { return anime.random(2, 3); } },
                { scale: 2 },
            ],
            easing: 'linear',
            duration: 10000,
            loop: true,
        });
    }, 250);

    setTimeout(() => {
        anime({
            targets: '.advancedJavascript.pathFollower:nth-child(3)',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path("angle"),
            easing: 'linear',
            duration: 10000,
            loop: true,
        });
        anime({
            targets: '.advancedJavascript.pathFollower:nth-child(3) h1',
            keyframes: [
                { scale: 2, duration: 0 },
                { scale: () => { return anime.random(2, 3); } },
                { scale: 2 },
            ],
            easing: 'linear',
            duration: 10000,
            loop: true,
        });
    }, 500);
    

});
