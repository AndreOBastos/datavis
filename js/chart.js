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
                        width:900,
                        height:700,
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
                yAxis: {title: {text: '<b>Presença em %</b>'}},
                credits: {
                    enabled: false
                },
                tooltip: {
                        formatter: function() {
                                return 'The presence for <b>' + this.x + '</b> is <b>' + this.y + '</b> %, in '+ this.series.name;
                    }
                },
                legend: {
                    itemStyle:{
                        color:'#808080',
                        fontSize: '16px'
                    }
                },
                series:
                [
                    {
                        name: 'safe lane',
                        color: '#FF8974',
                        data: [43.21,0,79.38,20.38,77.24,17.78,6.30,75.56,39.15,14.49]
                    },
                    {
                        name: 'mid lane',
                        color: '#ED3C1C',
                        data: [21.82,81.97,0,7.29,6.79,42.63,90.06,6.47,37.81,44.73]
                    },
                    {
                        name: 'off lane',
                        color: '#BE2509',
                        data: [35.55,12.21,13.01,19.58,14.94,36.24,0,17.44,21.72,40.11]
                    },
                    {
                        name: 'jungle',
                        color:'#961700',
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
                legend: {
                    itemStyle:{
                        color:'#808080',
                        fontSize: '16px'
                    }
                },
                series:
                [
                    {
                        name: 'International 2014',
                        color: '#FF8974',
                        data: [126,123,63,19,7,195,29,106,126,140]
                    },
                    {
                        name: 'International 2015',
                        color: '#961700',
                        data: [8,1,179,190,163,7,199,155,15,18]
                    }

                ]
        });
        $('#highchart5').highcharts({
            colors: ["#ED3B1C"],
                chart: {
                    type:'column',
                    style: {
                        fontFamily: "Radiance"
                    },
                    backgroundColor: 'transparent',
                    width:900,
                    height:700,
                    spacingLeft:50,
                    spacingight:50
                },
                title: {
                    text: '<b>Ganhos totais por personalidade e por ano</b>',
                    style:{
                        color:'#808080'
                    }
                },
                xAxis: {
                    categories: ['ppd','UNiVeRsE','Fear','Aui_2000','SumaiL','xiao8','Hao','Puppey','Mu','Banana']
                },
                yAxis: {
                    title: {
                        text: '<b>Ganhos totais</b>'
                    },
                    stackLabels:{
                        enabled:true,
                        style: {
                            //fontWeight: 'bold',
                            color: '#808080',
                            textShadow:false
                        },
                        formatter: function() {
                            return '$' + this.total.toLocaleString(); 
                        }
                        
                    },
                    min:0,
                    reversedStacks:false
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                        formatter: function() {
                                return '<b>' + this.x + ':</b><br> $' + this.y.toLocaleString() + ' em '+ this.series.name;
                    }
                },
                legend: {
                    itemStyle:{
                        color:'#808080',
                        fontSize: '16px'
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        minPointLength: 6
                    }
                },
                series:
                [
                    {
                        name: '2011',
                        color: '#F2B8AE',
                        data: [0, 4166.67, 4324.33, 0, 0, 10640.95, 1415.80, 203870.06, 1104.85, 2367.45]
                    },
                    {
                        name: '2012',
                        color: '#F07964',
                        data: [9666.67, 1476.94, 3582.20, 4000.00, 0, 42568.82, 8267.43, 62922.60, 8267.43, 0]
                    },
                    {
                        name: '2013',
                        color: '#ED3B1C',
                        data: [7012.32, 5124.06, 7591.09, 20178.01, 0, 16213.62, 61937.89, 155010.38, 61054.35, 61616.06]
                    },
                    {
                        name: '2014',
                        color:'#BA2E16',
                        data: [313493.63, 312493.63, 78512.09, 215791.69, 0, 1032369.94, 1112280.99, 189893.70, 1098069.21, 1112280.99]
                    },
                    {
                        name: '2015',
                        color: '#6D1B0D',
                        data: [1730076.34, 1730076.34, 1730076.34, 1641750.94, 1730076.34, 560409.39, 383286.25, 446222.82, 31315.26, 31315.26]
                    },
                    {
                        name: '2016',
                        color: '#6D372E',
                        data: [118691.80, 114628.00, 118691.80, 16308.00, 118691.80, 53400.00, 97843.80, 236886.40, 97843.80, 0]
                    }
                ]
        });
		
		$('#highchart6').highcharts({
       colors: ["#ED3B1C"],
        chart: {
            type: 'bar',
			style: {
                            fontFamily: "Radiance"
                        },
                        width:900,
			backgroundColor: 'transparent'
        },
        title: {
            text: 'Heróis com maior presença nos pubs',
			style:{color:'#808080'}
        },
        xAxis: {
            categories: ['Lion', 'Slark', 'Lifestealer', 'Invoker', 'Timbersaw','Mirana','Bounty Hunter', 'Riki', 'Slardar', 'Faceless Void'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
			max: 100,
            title: {
                text: 'Presença nas partidas (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
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
        series: [{
            name: 'Presença',
            data: [35.15, 33.85, 31.5, 30.39, 27.68, 26.33, 25.68, 25.53, 23.32, 22.77]
        }]
    });
	
	  $('#highchart7').highcharts({
       colors: ["#ED3B1C"],
        chart: {
            type: 'bar',
			style: {
                            fontFamily: "Radiance"
                        },
                        width:900,
			backgroundColor: 'transparent'
        },
        title: {
            text: 'Heróis com maior presença no competitivo',
			style:{color:'#808080'}
        },
        xAxis: {
            categories: ['Beastmaster', 'Dark Seer', 'Alchemist', 'Lifestealer', 'Invoker','Earth Spirit','Doom', 'Bounty Hunter', 'Slardar', 'Lion'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
			max: 100,
            title: {
                text: 'Presença nas partidas (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
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
        series: [{
            name: 'Presença',
            data: [84, 67, 60, 59, 58, 56, 56, 53, 53, 51]
        }]
    });
	
	
	    $('#highchart8').highcharts({
	colors: ["#ED3B1C"],
        chart: {
            type: 'bar',
			style: {
                            fontFamily: "Radiance"
                        },
                        width:900,
			backgroundColor: 'transparent'
        },
        title: {
            text: 'Diferença entre a presença dos heróis nos pubs e no competitivo',
			style:{color:'#808080'}
        },
        xAxis: {
            categories: ['Beastmaster', 'Dark Seer', 'Io', 'Death Prophet', 'Alchemist','Doom','Earth Spirit', 'Batrider', 'Enchantress', 'Vengeful Spirit'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
			max: 100,
            title: {
                text: 'Diferença (%)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
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
        series: [{
            name: 'Diferença',
            data: [70, 56.87, 44.39, 42.92, 42.86, 42.29, 41.37, 39.37, 36.17, 30.12]
        }]
    });
});
