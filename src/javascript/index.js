/*-------------soft-skill-chart-------------*/
var xValues = ["Time management", "Communication", "Problem-solving", "Teamwork", "Leadership","Creativity"];
var yValues = [85, 86, 80, 91, 90, 88];
var barColors = ["#de5c8e", "#de6a97","#e077a0","#e084a8","#e096b3","#e0a8be"];

new Chart("soft-skill-chart", {
    type: "horizontalBar",
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "Soft Skills"
        },
        scales: {
        xAxes: [{ticks: {min: 10, max:100}}]
        }
    }
});


/*---reveal---*/
ScrollReveal().reveal('#left-zone',{
    delay: '300',
    distance: '150px',
    origin: 'left',
    reset: true
})

ScrollReveal().reveal('#right-zone',{
    delay: '300',
    distance: '30px',
    origin: 'right',
    reset: true
})

ScrollReveal().reveal('#bottom-zone',{
    delay: '300',
    distance: '150px',
    origin: 'bottom',
    reset: true
})

ScrollReveal().reveal('#box1-zone',{
    delay: '300',
    reset: true
})
ScrollReveal().reveal('#box2-zone',{
    delay: '500',
    reset: true
})
ScrollReveal().reveal('#box3-zone',{
    delay: '700',
    reset: true
})
ScrollReveal().reveal('#box4-zone',{
    delay: '900',
    reset: true
})
ScrollReveal().reveal('#box5-zone',{
    delay: '1100',
    reset: true
})
ScrollReveal().reveal('#box6-zone',{
    delay: '1400',
    reset: true
})