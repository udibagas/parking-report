<template>
	<div style="max-width: 500px; margin: 0 auto">
		<Summary
			v-for="i in ['Hari Ini', 'Bulan Ini', 'Total']"
			:key="i"
			:title="i"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabs: [
				{ title: 'Harian', content: 'Harian' },
				{ title: 'Bulanan', content: 'Bulanan' },
			],
			tab: null,
		}
	},
}
</script>

