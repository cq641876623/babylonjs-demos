$(function () {

    zhexian();
    zhexian1();
    zhexian2();
    zhexian3();

    wuran();
    wuran1();


    o1();
    o2();
    o3();
    o4();
    o5();

    j0();
    j1();
    j2();
    j3();
    j4();
    j5();


})
var a=100;
var a1=100;
var a2=100;
var a3=100;
var a4=100;
var a5=100;
var a6=100;
var a7=100;
var a8=100;
var a9=100;
var a10=100;
var a11=100;

var m1=2000;
var m2=1800;

setInterval("o0()",2000);
setInterval("o1()",2000);
setInterval("o2()",2000);
setInterval("o3()",2000);
setInterval("o4()",2000);
setInterval("o5()",2000);

setInterval("j0()",2000);
setInterval("j1()",2000);
setInterval("j2()",2000);
setInterval("j3()",2000);
setInterval("j4()",2000);
setInterval("j5()",2000);

setInterval("wuran()",2000);
setInterval("wuran1()",2000);

var myChart=null;
var myChart0=null;
var myChart1=null;
var myChart2=null;


function zhexian() {
    myChart = echarts.init(document.getElementById('zhexian'),null,{width:"auto",height:"250px",});


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
            barWidth: '30%',
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
            left: '6%',
            right: '4%',
            top: '25%',
            bottom: '3%',
            height: "26%",
            width:"80%",
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

    myChart0 = echarts.init(document.getElementById('zhexian0'));


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
            barWidth: '30%',
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
            left: '6%',
            right: '4%',
            top: '25%',
            bottom: '3%',
            height: "26%",
            width:"80%",
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


    myChart1 = echarts.init(document.getElementById('zhexian1'));

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
            barWidth: '30%',
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
            left: '6%',
            right: '4%',
            top: '25%',
            bottom: '3%',
            height: "26%",
            width:"80%",
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

    myChart2 = echarts.init(document.getElementById('zhexian2'));

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
            barWidth: '30%',
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
            left: '6%',
            right: '4%',
            top: '25%',
            bottom: '3%',
            height: "26%",
            width:"80%",
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

function o0() {
    var myChart = echarts.init(document.getElementById('o0'));
    var salvProName = ["欧洲"];
    a+= Math.ceil(Math.random()*20);
    var salvProValue = [a];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function o1() {
    var myChart = echarts.init(document.getElementById('o1'));
    var salvProName = ["亚洲"];
    a1+= Math.ceil(Math.random()*20);
    var salvProValue = [a1];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function o2() {
    var myChart = echarts.init(document.getElementById('o2'));
    var salvProName = ["北美洲"];
    a2+= Math.ceil(Math.random()*20);
    var salvProValue = [a2];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function o3() {
    var myChart = echarts.init(document.getElementById('o3'));
    var salvProName = ["南美洲"];
    a3+= Math.ceil(Math.random()*20);
    var salvProValue = [a3];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function o4() {
    var myChart = echarts.init(document.getElementById('o4'));
    var salvProName = ["非洲"];
    a4+= Math.ceil(Math.random()*20);
    var salvProValue = [a4];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function o5() {
    var myChart = echarts.init(document.getElementById('o5'));
    var salvProName = ["中国"];
    a5+= Math.ceil(Math.random()*20);
    var salvProValue = [a5];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(2, 168, 181,1)'
                    }, {offset: 1, color: 'rgb(49, 206, 119,1)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}

function j0() {
    var myChart = echarts.init(document.getElementById('j0'));
    var salvProName = ["欧洲"];
    a6+= Math.ceil(Math.random()*20);
    var salvProValue = [a6];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function j1() {
    var myChart = echarts.init(document.getElementById('j1'));
    var salvProName = ["亚洲"];
    a7+= Math.ceil(Math.random()*20);
    var salvProValue = [a7];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function j2() {
    var myChart = echarts.init(document.getElementById('j2'));
    var salvProName = ["北美洲"];
    a8+= Math.ceil(Math.random()*20);
    var salvProValue = [a8];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function j3() {
    var myChart = echarts.init(document.getElementById('j3'));
    var salvProName = ["南美洲"];
    a9+= Math.ceil(Math.random()*20);
    var salvProValue = [a9];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function j4() {
    var myChart = echarts.init(document.getElementById('j4'));
    var salvProName = ["非洲"];
    a10+= Math.ceil(Math.random()*20);
    var salvProValue = [a10];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function j5() {
    var myChart = echarts.init(document.getElementById('j5'));
    var salvProName = ["中国"];
    a11+= Math.ceil(Math.random()*20);
    var salvProValue = [a11];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#0c0c0c', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(251, 136, 0,1)'
                    }, {offset: 1, color: 'rgb(20,215,14)'}]),
                },
            },
            barWidth: 15,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}


function wuran() {
    var myChart = echarts.init(document.getElementById('wuran'));
    var salvProName = [""];
    m1+= Math.ceil(Math.random()*100);
    var salvProValue = [m1];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#ffffff', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {offset: 1, color: 'rgb(46,200,207,1)'}]),
                },
            },
            barWidth: 12,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 12,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}
function wuran1() {
    var myChart = echarts.init(document.getElementById('wuran1'));
    var salvProName = [""];
    m2+= Math.ceil(Math.random()*100);
    var salvProValue = [m2];
    var salvProMax = [];
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }
    option = {
        grid: {left: '2%', right: '2%', bottom: '-6%', top: '8%', containLabel: true},
        tooltip: {
            trigger: 'axis', axisPointer: {type: 'none'}, formatter: function (params) {
                return params[0].name + ' : ' + params[0].value
            }
        },
        xAxis: {show: false, type: 'value'},
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {show: true, textStyle: {color: '#fff'},},
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {textStyle: {color: '#ffffff', fontSize: '12'},},
            data: salvProValue
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {offset: 1, color: 'rgb(46,200,207,1)'}]),
                },
            },
            barWidth: 12,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 12,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}

function oc1(){
    var id=document.getElementById("set-1");
    id.style.display="";
}
function oc1v(){
    var id=document.getElementById("set-1");
    id.style.display="none";
}
function oc2(){
    var id=document.getElementById("set-2");
    id.style.display="";
}
function oc2v(){
    var id=document.getElementById("set-2");
    id.style.display="none";
}
function oc3(){
    var id=document.getElementById("set-3");
    id.style.display="";
}
function oc3v(){
    var id=document.getElementById("set-3");
    id.style.display="none";
}
function oc4(){
    var id=document.getElementById("set-4");
    id.style.display="";
}
function oc4v(){
    var id=document.getElementById("set-4");
    id.style.display="none";
}
function oc5(){
    var id=document.getElementById("set-5");
    id.style.display="";
}
function oc5v(){
    var id=document.getElementById("set-5");
    id.style.display="none";
}
function oc6(){
    var id=document.getElementById("set-6");
    id.style.display="";
}
function oc6v(){
    var id=document.getElementById("set-6");
    id.style.display="none";
}

function oc7(){
    var id=document.getElementById("set-7");
    id.style.display="";
}
function oc7v(){
    var id=document.getElementById("set-7");
    id.style.display="none";
}
function oc8(){
    var id=document.getElementById("set-8");
    id.style.display="";
}
function oc8v(){
    var id=document.getElementById("set-8");
    id.style.display="none";
}
function oc9(){
    var id=document.getElementById("set-9");
    id.style.display="";
}
function oc9v(){
    var id=document.getElementById("set-9");
    id.style.display="none";
}
function oc10(){
    var id=document.getElementById("set-10");
    id.style.display="";
}
function oc10v(){
    var id=document.getElementById("set-10");
    id.style.display="none";
}
function oc11(){
    var id=document.getElementById("set-11");
    id.style.display="";
}
function oc11v(){
    var id=document.getElementById("set-11");
    id.style.display="none";
}
function oc12(){
    var id=document.getElementById("set-12");
    id.style.display="";
}
function oc12v(){
    var id=document.getElementById("set-12");
    id.style.display="none";
}