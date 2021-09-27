<template>
	<v-chart class="chart py-6" :option="chartOption"></v-chart>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'

import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	GridComponent,
} from 'echarts/components'

import VChart, { THEME_KEY } from 'vue-echarts'

use([
	CanvasRenderer,
	PieChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	GridComponent,
])

export default {
	props: ['title', 'subtext', 'label', 'data'],

	components: { VChart },

	provide: {
		[THEME_KEY]: 'light',
	},

	data() {
		return {
			// data: [
			// 	{ name: 'a', value: 2 },
			// 	{ name: 'b', value: 3 },
			// ],
			chartOption: {
				title: {
					show: true,
					text: this.title,
					left: 'center',
					subtext: this.subtext,
				},
				tooltip: {
					trigger: 'item',
					formatter: `{a} <br/>{b} : {c} ({d}%)`,
				},
				legend: {
					orient: 'vertical',
					top: 'bottom',
					left: 'left',
					// data: ['a', 'b'],
					data: this.data.map((d) => d.name),
					formatter: (n) => {
						const { name, value } = this.data.find((d) => d.name == n)
						return `${name}: ${this.$decimal(value)}`
					},
				},
				series: [
					{
						name: this.label,
						type: 'pie',
						radius: '50%',
						center: ['50%', '50%'],
						data: this.data,
						// data: [
						// 	{ name: 'a', value: 2 },
						// 	{ name: 'b', value: 3 },
						// ],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
							},
						},
					},
				],
			},
		}
	},
}
</script>

<style scoped>
.chart {
	height: 300px;
}
</style>
