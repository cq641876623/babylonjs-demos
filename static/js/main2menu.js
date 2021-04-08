$(function () {

    zhexian();
    zhexian1();
    zhexian2();
    zhexian3();


})


var myChart=null;
var myChart0=null;
var myChart1=null;
var myChart2=null;

function zhexian() {
    myChart = echarts.init(document.getElementById('zhexian'),null,{width:"auto",height:"200px",});


    dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{name: '销售数', value: [127, 224, 250, 278, 227, 355]},
                // { name: '下游流速',value: [27, 124, 70, 178, 127, 157] },
                // {name: '平均流速', value: [127, 74, 120, 99, 130, 50]}
            ]
        }
    }
    let dataArr = []
    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,
            itemStyle: {normal: {color: item.name === '销售数' ? '#f0c725' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'}}
        }
        dataArr.push(newArr)
    })
    option = {
        color: ['#f0c725', '#16f892'],
        title: {left: 'center', text: '', textStyle: {color: '#FFFFFF', fontSize: '14',}},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {x: 'center', top: '25', textStyle: {color: '#c1cadf', "fontSize": 14}},
        grid: {
            containLabel: true
        },
        toolbox: {show: true, orient: 'vertical', x: 'right', y: 'center'},
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'}
        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            nameTextStyle: {color: '#c1cadf', align: 'right', lineHeight: 10},
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'},
            splitLine: {show: false}
        }],
        series: dataArr
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
function zhexian1() {

    myChart0 = echarts.init(document.getElementById('zhexian0'),null,{width:"auto",height:"200px",});


    dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{name: '产品数', value: [800, 750, 780, 600, 500, 650]},
                // { name: '下游流速',value: [27, 124, 70, 178, 127, 157] },
                // {name: '平均流速', value: [127, 74, 120, 99, 130, 50]}
            ]
        }
    }
    let dataArr = []
    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,
 
            itemStyle: {normal: {color: item.name === '产品数' ? '#0df116' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'}}
        }
        dataArr.push(newArr)
    })
    option = {
        color: ['#f0c725', '#16f892'],
        title: {left: 'center', text: '', textStyle: {color: '#FFFFFF', fontSize: '14',}},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {x: 'center', top: '25', textStyle: {color: '#c1cadf', "fontSize": 14}},
        grid: {

            containLabel: true
        },
        toolbox: {show: true, orient: 'vertical', x: 'right', y: 'center'},
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'}
        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            nameTextStyle: {color: '#c1cadf', align: 'right', lineHeight: 10},
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'},
            splitLine: {show: false}
        }],
        series: dataArr
    };

    myChart0.setOption(option);
    window.addEventListener("resize", function () {
        myChart0.resize();
    });

}



function zhexian2() {


    myChart1 = echarts.init(document.getElementById('zhexian1'),null,{width:"auto",height:"200px",});

    dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{name: '交货数', value: [500, 400, 600, 550, 450, 355]},
                // { name: '下游流速',value: [27, 124, 70, 178, 127, 157] },
                // {name: '平均流速', value: [127, 74, 120, 99, 130, 50]}
            ]
        }
    }
    let dataArr = []
    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,
            itemStyle: {normal: {color: item.name === '交货数' ? '#da0df1' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'}}
        }
        dataArr.push(newArr)
    })
    option = {
        color: ['#f0c725', '#16f892'],
        title: {left: 'center', text: '', textStyle: {color: '#FFFFFF', fontSize: '14',}},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {x: 'center', top: '25', textStyle: {color: '#c1cadf', "fontSize": 14}},
        grid: {
            containLabel: true
        },
        toolbox: {show: true, orient: 'vertical', x: 'right', y: 'center'},
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'}
        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            nameTextStyle: {color: '#c1cadf', align: 'right', lineHeight: 10},
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'},
            splitLine: {show: false}
        }],
        series: dataArr
    };

    myChart1.setOption(option);
    window.addEventListener("resize", function () {
        myChart1.resize();
    });

}
function zhexian3() {

    myChart2 = echarts.init(document.getElementById('zhexian2'),null,{width:"auto",height:"200px",});

    dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{name: '库存数', value: [1000, 800, 600, 400, 200, 200]},
                // { name: '下游流速',value: [27, 124, 70, 178, 127, 157] },
                // {name: '平均流速', value: [127, 74, 120, 99, 130, 50]}
            ]
        }
    }
    let dataArr = []
    dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
            name: item.name,
            type: 'line',
            smooth: true,
            symbolSize: 8,
            data: item.value,

            itemStyle: {normal: {color: item.name === '库存数' ? '#e20e0e' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'}}
        }
        dataArr.push(newArr)
    })
    option = {
        color: ['#f0c725', '#16f892'],
        title: {left: 'center', text: '', textStyle: {color: '#FFFFFF', fontSize: '14',}},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {x: 'center', top: '25', textStyle: {color: '#c1cadf', "fontSize": 14}},
        grid: {

            containLabel: true
        },
        toolbox: {show: true, orient: 'vertical', x: 'right', y: 'center'},
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'}
        }],
        yAxis: [{
            type: 'value',
            name: '数量',
            nameTextStyle: {color: '#c1cadf', align: 'right', lineHeight: 10},
            axisLine: {lineStyle: {color: 'rgba(240,199,37,0.5)'}},
            axisLabel: {interval: 0, color: '#c1cadf', fontSize: '15'},
            splitLine: {show: false}
        }],
        series: dataArr
    };

    myChart2.setOption(option);
    window.addEventListener("resize", function () {
        myChart2.resize();
    });
}