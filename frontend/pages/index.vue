<template>
	<div style="max-width: 500px; margin: 0 auto">
		<v-card flat class="mb-2" v-if="$auth.user.role == 0">
			<v-card-text class="d-flex">
				<div class="flex-grow-1">
					<div>
						<v-icon left small>mdi-car-multiple</v-icon>
						Terparkir
					</div>

					<div class="text-h4 my-2 indigo--text">
						{{ terparkir.reduce((t, c) => t + Number(c.jumlah), 0) }}
					</div>
				</div>

				<div class="ml-3">
					Update Terakhir <br />
					<div class="font-weight-medium purple--text mb-4">
						{{
							$auth.user.customer.last_update
								? $moment($auth.user.customer.last_update).format(
										'DD/MMM/YYYY HH:mm'
								  )
								: '-'
						}}
					</div>

					Masa Aktif <br />
					<div class="font-weight-medium purple--text mb-4">
						{{
							$auth.user.customer.masa_aktif
								? $moment($auth.user.customer.masa_aktif).format('DD/MMM/YYYY')
								: '-'
						}}
					</div>
				</div>
			</v-card-text>

			<v-card-text>
				<v-row>
					<v-col cols="6" v-for="item in terparkir" :key="item.group">
						<div class="d-flex purple--text">
							{{ item.group }}
							<v-spacer></v-spacer>
							{{ item.jumlah }}
						</div>

						<div
							class="d-flex outlined"
							v-for="(d, i) in item.detail"
							:key="`${i}-${item.group}`"
						>
							{{ d.jenis_kendaraan }}
							<v-spacer></v-spacer>
							<div>{{ d.jumlah }}</div>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>

		<div v-if="$auth.user.role == 0">
			<Summary
				v-for="(report, i) in reports"
				:key="i"
				:title="report.title"
				:date="report.date"
				:month="report.month"
				:year="report.year"
			/>
		</div>

		<v-card v-if="$auth.user.role == 1" flat>
			<v-card-text>
				<div class="indigo--text text-h6 mb-6 text-center">
					Selamat Datang {{ $auth.user.name }}!
				</div>

				<v-row>
					<v-col cols="6" class="text-center">
						<div class="indigo--text text-h3 my-1">
							{{ summary.customer }}
						</div>
						<div class="purple--text">CUSTOMER</div>
					</v-col>
					<v-col cols="6" class="text-center">
						<div class="indigo--text text-h3 my-1">
							{{ summary.user }}
						</div>
						<div class="purple--text">USER</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>

		<CustomerList class="my-3" v-if="$auth.user.role == 1" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			terparkir: [
				{
					group: 'UMUM',
					jumlah: 0,
					detail: [
						{ jenis_kendaraan: 'MOTOR', jumlah: 0 },
						{ jenis_kendaraan: 'MOBIL', jumlah: 0 },
					],
				},
				{
					group: 'COMPLIMENT',
					jumlah: 0,
					detail: [
						{ jenis_kendaraan: 'MOTOR', jumlah: 0 },
						{ jenis_kendaraan: 'MOBIL', jumlah: 0 },
					],
				},
			],

			reports: [
				{ title: 'Hari Ini', date: this.$moment().format('YYYY-MM-DD') },
				{
					title: 'Bulan Ini',
					month: this.$moment().format('MM'),
					year: this.$moment().format('YYYY'),
				},
				{ title: 'Total' },
			],

			summary: {
				customer: 0,
				user: 0,
			},

			colors: {
				aktif: 'green',
				nonaktif: 'red',
				expired: 'grey',
			},
		}
	},

	methods: {
		async getData() {
			this.terparkir = await this.$axios.$get('/api/terparkir')
		},

		async getSummary() {
			this.summary = await this.$axios.$get('/api/summary')
		},
	},

	mounted() {
		this.getData()
		this.getSummary()
	},
}
</script>

