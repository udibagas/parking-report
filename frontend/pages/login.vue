<template>
	<div>
		<div class="text-h5 text-center mt-10 white--text">PARKING REPORT</div>
		<v-card
			style="width: 320px; margin: 80px auto 0"
			elevation="5"
			rounded="xl"
		>
			<v-card-text>
				<div class="text-center">
					<v-avatar class="mt-n12 mb-4" color="indigo darken-5" size="75">
						<v-icon size="80" dark>mdi-account-circle</v-icon>
						<!-- <img src="/logo.jpeg" alt="" style="width: 70px; height: 70px" /> -->
					</v-avatar>
				</div>
				<v-form lazy-validation ref="form" class="py-6">
					<v-text-field
						label="User/Email"
						placeholder="Masukkan nama/email Anda"
						v-model="form.email"
						:rules="rules.email"
						hide-details
						outlined
						class="mb-6"
						prepend-inner-icon="mdi-account-circle-outline"
					></v-text-field>

					<v-text-field
						label="Password"
						type="password"
						placeholder="Password"
						outlined
						v-model="form.password"
						:rules="rules.password"
						hide-details
						class="mb-6"
						prepend-inner-icon="mdi-lock-outline"
					></v-text-field>
				</v-form>
			</v-card-text>
		</v-card>

		<div class="text-center d-block mt-n5">
			<v-btn
				style="width: 140px"
				color="indigo"
				dark
				large
				elevation="5"
				@click.stop="login"
				rounded
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
