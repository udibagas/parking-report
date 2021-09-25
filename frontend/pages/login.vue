<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="12" md="4">
			<v-card flat>
				<v-card-text>
					<div class="my-6 text-center">
						<img src="/logo.jpeg" alt="" />
						<div class="text-h5 text-center mb-6">PARKING REPORT</div>
					</div>

					<v-form lazy-validation ref="form">
						<v-text-field
							label="User/Email"
							placeholder="Masukkan nama/email Anda"
							outlined
							dense
							v-model="form.email"
							:rules="rules.email"
							hide-details
							class="mb-6"
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
						></v-text-field>

						<v-btn block color="primary" elevation="0" @click.stop="login">
							LOGIN
						</v-btn>

						<div class="text-center my-6">
							MitraTeknik &copy; {{ new Date().getFullYear() }}
						</div>
					</v-form>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
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
				})
		},
	},
}
</script>

<style lang="scss" scoped>
</style>
