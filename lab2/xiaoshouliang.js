function saleComNumber(date,sales,salenumber){
	
	let myChart = echarts.init(document.getElementById('saleCom'))
	option = {
	    title: {
	        text: '销售额与销售量关系图',
	        // subtext: '数据来自西安兰特水电测控技术有限公司',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            animation: false
	        }
	    },
	    legend: {
	        data: ['销售额', '销售量'],
	        left: 10
	    },
	   
	    axisPointer: {
	        link: {xAxisIndex: 'all'}
	    },
	  
	    grid: [{
	        left: 50,
	        right: 50,
	        height: '35%'
	    }, {
	        left: 50,
	        right: 50,
	        top: '55%',
	        height: '35%'
	    }],
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            axisLine: {onZero: true},
	            data: date
	        },
	        {
	            gridIndex: 1,
	            type: 'category',
	            boundaryGap: false,
	            axisLine: {onZero: true},
	            data: date,
	            position: 'top'
	        }
	    ],
	    yAxis: [
	        {
	            name: '销售额',
	            type: 'value',
	            // max: 500
	        },
	        {
	            gridIndex: 1,
	            name: '销售量',
	            type: 'value',
	            inverse: true
	        }
	    ],
	    series: [
	        {
	            name: '销售量',
	            type: 'line',
	            symbolSize: 8,
	            hoverAnimation: false,
	            data: sales
	        },
	        {
	            name: '销售额',
	            type: 'line',
	            xAxisIndex: 1,
	            yAxisIndex: 1,
	            symbolSize: 8,
	            hoverAnimation: false,
	            data: salenumber
	        }
	    ]
	};
	myChart.setOption(option);
}