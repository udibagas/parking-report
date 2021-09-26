<template>
	<v-card flat :key="i" class="mb-2">
		<v-card-text>
			<div class="d-flex">
				<div class="flex-grow-1">
					<div>{{ title }}</div>
					<div class="text-h4 indigo--text">Rp. 120.000</div>
					<div><v-icon left small>mdi-car-multiple</v-icon>20 Kendaraan</div>
				</div>
				<!-- <v-btn icon color="grey darken-1" large v-on="on" v-bind="attrs">
						<v-icon>mdi-chart-pie</v-icon>
					</v-btn> -->
			</div>

			<br />

			<div class="d-flex">
				<div class="flex-grow-1">
					<div>Umum</div>
					<div class="text-h6 purple--text">Rp. 120.000</div>
					<div><v-icon left small>mdi-car-multiple</v-icon>20 Kendaraan</div>
				</div>

				<div>
					<div>Compliment</div>
					<div class="text-h6 orange--text">Rp. 120.000</div>
					<div><v-icon left small>mdi-car-multiple</v-icon>20 Kendaraan</div>
				</div>
			</div>

			<v-expand-transition>
				<div v-if="showChart">
					<PieChart
						label="Pandapatan"
						title="UMUM"
						subtext="Pendapatan Berdasarkan Jenis Kendaraan"
					/>

					<PieChart
						label="Jumlah Kendaraan"
						title="UMUM"
						subtext="Jumlah Kendaraan Berdasarkan Jenis Kendaraan"
					/>

					<PieChart
						label="Pandapatan"
						title="COMPLIMENT"
						subtext="Pendapatan Berdasarkan Jenis Kendaraan"
					/>

					<PieChart
						label="Jumlah Kendaraan"
						title="COMPLIMENT"
						subtext="Jumlah Kendaraan Berdasarkan Jenis Kendaraan"
					/>
				</div>
			</v-expand-transition>
		</v-card-text>

		<v-btn block text x-small color="grey" @click="showChart = !showChart">
			<v-icon v-if="!showChart">mdi-chevron-down</v-icon>
			<v-icon v-else>mdi-chevron-up</v-icon>
		</v-btn>
	</v-card>
</template>

<script>
export default {
	props: ['title'],

	data() {
		return {
			showChart: false,
		}
	},
}
</script>

