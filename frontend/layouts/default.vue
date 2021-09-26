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
						v-for="(item, i) in menus"
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

					<v-list-item @click="logout">
						<v-list-item-action>
							<v-icon>mdi-logout</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>Logout</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>

			<!-- <template v-slot:append>
				<v-btn block @click.stop="logout" elevation="0"> Logout </v-btn>
			</template> -->
		</v-navigation-drawer>

		<v-app-bar fixed app flat color="#180044" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
		</v-app-bar>

		<v-main style="background: #f1f1f1">
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

	computed: {
		menus() {
			return this.$auth.user.role == 0
				? this.items.filter((i) => !i.admin)
				: this.items
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
					admin: false,
				},
				{
					icon: 'mdi-card-account-details-outline',
					title: 'My Account',
					to: '/my-account',
					admin: false,
				},
				{
					icon: 'mdi-badge-account-horizontal-outline',
					title: 'Customer',
					to: '/customer',
					admin: true,
				},
				{
					icon: 'mdi-account-group-outline',
					title: 'User',
					to: '/user',
					admin: true,
				},
			],
			title: 'Parking Report',
		}
	},
}
</script>
