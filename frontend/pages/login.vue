<template>
	<div>
		<div class="text-h5 text-center mt-15 mb-6 white--text">PARKING REPORT</div>
		<v-card style="width: 300px; margin: 80px auto 0" elevation="3">
			<v-card-text>
				<div class="text-center">
					<v-avatar class="mt-n12 mb-6" color="indigo darken-1" size="75">
						<v-icon size="50" dark>mdi-account</v-icon>
						<!-- <img src="/logo.jpeg" alt="" style="width: 70px; height: 70px" /> -->
					</v-avatar>
				</div>
				<v-form lazy-validation ref="form" class="py-6">
					<v-text-field
						label="User/Email"
						placeholder="Masukkan nama/email Anda"
						outlined
						dense
						v-model="form.email"
						:rules="rules.email"
						hide-details
						class="mb-6"
						prepend-inner-icon="mdi-account-circle-outline"
					></v-text-field>

					<v-text-field
						label="Password"
						type="password"
						placeholder="Password"
						outlined
						dense
						v-model="form.password"
						:rules="rules.password"
						hide-details
						class="mb-6"
						prepend-inner-icon="mdi-lock-outline"
					></v-text-field>
				</v-form>
			</v-card-text>
		</v-card>

		<div class="text-center d-block mt-n4">
			<v-btn
				style="width: 120px"
				color="indigo darken-1"
				dark
				@click.stop="login"
			>
				LOGIN
			</v-btn>
		</div>

		<div class="text-center my-6 white--text">
			MitraTeknik &copy; {{ new Date().getFullYear() }}
		</div>
	</div>
</template>

<script>
export default {
	layout: 'login',

	data() {
		return {
			form: {},
			rules: {},
		}
	},

	methods: {
		login() {
			this.$auth
				.loginWith('cookie', { data: this.form })
				.then((r) => this.$router.push('/'))
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
		},
	},
}
</script>

<style lang="scss" scoped>
</style>
