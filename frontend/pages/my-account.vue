<template>
	<v-card :loading="loading" flat>
		<v-card-title> My Account </v-card-title>

		<v-divider></v-divider>

		<v-card-text>
			<v-form ref="form" lazy-validation>
				<v-text-field
					outlined
					dense
					v-model="form.name"
					label="Nama"
				></v-text-field>

				<v-text-field
					outlined
					dense
					v-model="form.email"
					label="Email"
				></v-text-field>

				<v-text-field
					outlined
					dense
					v-model="form.password"
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

				<v-btn color="primary" block elevation="0" large @click="save">
					SIMPAN
				</v-btn>
			</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			form: { ...this.$auth.user },
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
					// this.$notifier.showMessage({
					// 	content: r.data.message,
					// 	color: 'success',
					// })
				})
				.catch((e) => {
					if (e.response.status == 422) {
						this.rules = e.response.data.errors
						this.$refs.form.validate()
					} else {
						this.$notifier.showMessage({
							content: e.response.data.message,
							color: 'error',
						})
					}
				})
				.finally(() => (this.loading = false))
		},
	},
}
</script>
