<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed app>
			<div class="mt-6 mb-4 text-center">
				<v-avatar size="90" color="#180044">
					<span class="text-h3 white--text">
						{{ $auth.user.name.slice(0, 1).toUpperCase() }}
					</span>
				</v-avatar>
				<div class="mt-2 text-h5">{{ $auth.user.name }}</div>
				<div class="grey--text">{{ $auth.user.email }}</div>
			</div>

			<v-list shaped>
				<v-list-item-group color="#180044">
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
						:to="item.to"
						router
						exact
					>
						<v-list-item-action>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title v-text="item.title" />
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>

			<template v-slot:append>
				<div class="pa-2">
					<v-btn block @click.stop="logout" elevation="0"> Logout </v-btn>
				</div>
			</template>
		</v-navigation-drawer>

		<v-app-bar fixed app flat color="#180044" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
		</v-app-bar>

		<v-main style="background: #f7f7f7">
			<v-container>
				<Nuxt />
				<Snackbar></Snackbar>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	middleware: ['auth'],

	methods: {
		logout() {
			this.$auth.logout().then((r) => this.$router.push('/login'))
		},
	},

	data() {
		return {
			drawer: false,
			items: [
				{
					icon: 'mdi-view-dashboard',
					title: 'Dashboard',
					to: '/',
				},
				{
					icon: 'mdi-card-account-details-outline',
					title: 'My Account',
					to: '/my-account',
				},
				{
					icon: 'mdi-badge-account-horizontal-outline',
					title: 'Customer',
					to: '/customer',
				},
				{
					icon: 'mdi-account-group-outline',
					title: 'User',
					to: '/user',
				},
			],
			title: 'Parking Report',
		}
	},
}
</script>
