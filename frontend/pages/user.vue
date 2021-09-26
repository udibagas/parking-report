<template>
	<div>
		<div class="d-flex mb-2">
			<div class="text-h6 ml-2">Kelola User ({{ totalItems }})</div>
		</div>

		<v-list-item
			v-for="user in items"
			:key="user.id"
			link
			:class="['mb-1  rounded', user.active ? 'white' : 'red lighten-4']"
			@click="
				form = { ...user }
				showForm = true
			"
		>
			<v-list-item-avatar :color="user.role ? 'green' : 'orange'">
				<v-icon dark v-if="user.role">mdi-shield-account</v-icon>
				<v-icon dark v-else>mdi-account-circle</v-icon>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title v-text="user.name"></v-list-item-title>
				<v-list-item-subtitle>
					{{ user.email }}
				</v-list-item-subtitle>
			</v-list-item-content>
			<v-list-item-action>
				<v-btn icon @click.stop="confirmDelete(user)" small>
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

		<v-dialog v-model="showForm" max-width="500">
			<v-card>
				<v-card-title class="mb-4">
					{{ form.id ? 'Edit' : 'Tambah' }} User
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
							v-model="form.name"
							:rules="rules.name"
							label="Nama"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.email"
							:rules="rules.email"
							label="Email"
						></v-text-field>

						<v-select
							outlined
							dense
							v-model="form.role"
							:rules="rules.role"
							label="Role"
							:items="[
								{ text: 'PELANGGAN', value: 0 },
								{ text: 'ADMIN', value: 1 },
							]"
						></v-select>

						<v-autocomplete
							outlined
							v-if="form.role == 0"
							dense
							v-model="form.customer_id"
							:rules="rules.customer_id"
							label="Pelanggan"
							:items="customerList"
							item-text="nama"
							item-value="id"
						></v-autocomplete>

						<v-text-field
							outlined
							dense
							v-model="form.password"
							:rules="rules.password"
							type="password"
							label="Password"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.password_confirmation"
							type="password"
							label="Konfirmasi Password"
						></v-text-field>

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
import { mapState } from 'vuex'

export default {
	mixins: [crud],

	data() {
		return {
			url: '/api/user',
			paginated: '',
		}
	},

	computed: {
		...mapState(['customerList']),
	},

	mounted() {
		this.$store.dispatch('getCustomerList')
		this.getData()
	},
}
</script>
