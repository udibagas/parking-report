<template>
	<v-dialog v-model="show" max-width="400px">
		<v-card>
			<v-card-title>
				<v-spacer></v-spacer>
				<v-icon color="warning" left size="60">mdi-alert-circle-outline</v-icon>
				<v-spacer></v-spacer>
			</v-card-title>

			<div class="text-lg text-center mb-4">
				Anda yakin akan menghapus data ini?
			</div>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text @click="$emit('cancel')">BATAL</v-btn>
				<v-btn color="error" text @click="$emit('delete')"> HAPUS </v-btn>
				<v-spacer></v-spacer>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['show'],
}
</script>
