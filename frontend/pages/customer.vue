<template>
	<div>
		<div class="d-flex mb-2">
			<div class="text-h6 ml-2">Kelola Pelanggan ({{ totalItems }})</div>
		</div>

		<v-list-item
			v-for="customer in items"
			:key="customer.id"
			link
			class="mb-1 rounded white"
			@click="
				form = { ...customer }
				showForm = true
			"
		>
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

			<v-list-item-action>
				<v-btn icon @click.stop="confirmDelete(customer)" small>
					<v-icon color="grey">mdi-delete</v-icon>
				</v-btn>
			</v-list-item-action>
		</v-list-item>

		<DeleteConfirmation
			:show="dialogDelete"
			@cancel="dialogDelete = false"
			@delete="deleteData"
		/>

		<v-btn
			color="indigo"
			fab
			dark
			fixed
			bottom
			right
			@click="
				form = {}
				showForm = true
			"
		>
			<v-icon>mdi-plus</v-icon>
		</v-btn>

		<v-dialog v-model="showForm" max-width="400">
			<v-card>
				<v-card-title class="mb-4">
					{{ form.id ? 'Edit' : 'Tambah' }} Pelanggan
					<v-spacer></v-spacer>
					<v-btn icon @click="showForm = false" small>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>

				<v-card-text>
					<v-form ref="form" lazy-validation>
						<v-text-field
							outlined
							dense
							v-model="form.nama"
							:rules="rules.nama"
							label="Nama"
						></v-text-field>

						<v-textarea
							outlined
							dense
							rows="2"
							auto-grow
							v-model="form.alamat"
							:rules="rules.alamat"
							label="Alamat"
						></v-textarea>

						<v-menu transition="scale-transition" min-width="auto">
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-on="on"
									v-bind="attrs"
									label="Masa aktif"
									placeholder="Masa aktif"
									readonly
									dense
									outlined
									:value="
										form.masa_aktif
											? $moment(form.masa_aktif).format('DD/MMM/YYYY')
											: ''
									"
									:rules="rules.masa_aktif"
								></v-text-field>
							</template>

							<v-date-picker v-model="form.masa_aktif" no-title>
							</v-date-picker>
						</v-menu>

						<v-textarea
							outlined
							dense
							v-model="form.id"
							label="ID"
							v-if="form.id"
							rows="2"
							auto-grow
							readonly
						></v-textarea>

						<v-switch
							v-model="form.active"
							:label="form.active ? 'AKTIF' : 'NONAKTIF'"
						></v-switch>
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text @click="showForm = false"> BATAL </v-btn>
					<v-btn color="primary" text @click="saveData"> SIMPAN </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
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
