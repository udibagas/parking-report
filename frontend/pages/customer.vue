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
			<v-list-item-avatar :color="customer.active ? 'green' : 'red'">
				<v-icon dark>mdi-badge-account-horizontal-outline</v-icon>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title v-text="customer.nama"></v-list-item-title>
			</v-list-item-content>
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
			small
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

		<v-bottom-sheet v-model="showForm">
			<v-sheet>
				<div class="px-6 py-3 d-flex">
					<div class="text-h6">{{ form.id ? 'Edit' : 'Tambah' }} Pelanggan</div>
					<v-spacer></v-spacer>
					<v-btn icon @click="showForm = false" small>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</div>
				<v-divider></v-divider>
				<v-form
					ref="form"
					lazy-validation
					style="max-width: 400px; margin: 0 auto"
					class="pa-6"
				>
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
						rows="3"
						v-model="form.alamat"
						:rules="rules.alamat"
						label="Alamat"
					></v-textarea>

					<v-switch
						v-model="form.active"
						:label="form.active ? 'AKTIF' : 'NONAKTIF'"
					></v-switch>

					<v-btn color="primary" block elevation="0" large @click="saveData">
						SIMPAN
					</v-btn>
				</v-form>
			</v-sheet>
		</v-bottom-sheet>
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
		}
	},

	mounted() {
		this.getData()
	},
}
</script>
