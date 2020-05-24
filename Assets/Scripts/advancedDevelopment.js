


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
    

    // Charty boy
    var chartCanvasContext = document.getElementById('ChartJS').getContext("2d");
    var myChart = new Chart(chartCanvasContext, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    
});
