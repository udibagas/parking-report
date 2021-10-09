<template>
	<v-card flat class="mb-2">
		<v-card-text>
			<div class="d-flex">
				<div class="flex-grow-1">
					<div>{{ title }}</div>
					<div class="text-h4 indigo--text my-2">
						Rp. {{ $decimal(totalPendapatan) }}
					</div>
					<div>
						<v-icon left small>mdi-car-multiple</v-icon>
						{{ $decimal(totalKendaraan) }} Kendaraan
					</div>
				</div>
				<!-- <v-btn icon color="grey darken-1" large v-on="on" v-bind="attrs">
						<v-icon>mdi-chart-pie</v-icon>
					</v-btn> -->
			</div>

			<br />

			<div class="d-flex">
				<div class="flex-grow-1" v-for="s in summary" :key="s.group">
					<div>{{ s.group }}</div>
					<div class="text-h6 purple--text">
						Rp. {{ $decimal(s.pendapatan) }}
					</div>
					<div>
						<v-icon left small>mdi-car-multiple</v-icon
						>{{ $decimal(s.jumlah_kendaraan) }} Kendaraan
					</div>
				</div>
			</div>

			<v-expand-transition>
				<div v-if="showChart">
					<PieChart
						v-for="s in summary"
						:key="`chart-pendapatan-${s.group}`"
						:title="s.group"
						:data="
							s.detail.map((d) => ({
								name: d.jenis_kendaraan,
								value: d.pendapatan,
							}))
						"
						label="Pandapatan"
						subtext="Pendapatan Berdasarkan Jenis Kendaraan"
					/>

					<PieChart
						v-for="s in summary"
						:key="`chart-jumlah-${s.group}`"
						:title="s.group"
						:data="
							s.detail.map((d) => ({
								name: d.jenis_kendaraan,
								value: d.jumlah_kendaraan,
							}))
						"
						label="Jumlah Kendaraan"
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
	props: ['title', 'date', 'month', 'year'],

	data() {
		return {
			showChart: false,
			summary: [],
		}
	},

	computed: {
		totalPendapatan() {
			return this.summary.reduce((total, prev) => {
				return Number(prev.pendapatan) + total
			}, 0)
		},
		totalKendaraan() {
			return this.summary.reduce((total, prev) => {
				return Number(prev.jumlah_kendaraan) + total
			}, 0)
		},
	},

	methods: {
		getData() {
			const params = {
				date: this.date,
				month: this.month,
				year: this.year,
			}

			this.$axios
				.$get('/api/report/', { params })
				.then((response) => {
					this.summary = response
				})
				.catch((e) => console.error(e))
		},
	},

	mounted() {
		this.getData()
	},
}
</script>

