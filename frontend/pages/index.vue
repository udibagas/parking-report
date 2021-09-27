<template>
	<div style="max-width: 500px; margin: 0 auto">
		<Summary
			v-for="(report, i) in reports"
			:key="i"
			:title="report.title"
			:date="report.date"
			:month="report.month"
			:year="report.year"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			reports: [
				{ title: 'Hari Ini', date: this.$moment().format('YYYY-MM-DD') },
				{
					title: 'Bulan Ini',
					month: this.$moment().format('MM'),
					year: this.$moment().format('YYYY'),
				},
				{ title: 'Total' },
			],
		}
	},
}
</script>

