<template>
	<v-row justify="center" align="center" dense>
		<v-col cols="12" sm="6" md="4">
			<v-card flat>
				<v-card-text>
					<div>Hari ini</div>
					<div class="text-h6 purple--text">Rp. 120.000</div>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" sm="6" md="4">
			<v-card flat>
				<v-card-text>
					<div>Bulan Ini</div>
					<div class="text-h6 green--text">Rp. 120.000</div>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" sm="6" md="4">
			<v-card flat>
				<v-card-text>
					<div>Total</div>
					<div class="text-h6 indigo--text">Rp. 120.000</div>
				</v-card-text>
			</v-card>
		</v-col>

		<v-col cols="12" sm="6">
			<v-sheet rounded class="pa-6">
				<PieChart
					title="UMUM"
					subtext="Pendapatan Berdasarkan Jenis Kendaraan"
					label="Pandapatan"
				/>
			</v-sheet>
		</v-col>
		<v-col cols="12" sm="6">
			<v-sheet rounded class="pa-6">
				<PieChart
					title="COMPLIMENT"
					subtext="Pendapatan Berdasarkan Jenis Kendaraan"
					label="Pandapatan"
				/>
			</v-sheet>
		</v-col>
	</v-row>
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

