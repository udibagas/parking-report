<template>
	<div>
		<div class="text-h6 ml-2 mb-3">My Account</div>
		<v-card :loading="loading" flat>
			<v-card-text>
				<v-form ref="form" lazy-validation>
					<v-subheader class="mb-4">
						<v-icon left>mdi-account-circle-outline</v-icon>
						Informasi User
					</v-subheader>

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

					<v-subheader v-if="form.customer" class="mb-4">
						<v-icon left>mdi-badge-account-horizontal-outline</v-icon>
						Informasi Pelanggan
					</v-subheader>

					<v-text-field
						v-if="form.customer"
						outlined
						dense
						v-model="form.customer.nama"
						:rules="rules['customer.nama']"
						required
						label="Nama Pelanggan"
					></v-text-field>

					<v-textarea
						v-if="form.customer"
						outlined
						dense
						v-model="form.customer.alamat"
						:rules="rules['customer.alamat']"
						label="Alamat"
						rows="2"
						auto-grow
						required
					></v-textarea>

					<v-text-field
						label="Masa aktif"
						placeholder="Masa aktif"
						readonly
						dense
						outlined
						:value="
							form.customer.masa_aktif
								? $moment(form.customer.masa_aktif).format('DD/MMM/YYYY')
								: ''
						"
					></v-text-field>

					<v-textarea
						v-if="form.customer"
						readonly
						outlined
						dense
						auto-grow
						rows="2"
						v-model="form.customer.id"
						label="ID Pelanggan"
					></v-textarea>

					<v-btn color="primary" block elevation="0" large @click="save">
						SIMPAN
					</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: JSON.parse(JSON.stringify(this.$auth.user)),
			rules: {},
			loading: false,
		}
	},

	methods: {
		save() {
			this.loading = true

			this.$axios
				.$put(`/api/user/${this.form.id}`, this.form)
				.then((r) => {
					this.$notifier.showMessage({
						content: r.message,
						color: 'success',
					})
					this.$refs.form.resetValidation()
					this.$auth.setUser(r.data)
				})
				.catch((e) => {
					if (e.response.status == 422) {
						this.rules = e.response.data.errors
						this.$refs.form.validate()
					}

					this.$notifier.showMessage({
						content: e.response.data.message,
						color: 'error',
					})
				})
				.finally(() => (this.loading = false))
		},
	},
}
</script>
