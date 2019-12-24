const progress = document.getElementById('data')


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

//Так как мы должны выводить значение, когда нам приходит число с бэкенда, то можно обойтись обработчиком onmessage, но в любом случае лучше будет обработать ошибку, которая может возникнуть даже не по вашей вине. Хорошо, если мы обработаем различные ошибки. Код с этой логикой выглядит так:


ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
}



ES.onmessage = message => {
    let data = JSON.parse(message.data);
    console.log(data);    
    graf(data);
    stat(data);
}



// строим график echarts
function graf(data) {

        let myChart = echarts.init(document.getElementById('graf'));
        
        let option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['Votes']
            },
            xAxis: {
                data: ["cats","parrots","dogs"]
            },
            yAxis: {},
            series: [{
                
                type: 'bar',
                data: [data.cats, data.parrots, data.dogs]
            }]
        };
        myChart.setOption(option);
}

// рассчет статистики
function stat(data) {
    let allVotes = (data.cats + data.parrots + data.dogs);
    let catsP = Math.round((data.cats / allVotes) * 100);
    let dogsP = Math.round((data.dogs / allVotes) * 100);
    let parrotsP = Math.round((data.parrots / allVotes) * 100);

    $("#allVotes").text('All Votes:   '+allVotes);
    $("#catsP").text('Cats Votes in percents:   ' +catsP + ' % ');
    $("#dogsP").text('Dogs Votes in percents:   ' +dogsP + ' % ');
    $("#parrotsP").text('Parrots Votes in percents:   ' +parrotsP + ' % ');

}
