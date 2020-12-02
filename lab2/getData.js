function main() {
	$.get("supermark.json", function (params) {
		console.log(params)
		let data = params.data;
		const debuplication = arr => [...new Set(arr)]
		let monthWinDate = []
		let postWay = []
		let sales = {
			'一级': [],
			'二级': [],
			'当日': [],
			'标准级': []
		}
		for (let i = 0; i < data.length; i++) {
			postWay.push(data[i]['邮寄方式'])
			monthWinDate.push(data[i]['订单日期'])
			switch (data[i]['邮寄方式']) {
				case '一级':
					sales['一级'].push(data[i]['销售额'])
					break;
				case '二级':
					sales['二级'].push(data[i]['销售额'])
					break;
				case '当日':
					sales['当日'].push(data[i]['销售额'])
					break;
				case '标准级':
					sales['标准级'].push(data[i]['销售额'])
					break;
			}
		}
		// console.log(monthWinDate)
		monthWinDate = debuplication(monthWinDate)
		postWay = debuplication(postWay)
		bar(monthWinDate, postWay, sales)
	})
}

function compare(name) {
	let saleNumbers = []
	let saleGrade = ['一级', '二级', '当日', '标准级']
	$.get('supermark.json', function (params) {
		let data = params.data
		for (let i in data) {
			if (data[i]['订单日期'] === name) {
				saleNumbers.push(data[i]['数量'])
			}
		}
		// console.log(saleNumbers)
		postWayCompare(saleNumbers, saleGrade)
	})

}

function saleCompare(name) {
	let date = []
	let salenumber = []
	let sales = []
	$.get('supermark.json', function (params) {
		let data = params.data
		for (let i in data) {
			if (data[i]['邮寄方式'] === name) {
				date.push(data[i]['订单日期'])
				salenumber.push(data[i]['数量'])
				sales.push(data[i]['销售额'])
			}
		}
		saleComNumber(date, sales, salenumber)
	})
}