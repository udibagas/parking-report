<template>
	<v-snackbar
		v-model="show"
		style="z-index: 1000"
		:timeout="5000"
		:color="color"
	>
		<template v-slot:action>
			<v-btn icon plain small color="white" text @click="show = false">
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</template>
		{{ message }}
	</v-snackbar>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			message: '',
			color: '',
		}
	},
	created() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'snackbar/showMessage') {
				this.message = state.snackbar.content
				this.color = state.snackbar.color
				this.show = true
			}
		})
	},
}
</script>
