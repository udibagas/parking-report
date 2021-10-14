<template>
	<v-list rounded>
		<v-list-item-group color="indigo">
			<v-list-item v-for="customer in items" :key="customer.id" link>
				<v-list-item-avatar
					:color="customer.active ? 'green' : 'red'"
					class="d-none d-sm-flex"
				>
					<v-icon dark>mdi-badge-account-horizontal-outline</v-icon>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title v-text="customer.nama"></v-list-item-title>
					<v-list-item-subtitle>
						Masa Aktif:
						{{
							customer.masa_aktif
								? $moment(customer.masa_aktif).format('DD/MMM/YY')
								: '-'
						}}
						<br />
						Update Terakhir:
						{{
							customer.last_update
								? $moment(customer.last_update).format('DD/MMM/YY HH:mm')
								: '-'
						}}
					</v-list-item-subtitle>
				</v-list-item-content>

				<v-chip :color="colors[customer.status]" dark small>{{
					customer.status.toUpperCase()
				}}</v-chip>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
import crud from '~/mixins/crud'

export default {
	mixins: [crud],

	data() {
		return {
			url: '/api/customer',
			paginated: '',
			colors: {
				aktif: 'green',
				nonaktif: 'red',
				expired: 'grey',
			},
		}
	},

	mounted() {
		this.getData()
	},
}
</script>
