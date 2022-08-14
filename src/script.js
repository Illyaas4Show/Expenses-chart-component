// Bring in the canvas
let ctx = document.querySelector('#chart').getContext('2d');

// Settings
let config = {
    type: 'bar',

    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            
            
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
            ],
            hoverBackgroundColor: [
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(186, 34%, 70%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
            ],

            
            borderWidth: 1,
            borderRadius: 9,
            borderSkipped: false
        }],
    },

    // Options
    options: {

        layout: {
            padding: {
                top: 25,
                bottom: 16
            },

           
        },

        legend: {
            display: false,
        },

        scales: {

            xAxes: [{
                gridLines: false,
                // categoryPercentage: .8,
                // barPercentage: .8,
                ticks: {
                    fontColor: 'hsl(28, 10%, 53%)',
                    fontSize: 13,
                }
            }],

            yAxes: [{
                gridLines: false,
                beginAtZero: true,
                ticks: {
                    display: false,
                    beginAtZero: true,
                },
            }]
        }
    }
};

// Add the chart
let chart = new Chart(ctx, config);