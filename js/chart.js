$(function () {
        $('#highchart').highcharts({
            colors: ["#ED3B1C"],
                chart: {type:'area',
                        style: {
                            fontFamily: "Radiance"
                        },
                        backgroundColor: 'transparent'
                    },
                title: {text: '<b>Número de jogadores por mês</b>',
                    style:{color:'#808080'}},
                xAxis: {type: 'datetime',
                    minRange: 47 * 30 * 24 * 3600000
                },
                yAxis: {title: {text: '<b>Número médio de jogadores</b>'}},
                tooltip: {
                        xDateFormat: '%d - %m - %Y',
                        formatter: function() {
                                var index = this.series.xData.indexOf(this.x);
                                var prevPoint = this.series.yData[index-1];
                                var value = 'A quantidade média de jogadores no mês de ' + Highcharts.dateFormat('%b - %Y',this.point.x) + ' é de <b>' + this.point.y.toLocaleString() + '</b>';
                                if(prevPoint){
                                    value += '<br> e o aumento do número de jogadores desde o último mês é de <b>' + (((this.point.y - prevPoint)/this.point.y)*100).toFixed(2)  + '%</b>.';
                                }
                                return value;
                    }
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#ED3B1C'],
                                [1, 'transparent']
                            ]
                        },
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series:
                [
                    {
                        pointInterval: 31 * 24 * 3600 * 1000,
                        pointStart: Date.UTC(2012, 6, 1),
                        data:[
                             52721,
                             55768,
                             61867,
                             75965,
                             101077,
                             121924,
                             147748,
                             166973,
                             180879,
                             174835,
                             194363,
                             210224,
                             237800,
                             330720,
                             312424,
                             329677,
                             348246,
                             366606,
                             393860,
                             421114,
                             409755,
                             421710,
                             482387,
                             513783,
                             537018,
                             490883,
                             477998,
                             495693,
                             528789,
                             523940,
                             558504,
                             628970,
                             571713,
                             526061,
                             580348,
                             568448,
                             554991,
                             606944,
                             508158,
                             521941,
                             539536,
                             573344,
                             612174,
                             709178,
                             672554,
                             656944,
                             623798
                        ]
                    }
                ]
        });
        $('#highchart2').highcharts({
            colors: ["#ED3B1C"],
                chart: {type:'area',
                        style: {
                            fontFamily: "Radiance"
                        },
                        backgroundColor: 'transparent'
                    },
                title: {text: '<b>Premiação por ano</b>',
                    style:{color:'#808080'}},
                xAxis: {
                    categories: ['2011','2012','2013','2014','2015']
                },
                yAxis: {title: {text: '<b>Premiação Total em Milhões</b>'}},
                tooltip: {
                        formatter: function() {
                                var index = this.point.x.toLocaleString();
                                var prevPoint = this.series.yData[index-1];
                                var value = 'Premiação Total distribuida no ano <b>'+ this.x + ' é de <b>' + this.point.y.toLocaleString() + '</b>';
                                if(prevPoint){
                                    value += '<br> e o aumento da Premiação em relação ao último ano é de <b>' + (((this.point.y - prevPoint)/this.point.y)*100).toFixed(2)  + '%</b>.';
                                }
                                console.log(index);
                                return value;
                    }
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#ED3B1C'],
                                [1, 'transparent']
                            ]
                        },
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series:
                [
                    {
                        data: [1662268.08,2058193.31,4490461.8,16583481.09,31018392.86]
                    }
                ]
        });

        $('#highchart3').highcharts({
            colors: ["#ED3B1C"],
                chart: {type:'column',
                        style: {
                            fontFamily: "Radiance"
                        },
                        backgroundColor: 'transparent'
                    },
                title: {text: '<b>Distribuição dos dez Heróis mais escolhidos por Lane</b>',
                    style:{color:'#808080'}},
                xAxis: {
                    categories: ['Earthshaker','Invoker','Juggernault','Legion Commander','Phanton Assassin','Pudge','Shadow Fiend','Slark','Sniper','Windranger']
                },
                yAxis: {title: {text: '<b>Presença</b>'}},
                credits: {
                    enabled: false
                },
                tooltip: {
                        formatter: function() {
                                return 'The presence for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in '+ this.series.name;
                    }
                },
                series:
                [
                    {
                        name: 'safe lane',
                        color: '#e2f008',
                        data: [43.21,0,79.38,20.38,77.24,17.78,6.30,75.56,39.15,14.49]
                    },
                    {
                        name: 'mid lane',
                        color: '#f09408',
                        data: [21.82,81.97,0,7.29,6.79,42.63,90.06,6.47,37.81,44.73]
                    },
                    {
                        name: 'off lane',
                        color:'#962104',
                        data: [35.55,12.21,13.01,19.58,14.94,36.24,0,17.44,21.72,40.11]
                    },
                    {
                        name: 'jungle',
                        data: [6.07,0,0,52.19,0,0,0,0,0,0]
                    }


                ]
        });
        $('#highchart4').highcharts({
            colors: ["#ED3B1C"],
                chart: {type:'column',
                        style: {
                            fontFamily: "Radiance"
                        },
                        backgroundColor: 'transparent'
                    },
                title: {text: '<b>The International 2014 e 2015</b>',
                    style:{color:'#808080'}},
                xAxis: {
                    categories:['Brewmaster','Doom','Earthshaker','Gyrocopter','Lina','Mirana','Queen of Pain','Rubick','Shadow Shaman','Treant Protector']
                },
                yAxis: {
                    title: {text: '<b>Quantidade de vezes escolhido</b>'}
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                        formatter: function() {
                                return 'O heroi <b>' + this.x + '</b> foi escolhido <b>' + this.y + ' vezes </b> no '+ this.series.name;
                    }
                },
                series:
                [
                    {
                        name: 'International 2014',
                        color: '#f02602',
                        data: [126,123,63,19,7,195,29,106,126,140]
                    },
                    {
                        name: 'International 2015',
                        color: '#fd6600',
                        data: [8,1,179,190,163,7,199,155,15,18]
                    }

                ]
        });
});
