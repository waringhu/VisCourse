function bar(xAxisData, postWay, gradeSale) {
	let myChart = echarts.init(document.getElementById('bar'))
	var labelOption = {
		show: true,
		position: 'insideBottom',
		distance: 15,
		align: 'left',
		verticalAlign: 'middle',
		rotate: 90,
		formatter: '{c}  {name|{a}}',
		fontSize: 16,
		rich: {
			name: {
				textBorderColor: '#fff'
			}
		}
	};
	let series = []
	for (let i in postWay) {
		let d = {
			name: postWay[i],
			type: "bar",
			barGap: i,
			label: labelOption,
			data: gradeSale[postWay[i]]
		}
		series.push(d)
	}

	option = {
		color: ['#003366', '#006699', '#4cabce', '#e5323e'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: postWay
		},

		xAxis: [{
			type: 'category',
			axisTick: {
				show: false
			},
			data: xAxisData
		}],
		yAxis: [{
			type: 'value'
		}],
		series: series
	}
	myChart.setOption(option);
	myChart.on('click', function (params) {
		// console.log(params)
		let name = params.name
		compare(name)

	})
}