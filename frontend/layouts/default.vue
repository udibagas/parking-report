<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed app>
			<v-list>
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
			</v-list>
		</v-navigation-drawer>
		<v-app-bar fixed app flat color="#180044" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
		</v-app-bar>
		<v-main style="background: #f7f7f7">
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	middleware: ['auth'],
	data() {
		return {
			drawer: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Dashboard',
					to: '/',
				},
				{
					icon: 'mdi-account',
					title: 'User',
					to: '/user',
				},
				{
					icon: 'mdi-account',
					title: 'Customer',
					to: '/customer',
				},
			],
			title: 'Parking Report',
		}
	},
}
</script>
