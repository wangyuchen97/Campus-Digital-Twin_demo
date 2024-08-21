



$(function(){
    // index();
    $(".index_nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
            if(index==1){
                building();
            }else if(index==2){
                environment();
            }else if(index==4){
                energy();
            }else if(index==5){
                traffic();
            }
        })
    });
    $(".tabs ul li").each(function(index){
       $(this).click(function(){
           $(".tabs ul li div .div").removeClass("tabs_active");
           $(this).find("div .div").addClass("tabs_active");
           $(".tabs_map>div").eq(index).fadeIn().siblings("div").stop().hide();
       })
   });
    $(".middle_top_bot ul li").each(function(){
        $(this).click(function(){
            $(".middle_top_bot ul li").removeClass("middle_top_bot_active");
            $(this).addClass("middle_top_bot_active");
        })
    });

});

function energy(){
    //游客来源分析
    $(function(){
        var myChart = echarts.init($("#container1")[0]);
        var option = {

            legend: {
                x: 'center',
                y:"16",
                data: [],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {

                    name: '',
                    type: 'pie',
                    radius : '70%',
                    center: ['50%', '50%'],
                    data:[
                        {
                            value:324,
                            name:'A',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }
                        },
                        {
                            value:186,
                            name:'B',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:99,
                            name:'C',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        }
                        ,
                        {
                            value:39,
                            name:'D',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:78,
                            name:'E',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }

                    ]
                    //data:[
                    //    {value:90, name:'男性'},
                    //    {value:10, name:'女性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#ff81cb"
                    //            }
                    //        }}
                    //]
                }
            ]
        };



        myChart.setOption(option);
    });


