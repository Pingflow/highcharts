$(function () {

    $('#container').highcharts({
        accessibility: {
            enabled: true,
            description: 'Most commonly used desktop screen readers from January 2009 to July 2015 as reported in the Webaim Survey.',
            keyboardNavigation: {
                skipNullPoints: true
            }
        },

        chart: {
            type: 'boxplot'
        },
        title: {
            text: 'Daily company fruit consumption 2015'
        },
        xAxis: [{
            description: 'Months of the year',
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }],
        yAxis: {
            title: {
                text: 'Fruits consumed'
            },
            min: 0
        },
        plotOptions: {
            series: {
                keys: ['low', 'median', 'high'],
                whiskerWidth: 5
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}:<br/>Low: <b>{point.low}</b><br/>Avg: <b>{point.median}</b><br/>High: <b>{point.high}</b><br/>'
        },
        series: [{
            name: 'Plums',
            data: [
             [0, 8, 19],
             [1, 11, 23],
             [3, 16, 28],
             [2, 15, 28],
             [1, 15, 27],
             [0, 9, 21],
             [1, 6, 15],
             [2, 5, 12],
             [1, 6, 19],
             [2, 8, 21],
             [2, 9, 22],
             [1, 11, 19]
            ]
        }, {
            name: 'Bananas',
            data: [
             [0, 3, 6],
             [1, 2, 4],
             [0, 2, 5],
             [2, 2, 5],
             [1, 3, 6],
             [0, 1, 3],
             [1, 1, 2],
             [0, 1, 3],
             [1, 1, 3],
             [0, 2, 4],
             [1, 2, 5],
             [1, 3, 5]
            ]
        }, {
            name: 'Apples',
            data: [
             [1, 4, 6],
             [2, 4, 5],
             [1, 3, 6],
             [2, 3, 6],
             [1, 3, 4],
             [0, 2, 4],
             [0, 1, 2],
             [0, 1, 2],
             [0, 1, 2],
             [0, 2, 4],
             [1, 2, 4],
             [1, 3, 4]
            ]
        }]
    });
});
