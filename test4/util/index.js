$(function () {
    // map();
    leidatu();
    wuran();
    huaxing();
    zhexian();

    function leida1() {
        var myChart = echarts.init(document.getElementById('map'));
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

function map() {
    var myChart = echarts.init(document.getElementById('map'));
    let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="
    let data = [{name: "北京", value: [116.24, 39.55, 100]}, {name: "深圳", value: [114.271522, 22.753644]}, {
        name: "重庆",
        value: [106.54, 29.59]
    }, {name: "浙江", value: [120.19, 30.26]}, {name: "上海", value: [121.4648, 31.2891]},]
    let LableData = [{
        name: "北京",
        coords: [[116.24, 39.55, 100], [120.24, 46.55, 100]],
        value: [1021, 120]
    }, {name: "深圳", coords: [[114.271522, 22.753644], [118.24, 18.55, 100]], value: [1021, 120]}, {
        name: "重庆",
        coords: [[106.54, 29.59], [104.24, 35.55]],
        value: [1021, 120]
    }, {name: "浙江", coords: [[120.19, 30.26], [125.24, 27.55, 100]], value: [1021, 120]}, {
        name: "上海",
        coords: [[121.4648, 31.2891], [122.4648, 32.2891]],
        value: [1201, 60]
    },];
    option = {
        geo: {
            map: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"],
            layoutSize: '100%',
            itemStyle: {
                normal: {shadowColor: '#276fce', shadowOffsetX: 0, shadowOffsetY: 15, opacity: 0.5,},
                emphasis: {areaColor: '#276fce',}
            },
            regions: [{
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)',
                    normal: {opacity: 0, label: {show: false, color: "#009cc9",}},
                },
                label: {show: false, color: '#FFFFFF', fontSize: 12,},
            }],
        },
        series: [{
            type: 'map',
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"],
            layoutSize: '100%',
            zoom: 1,
            scaleLimit: {min: 1, max: 2},
            itemStyle: {
                normal: {areaColor: '#0c274b', borderColor: '#1cccff', borderWidth: 1.5},
                emphasis: {areaColor: '#02102b', label: {color: "#fff"}}
            },
        }, {
            name: '首都',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [{name: '首都', value: [116.24, 41.55, 100],},],
            symbol: iconRQ,
            symbolSize: 20,
            label: {normal: {show: false,}, emphasis: {show: false}},
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {period: 3, scale: 5, brushType: 'fill'},
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#b3e2f2',
                    fontWeight: "bold",
                    fontSize: 16
                }
            },
            data: data,
            itemStyle: {
                normal: {show: true, color: '#ff8003', shadowBlur: 20, shadowColor: '#fff'},
                emphasis: {areaColor: '#f00'}
            },
        }, {
            type: 'lines',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: [5, 5],
            color: '#ff8003',
            opacity: 1,
            label: {
                show: true,
                padding: [10, 20],
                color: '#fff',
                backgroundColor: "#1a3961",
                borderColor: '#aee9fb',
                borderWidth: 1,
                borderRadius: 6,
                formatter(params) {
                    let arr = [params.name, "废水污染：" + params.value[1] + "家", "废气污染：" + params.value[0] + "家"];
                    return arr.join("\n")
                },
                textStyle: {align: 'left', lineHeight: 20,}
            },
            lineStyle: {type: 'solid', color: '#fff', width: 0.5, opacity: 1,},
            data: LableData,
        },]
    };
    myChart.on('click', function (params) {
        console.log(params);
    });
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function leidatu() {
    var myChart = echarts.init(document.getElementById('leida'));
    option = {
        color: ['#00c2ff', '#f9cf67', '#e92b77'],
        legend: {
            show: true,
            bottom: 0,
            center: 0,
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 21,
            textStyle: {fontSize: 12, color: '#ade3ff'},
            data: ['2016', '2017', '2018'],
        },
        radar: [{
            indicator:
                [{text: '当前产能比', max: 100},
                    {text: '平均产能比', max: 100},
                    {text: '能耗比', max: 100},
                    {text: '良品率',max: 100},
                    {text: '转换效率', max: 100}],
            textStyle: {color: 'red'},
            center: ['50%', '50%'],
            radius: 60,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal',
            name: {formatter: '{value}', textStyle: {fontSize: 12, color: '#5b81cb'}},
            splitArea: {show: true, areaStyle: {color: ['#141c42', '#141c42'],}},
            axisLine: {lineStyle: {color: '#153269'}},
            splitLine: {lineStyle: {color: '#113865', width: 1,}}
        },],
        series: [{
            name: '雷达图',
            type: 'radar',
            itemStyle: {emphasis: {lineStyle: {width: 4}}},
            data: [{
                name: '2016',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{offset: 0, color: '#00c2ff'}, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {offset: 1, color: '#00c2ff'}],
                            globalCoord: false
                        }, opacity: 1
                    }
                },
                symbolSize: 2.5,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        distance: 2,
                        color: '#6692e2',
                        fontSize: 14,
                        formatter: function (params) {
                            return params.value;
                        }
                    }
                },
                itemStyle: {normal: {borderColor: '#00c2ff', borderWidth: 2.5}},
            }, {
                name: '2017',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {normal: {borderColor: '#f9cf67', borderWidth: 2.5,}},
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{offset: 0, color: '#f9cf67'}, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {offset: 1, color: '#f9cf67'}],
                            globalCoord: false
                        }, opacity: 1
                    }
                },
            }, {
                name: '2018',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {normal: {borderColor: '#e92b77', borderWidth: 2.5,}},
                areaStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{offset: 0, color: '#e92b77'}, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {offset: 1, color: '#e92b77'}],
                            globalCoord: false
                        }, opacity: 1
                    }
                }
            }]
        },]
    };
    myChart.setOption(option);
}

