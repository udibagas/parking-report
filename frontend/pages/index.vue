<template>
	<div>
		<v-card flat v-for="i in [1, 2, 3]" :key="i" class="mb-2">
			<v-card-text>
				<div class="d-flex">
					<div class="flex-grow-1">
						<div>Hari ini</div>
						<div class="text-h4 indigo--text">Rp. 120.000</div>
						<div><v-icon left small>mdi-car-multiple</v-icon>20 Kendaraan</div>
					</div>
					<div>
						<v-dialog>
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									icon
									color="grey darken-1"
									large
									v-on="on"
									v-bind="attrs"
								>
									<v-icon>mdi-chart-pie</v-icon>
								</v-btn>
							</template>
							<v-sheet class="pa-6">
								<PieChart
									title="UMUM"
									subtext="Pendapatan Berdasarkan Jenis Kendaraan"
									label="Pandapatan"
								/>
							</v-sheet>
						</v-dialog>
					</div>
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
			</v-card-text>
		</v-card>
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

