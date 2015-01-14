$(document).ready(function() {
    Chart = function() {
        _rthis = this;
    };
    Chart.prototype = {
        _init: function() {
            _rthis._op();
            _rthis._showchart();
        },
        _op: function() {

        },
        _showchart: function() {
            _rthis._setChart_1();
            _rthis._setChart_2();
            _rthis._setChart_3();
            _rthis._setChart_4();
            _rthis._setChart_5();
        },
        _setChart_1: function() {
            var chart_1 = echarts.init(document.getElementById('chart_1'));
            var option = {
                title: {
                    text: '案例类别分布',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['数量']
                },


                xAxis: [{
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],
                yAxis: [{
                    type: 'category',
                    data: ['触电停电', '电网建设', '供电服务', '工资福利', '电磁环境', '电价电表', '人事劳务', '奢侈腐败', '其他']
                }],
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: [42, 20, 21, 9, 4, 10, 13, 14, 8]
                }]
            };
            chart_1.setOption(option);
        },
        _setChart_2: function() {
            var chart_2 = echarts.init(document.getElementById('chart_2'));
            var option = {
                title: {
                    text: '案例时间走势',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['录入风险', '发生案例']
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '录入风险',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12],
                    markPoint: {
                        data: [{
                            type: 'max',
                            name: '最大值'
                        }, {
                            type: 'min',
                            name: '最小值'
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }, {
                    name: '发生案例',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [{
                            name: '周最低',
                            value: -2,
                            xAxis: 1,
                            yAxis: -1.5
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            chart_2.setOption(option);
        },
        _setChart_3: function() {
            var chart_3 = echarts.init(document.getElementById('chart_3'));
            var option = {
                title: {
                    text: '来源层级分布',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['录入风险', '发生案例']
                },
                xAxis: [{
                    type: 'category',
                    data: ['市公司', '工区', '区县公司', '供电所', '一线班组']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '录入风险',
                    type: 'bar',
                    data: [0, 0, 0, 0, 0],
                    markPoint: {
                        data: [{
                            type: 'max',
                            name: '最大值'
                        }, {
                            type: 'min',
                            name: '最小值'
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }, {
                    name: '发生案例',
                    type: 'bar',
                    data: [18, 26, 92, 5, 0],
                    markPoint: {
                        data: [{
                            name: '年最高',
                            value: 182.2,
                            xAxis: 7,
                            yAxis: 183,
                            symbolSize: 18
                        }, {
                            name: '年最低',
                            value: 2.3,
                            xAxis: 11,
                            yAxis: 3
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            chart_3.setOption(option);
        },
        _setChart_4: function() {
            var chart_4 = echarts.init(document.getElementById('chart_4'));
            var option = {
                title: {
                    text: '舆情表现形式',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['热线投诉', '网络舆情', '记者采访', '群体性事件', '上访', '媒体报道', '其他']
                },
                series: [{
                    name: '舆情表现形式',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{
                        value: 0,
                        name: '热线投诉'
                    }, {
                        value: 64.54,
                        name: '网络舆情'
                    }, {
                        value: 14.89,
                        name: '记者采访'
                    }, {
                        value: 2.13,
                        name: '群体性事件'
                    }, {
                        value: 0.71,
                        name: '上访'
                    }, {
                        value: 16.31,
                        name: '媒体报道'
                    }, {
                        value: 1.42,
                        name: '其他'
                    }]
                }]
            };
            chart_4.setOption(option);
        },
        _setChart_5: function() {
            var chart_5 = echarts.init(document.getElementById('chart_5'));
            var option = {
                title: {
                    text: '来源地点分布',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['发生案例']
                },
                xAxis: [{
                    type: 'category',
                    data: ['鹿城', '龙湾', '瓯海', '乐清', '瑞安', '苍南', '平阳', '永嘉', '洞头', '泰顺', '文成', '其他']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '发生案例',
                    type: 'bar',
                    data: [30, 5, 2, 16, 18, 17, 10, 16, 1, 12, 2, 12],
                    markPoint: {
                        data: [{
                            type: 'max',
                            name: '最大值'
                        }, {
                            type: 'min',
                            name: '最小值'
                        }]
                    },
                    markLine: {
                        data: [{
                            type: 'average',
                            name: '平均值'
                        }]
                    }
                }]
            };
            chart_5.setOption(option);
        }
    };
    var newChart = new Chart();
    newChart._init();
});