function wuran() {
    var myChart = echarts.init(document.getElementById('wuran'));
    var salvProName = ["当前产量", "平均产量", "能耗量", "良品量", "淘汰量"];
    var salvProValue = [1756, 3520, 3000, 2000, 1500];
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
            barWidth: 10,
            data: salvProValue
        }, {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {normal: {color: 'rgba(24,31,68,1)', barBorderRadius: 30,}},
        },]
    };
    myChart.setOption(option);
}

function huaxing() {
    var myChart = echarts.init(document.getElementById('huaxing'));
    var dataStyle = {normal: {label: {show: false}, labelLine: {show: false}, shadowBlur: 0, shadowColor: '#203665'}};
    option = {
        series: [{
            name: '第一个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['15%', '50%'],
            data: [{
                value: 25,
                label: {
                    normal: {
                        rich: {
                            a: {color: '#3a7ad5', align: 'center', fontSize: 14, fontWeight: "bold"},
                            b: {color: '#fff', align: 'center', fontSize: 12}
                        },
                        formatter: function (params) {
                            return "{b|良品率}\n\n" + "{a|" + params.value + "%}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {fontSize: '12', fontWeight: 'normal', color: '#fff'}
                    }
                },
                itemStyle: {normal: {color: '#2c6cc4', shadowColor: '#2c6cc4', shadowBlur: 0}}
            }, {value: 75, name: 'invisible', itemStyle: {normal: {color: '#24375c'}, emphasis: {color: '#24375c'}}}]
        }, {
            name: '第二个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                value: 50,
                label: {
                    normal: {
                        rich: {
                            a: {color: '#d03e93', align: 'center', fontSize: 14, fontWeight: "bold"},
                            b: {color: '#fff', align: 'center', fontSize: 12}
                        },
                        formatter: function (params) {
                            return "{b|转化效率}\n\n" + "{a|" + params.value + "%}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {fontSize: '12', fontWeight: 'normal', color: '#fff'}
                    }
                },
                itemStyle: {normal: {color: '#ef45ac', shadowColor: '#ef45ac', shadowBlur: 0}}
            }, {value: 50, name: 'invisible', itemStyle: {normal: {color: '#412a4e'}, emphasis: {color: '#412a4e'}}}]
        }, {
            name: '第三个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['85%', '50%'],
            data: [{
                value: 75,
                label: {
                    normal: {
                        rich: {
                            a: {color: '#603dd0', align: 'center', fontSize: 14, fontWeight: "bold"},
                            b: {color: '#fff', align: 'center', fontSize: 12}
                        },
                        formatter: function (params) {
                            return "{b|当前产能}\n\n" + "{a|" + params.value + "%}" + "\n\n{b|增长2%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {fontSize: '12', fontWeight: 'normal', color: '#fff'}
                    }
                },
                itemStyle: {normal: {color: '#613fd1', shadowColor: '#613fd1', shadowBlur: 0}}
            }, {value: 25, name: 'invisible', itemStyle: {normal: {color: '#453284'}, emphasis: {color: '#453284'}}}]
        }]
    }
    myChart.setOption(option);
}

function zhexian() {
    var myChart = echarts.init(document.getElementById('zhexian'));
    dataText = [{
        name: '平均产量',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [1270, 2240, 2000, 2780, 2270, 2370],
        barWidth: '30%',
        itemStyle: {normal: {color: '#f0c725'}}
    }, {
        name: '良品产量',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [1270, 1240, 1700, 1780, 1270, 1570],
        barWidth: '30%',
        itemStyle: {normal: {color: '#16f892'}}
    }, {
        name: '有效产量',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [1270, 740, 1200, 990, 1300, 2355],
        barWidth: '30%',
        itemStyle: {normal: {color: '#0BE3FF'}}
    }]
    dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
            value: [{name: '平均产量', value: [1270, 2240, 2000, 2780, 2270, 2370]}, {
                name: '良品产量', value: [1270, 1240, 1700, 1780, 1270, 1570]},
                {name: '有效产量', value: [1270, 740, 1200, 990, 1300, 2355]}]
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
            itemStyle: {normal: {color: item.name === '平均产量' ? '#f0c725' : item.name === '良品产量' ? '#0BE3FF' : '#16f892'}}
        }
        dataArr.push(newArr)
    })
    option = {
        color: ['#f0c725', '#16f892'],
        title: {left: 'center', text: '', textStyle: {color: '#FFFFFF', fontSize: '14',}},
        tooltip: {trigger: 'axis', axisPointer: {type: 'shadow'}},
        legend: {x: 'center', top: '25', textStyle: {color: '#c1cadf', "fontSize": 14}},
        grid: {left: '6%', right: '4%', top: '25%', bottom: '3%', containLabel: true},
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
            name: '(w)',
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