//游客年龄分析
    $(function(){
        var myChart = echarts.init($("#container3")[0]);
        var option = {

            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['A','B','C','D','E'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {

                    name: '',
                    type: 'pie',
                    radius : '70%',
                    center: ['50%', '50%'],
                    data:[
                        {value:90, name:'A',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }},
                        {value:254, name:'B',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }},
                        {value:362, name:'C',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:152, name:'D',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }},
                        {value:86, name:'E',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

//散客——团队分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container4'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客（万人）','团队（万人）'],
            //    y:'20',
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['Jan','Feb','Mar','Apr','May','Jue','Jul','Aug','Sep','Oct','Nov','Dec'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'NUM1',
                    type:'bar',
                    stack: '广告',
                    barWidth:'30',
                    data:[320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'NUM2',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//天气游客数据分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container5'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['A', 'B', 'C', 'D', 'E', 'F','G'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'NUM1',
                    type:'bar',
                    data:[20, 15, 15, 16, 18, 15, 10,26,30],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'NUM2',
                    type:'bar',
                    stack: '广告',
                    data:[20, 35, 50, 66, 84, 99, 109,80,70],
                    itemStyle:{
                        normal:{
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//游客出行交通方式分析
    $(function(){
        var myChart = echarts.init($("#container6")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['A','B','C','D','E','F'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'NUM2',
                    type:'bar',
                    barWidth:'30',
                    data:[5, 9, 10, 7, 6, 3, 8, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#0aff6c"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

    //不同时间段入园情况
    $(function(){
        var myChart = echarts.init($("#container9")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        //rotate:20,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: 'NUM3',
                    type: 'line',
                    stack: '客流量',
                    data: [1200, 1322, 1401, 1046, 1499, 820],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });

}

function traffic(){
// 交通与订单分析
    $(function(){
        var myChart = echarts.init($("#rodeAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['Crowded','Unblocked','Num'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : 'Num',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : 'Traffic flow',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'Unblocked',
                    type:'bar',
                    stack: 'Traffic flow',
                    data:[120, 132, 101, 134, 90, 230, 210],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'Crowded',
                    type:'bar',
                    stack: 'Traffic flow',
                    data:[220, 232, 301, 234, 190, 330, 210],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },

                {
                    name:'Num',
                    type:'line',
                    yAxisIndex: 1,
                    data:[320, 232, 101, 134, 290, 230, 210],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });


//景区个部门出勤情况分析
    $(function(){
        var myChart = echarts.init($("#userContainerAttendance")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['Road-A', 'Road-B', 'Road-C', 'Road-D', 'Road-E', 'Road-F'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'E（%）',
                    type:'bar',
                    barWidth:'30',
                    data:[76, 56, 39, 77, 86, 95, 58, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//个人E排行
    $(function(){
        var myChart = echarts.init($("#userContainerPersonal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['A','B','C','D','E'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: 'E（%）',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [60, 72, 85, 96, 99],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

// //工作人员性别分析
//     $(function(){
//         var myChart = echarts.init($("#userContainerSex")[0]);
//         var option = {
//             tooltip : {
//                 trigger: 'item',
//                 formatter: "{a} <br/>{b} : {c} ({d}%)"
//             },
//             legend: {
//                 orient: 'vertical',
//                 x: 'left',
//                 y:"16",
//                 data: ['男性','女性'],
//                 textStyle:{
//                     color:"#e9ebee"
//                 }
//             },
//             series : [
//                 {
//                     itemStyle: {
//                         normal: {
//                             label: {
//                                 show: false
//                             },
//                             labelLine: {
//                                 show: false
//                             }
//                         }
//                     },
//                     name: '',
//                     type: 'pie',
//                     radius : '55%',
//                     center: ['50%', '60%'],
//                     data:[
//                         {value:90, name:'男性',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#2865aa"
//                                 }
//                             }},
//                         {value:10, name:'女性',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#ff81cb"
//                                 }
//                             }}
//                     ]
//                 }
//             ]
//         };



//         myChart.setOption(option);
//     });

// //工作人员来源分析
//     $(function(){
//         var myChart = echarts.init($("#userContainerManage")[0]);
//         var option = {
//             tooltip : {
//                 trigger: 'item',
//                 formatter: "{a} <br/>{b} : {c} ({d}%)"
//             },
//             legend: {
//                 x: 'center',
//                 y:"16",
//                 data:['Road-A', 'Road-B', 'Road-C', 'Road-D', 'Road-E', 'Road-F'],
//                 textStyle:{
//                     color:"#e9ebee"
//                 }
//             },
//             series : [
//                 {
//                     itemStyle: {
//                         normal: {
//                             label: {
//                                 show: false
//                             },
//                             labelLine: {
//                                 show: false
//                             }
//                         }
//                     },
//                     name: '',
//                     type: 'pie',
//                     radius : '55%',
//                     center: ['50%', '60%'],
//                     data:[
//                         {
//                             value:324,
//                             name:'Road-A',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#1afffd"
//                                 }
//                             }
//                         },
//                         {
//                             value:186,
//                             name:'Road-B',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#2e7cff"
//                                 }
//                             }
//                         },
//                         {
//                             value:99,
//                             name:'Road-C',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#ffcb89"
//                                 }
//                             }
//                         }
//                         ,
//                         {
//                             value:39,
//                             name:'Road-D',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#005ea1"
//                                 }
//                             }
//                         }
//                         ,
//                         {
//                             value:78,
//                             name:'Road-E',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#0ad5ff"
//                                 }
//                             }
//                         },
//                         {
//                             value:78,
//                             name:'Road-F',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#feb602"
//                                 }
//                             }
//                         }

//                     ]
//                     //data:[
//                     //    {value:90, name:'男性',
//                     //        itemStyle:{
//                     //            normal:{
//                     //                color:"#2865aa"
//                     //            }
//                     //        }},
//                     //    {value:10, name:'女性',
//                     //        itemStyle:{
//                     //            normal:{
//                     //                color:"#ff81cb"
//                     //            }
//                     //        }}
//                     //]
//                 }
//             ]
//         };



//         myChart.setOption(option);
//     });

// //工作人员年龄分析
//     $(function(){
//         var myChart = echarts.init($("#userContainerAge")[0]);
//         var option = {
//             tooltip : {
//                 trigger: 'item',
//                 formatter: "{a} <br/>{b} : {c} ({d}%)"
//             },
//             legend: {
//                 orient: 'vertical',
//                 x: 'right',
//                 y:"16",
//                 data: ['少年','青年','中年','老年','其他'],
//                 textStyle:{
//                     color:"#e9ebee"
//                 }
//             },
//             series : [
//                 {
//                     itemStyle: {
//                         normal: {
//                             label: {
//                                 show: false
//                             },
//                             labelLine: {
//                                 show: false
//                             }
//                         }
//                     },
//                     name: '',
//                     type: 'pie',
//                     radius : '55%',
//                     center: ['50%', '60%'],
//                     data:[
//                         {value:90, name:'少年',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#0ad5ff"
//                                 }
//                             }},
//                         {value:254, name:'青年',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#005ea1"
//                                 }
//                             }},
//                         {value:362, name:'中年',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#ffcb89"
//                                 }
//                             }},
//                         {value:152, name:'老年',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#2e7cff"
//                                 }
//                             }},
//                         {value:86, name:'其他',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#1afffd"
//                                 }
//                             }}
//                     ]
//                 }
//             ]
//         };


//         myChart.setOption(option);
//     });

// //不同月份人员流动情况
//     $(function(){
//         var myChart = echarts.init(document.getElementById("#userContainerFlow"));
//         var option = {
//             tooltip : {
//                 trigger: 'axis'
//             },
//             grid: {
//                 x: 46,
//                 y:30,
//                 x2:32,
//                 y2:40,
//                 borderWidth: 0
//             },
//             calculable : true,
//             xAxis : [
//                 {
//                     type : 'category',
//                     boundaryGap : false,
//                     data : ['Jan','Feb','Mar','Apr','May','Jue','Jul','Aug','Sep','Oct','Nov','Dec'],
//                     splitLine: {
//                         show: false
//                     },
//                     axisLabel: {
//                         show: true,
//                         textStyle: {
//                             color: '#a4a7ab'
//                         }
//                     }
//                 }
//             ],
//             yAxis : [
//                 {
//                     type : 'value',
//                     splitLine: {
//                         show: false
//                     },
//                     axisLabel: {
//                         show: true,
//                         textStyle: {
//                             color: '#a4a7ab'
//                         }
//                     }

//                 }
//             ],
//             series : [
//                 {
//                     name:'景区工作人员',
//                     type:'line',
//                     stack: '人',
//                     data:[120, 132, 101, 134, 90, 230, 210,230,245,256,278,300],
//                     itemStyle: {
//                         normal: {
//                             color:"#1afffd"
//                         }
//                     }
//                 }
//             ]
//         };
//         myChart.setOption(option);
//     });

//景区个部门违规操作分析
    $(function(){
        var myChart = echarts.init($("#userContainerIllegal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['Road-A', 'Road-B', 'Road-C', 'Road-D', 'Road-E', 'Road-F'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'AAA',
                    type:'bar',
                    barWidth:'30',
                    data:[124, 522, 235, 365, 214, 265, 58, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

    //出行方式排行
    $(function(){
        var myChart = echarts.init($("#container12")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['Students','employees','Vistors','Vendors','Others'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: 'Num',
                    type: 'bar',
                    stack: 'Num',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [9900, 12350, 42563, 52364, 63524, 78224, 89254],
                    itemStyle: {
                        normal: {
                            color:"#ff7d0a"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

    //不同月份游客数量情况
    $(function(){
        var myChart = echarts.init($("#container10")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['Jan','Feb','Mar','Apr','May','Jue','Jul','Aug','Sep','Oct','Nov','Dec'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'Num',
                    type:'bar',
                    barWidth:'30',
                    data:[5, 9, 10, 7, 6, 3, 8, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });
}


function building(){
// 营销分析
// 24小时购买时间分析
    $(function(){
        var myChart = echarts.init($("#buyTime")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: '24小时购买时间',
                    data: [120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300,120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
//  类型分析
    $(function(){
        var myChart = echarts.init($("#Package01")[0]);
        option = {
            legend: {
                orient : 'vertical',
                x : 'left',
                data:[' A',' B',' C',' D',' E'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:' ',
                    type:'pie',
                    radius : '70%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:' A',
                            itemStyle: {
                                normal: {
                                    color:"#1afffd"
                                }
                            }},
                        {value:310, name:' B',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:234, name:' C',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:135, name:' D',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:1548, name:' E',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
// //  分析
//     $(function(){
//         var myChart = echarts.init($("#rode01")[0]);
//         option = {


//             legend: {
//                 orient : 'vertical',
//                 x : 'left',
//                 data:[' A',' B',' C',' D',' E',' F',' G',' H'], textStyle:{
//                     color:"#e9ebee"

//                 }
//             },

//             calculable : false,
//             series : [

//                 {
//                     name:'面积模式',
//                     type:'pie',
//                     radius : '60%',
//                     center: ['50%', '60%'],
//                     roseType : 'area',
//                     x: '50%',               // for funnel
//                     max: 40,                // for funnel
//                     sort : 'ascending',     // for funnel
//                     data:[
//                         {value:10, name:' A',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#45c0ff"
//                                 }
//                             }},
//                         {value:5, name:' B',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#e15828"
//                                 }
//                             }},
//                         {value:15, name:' C',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#ff81cb"
//                                 }
//                             }},
//                         {value:25, name:' D',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#2e7cff"
//                                 }
//                             }},
//                         {value:20, name:' E',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#feb602"
//                                 }
//                             }},
//                         {value:35, name:' F',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#ff7d0a"
//                                 }
//                             }},
//                         {value:30, name:' H',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#1afffd"
//                                 }
//                             }},
//                         {value:40, name:' G',
//                             itemStyle: {
//                                 normal: {
//                                     color:"#2e7cff"
//                                 }
//                             }}
//                     ]
//                 }
//             ]
//         };


//         myChart.setOption(option);
//     });

// 订退分析
    $(function(){
        var myChart = echarts.init($("#bookAret")[0]);
        option = {

            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data:['A','Num'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
                    axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    },
                    splitLine: {
                        show: false
                    },
                }
                }

            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }
            ],
            series : [
                {
                    name:'A',
                    type:'bar',
                    data:[100, 80, 136, 150, 120, 56, 200, 162, 105, 63, 169, 236],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'Num',
                    type:'bar',
                    data:[983, 820, 1236, 930, 1600, 1032, 890, 1300, 1921, 984, 1960, 2630],
                    markPoint : {
                        data : [
                            {name : '月最高', value : 2630, xAxis: 12, yAxis: 2630, symbolSize:18},
                            {name : '月最低', value : 820, xAxis: 2, yAxis: 830}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 按月进行趋势分析
    $(function(){
        var myChart = echarts.init($("#bookBmonth")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: false,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    stack: 'Num',
                    data:[983, 820, 1236, 930, 1600, 1032, 890, 1300, 1921, 984, 1960, 2630],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
// 气候与订单分析
    $(function(){
        var myChart = echarts.init($("#whearAbook")[0]);
        option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:30,
                y2:20,
                borderWidth: 0
            },

            calculable : false,
            legend: {
                data:['A','B','C','Num'],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }

                }
            ],
            yAxis : [
                {
                    type : 'value',

                    name : 'Num',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                {
                    type : 'value',
                    name : 'Tem',
                    axisLabel : {
                        formatter: '{value} °C',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },

            ],
            series : [

                {
                    name:'A',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'B',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'C',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'Num',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });

// 季节与订单分析
    $(function(){
        var myChart = echarts.init($("#seaAbook01")[0]);
        option = {


            legend: {
                orient : 'vertical',
                x : 'left',
                data:['A','B','C','D'], textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [

                {
                    name:'季节与订单关系',
                    type:'pie',
                    radius : '70%',
                    center: ['50%', '60%'],
                    splitLine:{show: false},
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:2560, name:'A',
                            itemStyle: {
                                normal: {
                                    color:"#2e7cff"
                                }
                            }},
                        {value:3690, name:'B',
                            itemStyle: {
                                normal: {
                                    color:"#ffcb89"
                                }
                            }},
                        {value:5690, name:'C',
                            itemStyle: {
                                normal: {
                                    color:"#005ea1"
                                }
                            }},
                        {value:6312, name:'D',
                            itemStyle: {
                                normal: {
                                    color:"#0ad5ff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

}

function environment(){
// 收入支出分析
// 收入 分析
    $(function(){
        var myChart = echarts.init($("#zhanbi02")[0]);
        var option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid:{
              borderWidth:0
            },
            xAxis : [
                {
                    type : 'category',

                    data : ['Total',' A',' B',' C',' D',' E'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'Total',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:' ',
                    type:'bar',
                    stack: '总量',
                    data:[2900, 1200, 300, 200, 900, 300],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
// 支出 分析
    $(function(){
        var myChart = echarts.init($("#zhanbi03")[0]);
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },

            xAxis : [
                {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['Total',' A',' B',' C',' D',' E'],
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    splitLine:{show: false}
                }
            ],
            series : [
                {
                    name:'Total',
                    type:'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:' ',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                                color:'#28a3e1'

                        }
                    },
                    data:[2900, 1200, 300, 200, 900, 300]
                }
            ]
        };


        myChart.setOption(option);
    });
// 营销 与B分析
    $(function(){
        var myChart = echarts.init($("#allAly01")[0]);
        option = {

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['BuildingA','BuildingB','BuildingC','BuildingD','BuildingE'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'Building组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'BuildingA',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }
                        },
                        {value:310, name:'BuildingB',
                            itemStyle:{
                                normal:{
                                    color:'#2e7cff'

                                }
                            }},
                        {value:234, name:'BuildingC',
                            itemStyle:{
                                normal:{
                                    color:'#ffcb89'

                                }
                            }},
                        {value:135, name:'BuildingD',
                            itemStyle:{
                                normal:{
                                    color:'#005ea1'

                                }
                            }},
                        {value:1548, name:'BuildingE',
                            itemStyle:{
                                normal:{
                                    color:'#0ad5ff'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(function(){
        var myChart = echarts.init($("#allAly02")[0]);
        option = {

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:[' A',' B',' C',' D',' E',' F',' G',' H',' J'],
                textStyle:{
                    color:"#e9ebee"

                }
            },

            calculable : false,
            series : [
                {
                    name:'Building组成',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:' A',
                            itemStyle:{
                                normal:{
                                    color:'#06b8f8'

                                }
                            }},
                        {value:310, name:' B',
                            itemStyle:{
                                normal:{
                                    color:'#ff5c58'

                                }
                            }},
                        {value:234, name:' C',
                            itemStyle:{
                                normal:{
                                    color:'#ffffb3'

                                }
                            }},
                        {value:135, name:' D',
                            itemStyle:{
                                normal:{
                                    color:'#fee581'

                                }
                            }},
                        {value:1548, name:' E',
                            itemStyle:{
                                normal:{
                                    color:'#1afffd'

                                }
                            }},
                        {value:135, name:' F',
                            itemStyle:{
                                normal:{
                                    color:'#1ec7f1'

                                }
                            }},
                        {value:135, name:' G',
                            itemStyle:{
                                normal:{
                                    color:'#e15828'

                                }
                            }},
                        {value:135, name:' H',
                            itemStyle:{
                                normal:{
                                    color:'#28a3e1'

                                }
                            }},
                        {value:135, name:' J',
                            itemStyle:{
                                normal:{
                                    color:'#72e7d5'

                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });
    $(function(){
        var myChart = echarts.init($("#allAly03")[0]);
        option = {

            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['A','B'],
                textStyle:{
                    color:"#e9ebee"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            grid:{
                borderWidth:0
            },
            series : [
                {
                    name:'A',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'B',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },

                    markPoint : {
                        data : [
                            {name : '最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });
    $(function(){
        var myChart = echarts.init($("#allAly04")[0]);
        option = {

            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['A'],
                textStyle:{
                    color:"#e9ebee"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1','2','3','4','5','6','7','8','9','10','11','12']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            grid:{
                borderWidth:0
            },
            series : [
                {
                    name:'A',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },

            ]
        };


        myChart.setOption(option);
    });
}

// function security(){
//     // 安全分析
// // 事件趋势分析
//     $(function(){
//         var myChart = echarts.init($("#shijian01")[0]);
//         option = {

//             tooltip: {
//                 trigger: "item",
//                 formatter: "{a} <br/>{b} : {c}"
//             },
//             legend: {
//                 x: 'center',
//                 data: ["案件趋势分析"],
//                 textStyle:{
//                     color:"#e9ebee"

//                 }
//             },
//             xAxis: [
//                 {
//                     type: "category",
//                     name: "x",
//                     splitLine:{show: false},
//                     axisLabel : {
//                         formatter: '{value} ',
//                         textStyle: {
//                             color: '#a4a7ab',
//                             align: 'right'
//                         }
//                     },
//                     data : ['1','2','3','4','5','6','7','8','9','10','11','12']
//                 }
//             ],
//             grid:{
//                 borderWidth:0
//             },
//             yAxis: [
//                 {
//                     type: "log",
//                     name: "y",
//                     splitLine:{show: false},
//                     data : ['10','30','50','70','90','110','120','130','150','170','190','210','250'],
//                     axisLabel : {

//                         textStyle: {
//                             color: '#a4a7ab',
//                             align: 'right'
//                         }
//                     },
//                 }
//             ],

//             calculable: false,
//             series: [
//                 {
//                     name: "案件趋势分析",
//                     type: "line",
//                     data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 188, 60, 23],
//                     itemStyle: {
//                         normal: {
//                             color:"#0aabff"
//                         }
//                     }

//                 }

//             ]
//         };


//         myChart.setOption(option);
//     });
// // 事件级别分析
//     $(function(){
//         var myChart = echarts.init($("#shijian02")[0]);
//         var placeHoledStyle = {
//             normal:{
//                 barBorderColor:'rgba(0,0,0,0)',
//                 color:'rgba(0,0,0,0)'
//             },
//             emphasis:{
//                 barBorderColor:'rgba(0,0,0,0)',
//                 color:'rgba(0,0,0,0)'
//             }
//         };
//         var dataStyle = {
//             normal: {
//                 label : {
//                     show: true,
//                     position: 'insideLeft',
//                     formatter: '{c}%'
//                 }
//             }
//         };
//         option = {

//             tooltip : {
//                 trigger: 'axis',
//                 axisPointer : {            // 坐标轴指示器，坐标轴触发有效
//                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//                 },
//                 formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
//             },
//             legend: {
//                 y: 55,
//                 data:['极重', '严重','一般', '轻微'],
//                 textStyle:{
//                     color:"#fff"

//                 }
//             },

//             grid: {
//                 y: 80,
//                 y2: 30
//             },
//             xAxis : [
//                 {
//                     type : 'value',
//                     position: 'top',
//                     splitLine: {show: false},
//                     axisLabel: {show: false}
//                 }
//             ],
//             yAxis : [
//                 {
//                     type : 'category',
//                     splitLine: {show: false},
//                     axisLabel : {

//                         textStyle: {
//                             color: '#fff',
//                             align: 'right'
//                         }
//                     },
//                     data : ['医疗事件', '消防事件', '民事事件', '刑事事件']
//                 }
//             ],
//             series : [
//                 {
//                     name:'极重',
//                     type:'bar',
//                     stack: '总量',
//                     data:[38, 50, 33, 72],
//                     itemStyle: {
//                         normal: {
//                             color:"#1afffd"
//                         }
//                     }
//                 },
//                 {
//                     name:'极重',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle: placeHoledStyle,
//                     data:[62, 50, 67, 28],
//                     itemStyle: {
//                         normal: {
//                             color:"#2e7cff"
//                         }
//                     }
//                 },
//                 {
//                     name:'严重',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : dataStyle,
//                     data:[61, 41, 42, 30],
//                     itemStyle: {
//                         normal: {
//                             color:"#ffcb89"
//                         }
//                     }
//                 },
//                 {
//                     name:'严重',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle: placeHoledStyle,
//                     data:[39, 59, 58, 70],
//                     itemStyle: {
//                         normal: {
//                             color:"#005ea1"
//                         }
//                     }
//                 },
//                 {
//                     name:'一般',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : dataStyle,
//                     data:[37, 35, 44, 60],
//                     itemStyle: {
//                         normal: {
//                             color:"#0ad5ff"
//                         }
//                     }
//                 },
//                 {
//                     name:'一般',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle: placeHoledStyle,
//                     data:[63, 65, 56, 40],
//                     itemStyle: {
//                         normal: {
//                             color:"#e15828"
//                         }
//                     }
//                 },
//                 {
//                     name:'轻微',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : dataStyle,
//                     data:[71, 50, 31, 39],
//                     itemStyle: {
//                         normal: {
//                             color:"#ff81cb"
//                         }
//                     }
//                 },
//                 {
//                     name:'轻微',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle: placeHoledStyle,
//                     data:[29, 50, 69, 61],
//                     itemStyle: {
//                         normal: {
//                             color:"#feb602"
//                         }
//                     }
//                 }
//             ]
//         };
//         myChart.setOption(option);
//     });
// // 事件类型分析
//     $(function(){
//         var myChart = echarts.init($("#shijian03")[0]);
//         var option = {

//             legend: {
//                 x: 'center',
//                 y:"16",
//                 data: [],
//                 textStyle:{
//                     color:"#e9ebee"
//                 }
//             },
//             series : [
//                 {

//                     name: '',
//                     type: 'pie',
//                     radius : '70%',
//                     center: ['50%', '50%'],
//                     data:[
//                         {
//                             value:324,
//                             name:'省内游客',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#2864ab"
//                                 }
//                             }
//                         },
//                         {
//                             value:186,
//                             name:'北上广游客',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#1afffd"
//                                 }
//                             }
//                         },
//                         {
//                             value:99,
//                             name:'西南片区',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#2e7cff"
//                                 }
//                             }
//                         }
//                         ,
//                         {
//                             value:39,
//                             name:'海外游客',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#ffcb89"
//                                 }
//                             }
//                         }
//                         ,
//                         {
//                             value:78,
//                             name:'其他地区',
//                             itemStyle:{
//                                 normal:{
//                                     color:"#005ea1"
//                                 }
//                             }
//                         }

//                     ]
//                     //data:[
//                     //    {value:90, name:'男性'},
//                     //    {value:10, name:'女性',
//                     //        itemStyle:{
//                     //            normal:{
//                     //                color:"#ff81cb"
//                     //            }
//                     //        }}
//                     //]
//                 }
//             ]
//         };



//         myChart.setOption(option);
//     });



// // 事发时间特征分析
//     $(function(){
//         var myChart = echarts.init($("#shijian04")[0]);
//         option = {

//             legend: {
//                 data:['医疗事件', '消防事件','刑事','民事','其它'],
//                 textStyle:{
//                     color:"#fff"

//                 },
//             },

//             calculable : false,
//             xAxis : [
//                 {
//                     type : 'value',
//                     splitLine: {show: false},
//                     axisLabel : {

//                         textStyle: {
//                             color: '#fff',
//                             align: 'right'
//                         }
//                     },
//                 }
//             ],
//             yAxis : [
//                 {
//                     type : 'category',
//                     splitLine: {show: false},
//                     axisLabel : {

//                         textStyle: {
//                             color: '#fff',
//                             align: 'right'
//                         }
//                     },
//                     data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
//                 }
//             ],
//             series : [
//                 {
//                     name:'医疗事件',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
//                     data: [12, 13, 10, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 20, 25, 28, 30]
//                     ,
//                     itemStyle: {
//                         normal: {
//                             color:"#0ad5ff"
//                         }
//                     }
//                 },
//                 {
//                     name:'消防事件',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
//                     data: [1, 13, 0, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 0, 25, 8, 30]
//                     ,
//                     itemStyle: {
//                         normal: {
//                             color:"#005ea1"
//                         }
//                     }
//                 },
//                 {
//                     name:'刑事',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
//                     data: [12, 13, 10, 16, 19, 3, 2, 3, 0, 6, 9, 30,12, 12, 11, 14, 1, 3, 1, 2, 0, 5, 2, 0]
//                     ,
//                     itemStyle: {
//                         normal: {
//                             color:"#ffcb89"
//                         }
//                     }
//                 },
//                 {
//                     name:'民事',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
//                     data: [2, 13, 10, 6, 19, 23, 21, 3, 20, 6, 7, 30,12, 12, 11, 14, 19, 3, 21, 0, 20, 5, 8, 0]
//                     ,
//                     itemStyle: {
//                         normal: {
//                             color:"#2e7cff"
//                         }
//                     }
//                 },
//                 {
//                     name:'其它',
//                     type:'bar',
//                     stack: '总量',
//                     itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
//                     data: [1, 3, 10, 6, 9, 3, 11, 3, 0, 6, 7, 0,2, 2, 1, 4, 9, 3, 1, 0, 0, 5, 8, 3]
//                     ,
//                     itemStyle: {
//                         normal: {
//                             color:"#1afffd"
//                         }
//                     }
//                 }
//             ]
//         };

//         myChart.setOption(option);
//     });
//     // 活动与订单分析
//     $(function(){
//         var myChart = echarts.init($("#actionBook")[0]);
//         option = {
//             tooltip : {
//                 trigger: 'axis'
//             },
//             grid: {
//                 x: 46,
//                 y:30,
//                 x2:30,
//                 y2:20,
//                 borderWidth: 0
//             },

//             calculable : false,
//             legend: {
//                 data:['降价活动','买一送一活动','送积分活动','送礼品活动'],
//                 textStyle:{
//                     color:"#e9ebee"

//                 }
//             },
//             xAxis : [
//                 {
//                     type : 'category',
//                     splitLine : {show : false},
//                     data : ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
//                     axisLabel: {
//                         show: true,
//                         textStyle: {
//                             color: '#fff',
//                             align: 'center'
//                         }
//                     }
//                 }
//             ],
//             yAxis : [
//                 {
//                     type : 'value',
//                     position: 'right',
//                     splitLine : {show : false},
//                     axisLabel: {
//                         show: true,
//                         textStyle: {
//                             color: '#fff',
//                             align: 'center'
//                         }
//                     }
//                 }
//             ],
//             series : [
//                 {
//                     name:'降价活动',
//                     type:'bar',
//                     data:[320, 332, 301, 334, 390, 330, 320],
//                     itemStyle: {
//                         normal: {
//                             color:"#2e7cff"
//                         }
//                     }
//                 },
//                 {
//                     name:'买一送一活动',
//                     type:'bar',
//                     tooltip : {trigger: 'item'},
//                     stack: '广告',
//                     data:[120, 132, 101, 134, 90, 230, 210],
//                     itemStyle: {
//                         normal: {
//                             color:"#feb602"
//                         }
//                     }
//                 },
//                 {
//                     name:'送积分活动',
//                     type:'bar',
//                     tooltip : {trigger: 'item'},
//                     stack: '广告',
//                     data:[220, 182, 191, 234, 290, 330, 310],
//                     itemStyle: {
//                         normal: {
//                             color:"#ffcb89"
//                         }
//                     }
//                 },
//                 {
//                     name:'送礼品活动',
//                     type:'bar',
//                     tooltip : {trigger: 'item'},
//                     stack: '广告',
//                     data:[150, 232, 201, 154, 190, 330, 410],
//                     itemStyle: {
//                         normal: {
//                             color:"#005ea1"
//                         }
//                     }
//                 },

//                 {
//                     name:'订单趋势',
//                     type:'line',
//                     data:[862, 1018, 964, 1026, 1679, 1600, 1570],
//                     itemStyle: {
//                         normal: {
//                             color:"#0ad5ff"
//                         }
//                     }
//                 },


//             ]
//         };


//         myChart.setOption(option);
//     });
// // 特殊时间点与订单分析
//     $(function(){
//         var myChart = echarts.init($("#sperceBook02")[0]);
//         option = {

//             tooltip : {
//                 trigger: 'axis',
//                 formatter: function (params) {
//                     var res = params[0].seriesName + ' ' + params[0].name;
//                     res += '<br/>  0-05 : ' + params[0].value[0] + '  06-12 : ' + params[0].value[3];
//                     res += '<br/>   13-18: ' + params[0].value[1] + '  19-24 : ' + params[0].value[2];
//                     return res;
//                 }
//             },
//             grid: {
//                 x: 46,
//                 y:30,
//                 x2:30,
//                 y2:20,
//                 borderWidth: 0
//             },
//             legend: {
//                 data:['Num'],
//                 textStyle:{
//                     color:"#e9ebee"

//                 }
//             },

//             dataZoom : {
//                 show : true,
//                 realtime: true,
//                 start : 50,
//                 end : 100
//             },
//             xAxis : [
//                 {
//                     type : 'category',
//                     textStyle: {
//                         color: '#a4a7ab',

//                     },
//                     boundaryGap : true,
//                     axisTick: {onGap:false},
//                     splitLine: {show:false},
//                     data : [
//                         "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
//                         "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
//                         "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
//                         "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
//                         "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
//                         "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
//                         "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
//                         "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
//                         "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
//                         "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
//                         "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
//                         "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
//                         "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
//                         "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
//                         "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
//                         "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
//                         "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
//                         "2013/6/6", "2013/6/7", "2013/6/13"
//                     ]
//                 }
//             ],
//             yAxis : [
//                 {
//                     type : 'value',
//                     textStyle: {
//                         color: '#a4a7ab',

//                     },
//                     scale:true,
//                     boundaryGap: [0.01, 0.01],
//                     splitLine: {
//                         show: false
//                     },
//                 }
//             ],
//             series : [
//                 {
//                     name:'Num',
//                     type:'k',
//                     data:[ // 开盘，收盘，最低，最高
//                         [2320.26,2302.6,2287.3,2362.94],
//                         [2300,2291.3,2288.26,2308.38],
//                         [2295.35,2346.5,2295.35,2346.92],
//                         [2347.22,2358.98,2337.35,2363.8],
//                         [2360.75,2382.48,2347.89,2383.76],
//                         [2383.43,2385.42,2371.23,2391.82],
//                         [2377.41,2419.02,2369.57,2421.15],
//                         [2425.92,2428.15,2417.58,2440.38],
//                         [2411,2433.13,2403.3,2437.42],
//                         [2432.68,2434.48,2427.7,2441.73],
//                         [2430.69,2418.53,2394.22,2433.89],
//                         [2416.62,2432.4,2414.4,2443.03],
//                         [2441.91,2421.56,2415.43,2444.8],
//                         [2420.26,2382.91,2373.53,2427.07],
//                         [2383.49,2397.18,2370.61,2397.94],
//                         [2378.82,2325.95,2309.17,2378.82],
//                         [2322.94,2314.16,2308.76,2330.88],
//                         [2320.62,2325.82,2315.01,2338.78],
//                         [2313.74,2293.34,2289.89,2340.71],
//                         [2297.77,2313.22,2292.03,2324.63],
//                         [2322.32,2365.59,2308.92,2366.16],
//                         [2364.54,2359.51,2330.86,2369.65],
//                         [2332.08,2273.4,2259.25,2333.54],
//                         [2274.81,2326.31,2270.1,2328.14],
//                         [2333.61,2347.18,2321.6,2351.44],
//                         [2340.44,2324.29,2304.27,2352.02],
//                         [2326.42,2318.61,2314.59,2333.67],
//                         [2314.68,2310.59,2296.58,2320.96],
//                         [2309.16,2286.6,2264.83,2333.29],
//                         [2282.17,2263.97,2253.25,2286.33],
//                         [2255.77,2270.28,2253.31,2276.22],
//                         [2269.31,2278.4,2250,2312.08],
//                         [2267.29,2240.02,2239.21,2276.05],
//                         [2244.26,2257.43,2232.02,2261.31],
//                         [2257.74,2317.37,2257.42,2317.86],
//                         [2318.21,2324.24,2311.6,2330.81],
//                         [2321.4,2328.28,2314.97,2332],
//                         [2334.74,2326.72,2319.91,2344.89],
//                         [2318.58,2297.67,2281.12,2319.99],
//                         [2299.38,2301.26,2289,2323.48],
//                         [2273.55,2236.3,2232.91,2273.55],
//                         [2238.49,2236.62,2228.81,2246.87],
//                         [2229.46,2234.4,2227.31,2243.95],
//                         [2234.9,2227.74,2220.44,2253.42],
//                         [2232.69,2225.29,2217.25,2241.34],
//                         [2196.24,2211.59,2180.67,2212.59],
//                         [2215.47,2225.77,2215.47,2234.73],
//                         [2224.93,2226.13,2212.56,2233.04],
//                         [2236.98,2219.55,2217.26,2242.48],
//                         [2218.09,2206.78,2204.44,2226.26],
//                         [2199.91,2181.94,2177.39,2204.99],
//                         [2169.63,2194.85,2165.78,2196.43],
//                         [2195.03,2193.8,2178.47,2197.51],
//                         [2181.82,2197.6,2175.44,2206.03],
//                         [2201.12,2244.64,2200.58,2250.11],
//                         [2236.4,2242.17,2232.26,2245.12],
//                         [2242.62,2184.54,2182.81,2242.62],
//                         [2187.35,2218.32,2184.11,2226.12],
//                         [2213.19,2199.31,2191.85,2224.63],
//                         [2203.89,2177.91,2173.86,2210.58],
//                         [2170.78,2174.12,2161.14,2179.65],
//                         [2179.05,2205.5,2179.05,2222.81],
//                         [2212.5,2231.17,2212.5,2236.07],
//                         [2227.86,2235.57,2219.44,2240.26],
//                         [2242.39,2246.3,2235.42,2255.21],
//                         [2246.96,2232.97,2221.38,2247.86],
//                         [2228.82,2246.83,2225.81,2247.67],
//                         [2247.68,2241.92,2231.36,2250.85],
//                         [2238.9,2217.01,2205.87,2239.93],
//                         [2217.09,2224.8,2213.58,2225.19],
//                         [2221.34,2251.81,2210.77,2252.87],
//                         [2249.81,2282.87,2248.41,2288.09],
//                         [2286.33,2299.99,2281.9,2309.39],
//                         [2297.11,2305.11,2290.12,2305.3],
//                         [2303.75,2302.4,2292.43,2314.18],
//                         [2293.81,2275.67,2274.1,2304.95],
//                         [2281.45,2288.53,2270.25,2292.59],
//                         [2286.66,2293.08,2283.94,2301.7],
//                         [2293.4,2321.32,2281.47,2322.1],
//                         [2323.54,2324.02,2321.17,2334.33],
//                         [2316.25,2317.75,2310.49,2325.72],
//                         [2320.74,2300.59,2299.37,2325.53],
//                         [2300.21,2299.25,2294.11,2313.43],
//                         [2297.1,2272.42,2264.76,2297.1],
//                         [2270.71,2270.93,2260.87,2276.86],
//                         [2264.43,2242.11,2240.07,2266.69],
//                         [2242.26,2210.9,2205.07,2250.63],
//                         [2190.1,2148.35,2126.22,2190.1]
//                     ]
//                 }
//             ]
//         };


//         myChart.setOption(option);
//     });
// }


