<template>
	<div>
		<div class="d-flex mb-2">
			<div class="text-h6 ml-2">Kelola Tarif ({{ totalItems }})</div>
		</div>

		<v-list-item
			v-for="item in items"
			:key="item.id"
			link
			class="mb-1 eounded white"
			@click="
				form = { ...item }
				showForm = true
			"
		>
			<v-list-item-avatar color="purple">
				<v-icon dark>mdi-car</v-icon>
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title v-text="item.nama"></v-list-item-title>
				<v-list-item-subtitle>
					{{
						item.mode_tarif == 0
							? 'Flat = Rp. ' + $decimal(item.tarif_flat)
							: 'Progresif = Max Rp.' + $decimal(item.tarif_maksimum)
					}}
				</v-list-item-subtitle>
			</v-list-item-content>
			<v-list-item-action>
				<v-btn icon @click.stop="confirmDelete(item)" small>
					<v-icon color="grey">mdi-delete</v-icon>
				</v-btn>
			</v-list-item-action>
		</v-list-item>

		<DeleteConfirmation
			:show="dialogDelete"
			@cancel="dialogDelete = false"
			@delete="deleteData"
		/>

		<v-btn
			color="indigo"
			fab
			dark
			fixed
			bottom
			right
			@click="
				form = {}
				showForm = true
			"
		>
			<v-icon>mdi-plus</v-icon>
		</v-btn>

		<v-dialog v-model="showForm" max-width="500">
			<v-card>
				<v-card-title class="mb-4">
					{{ form.id ? 'Edit' : 'Tambah' }} Tarif
					<v-spacer></v-spacer>
					<v-btn icon @click="showForm = false" small>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>

				<v-card-text>
					<v-form ref="form" lazy-validation>
						<v-text-field
							outlined
							dense
							v-model="form.nama"
							:rules="rules.nama"
							label="Jenis Kendaraan"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.group"
							:rules="rules.group"
							label="Group"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.shortcut_key"
							:rules="rules.shortcut_key"
							label="Shortcut"
							type="number"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.denda_tiket_hilang"
							:rules="rules.denda_tiket_hilang"
							label="Denda Tiket Hilang (Rp)"
							type="number"
						></v-text-field>

						<v-text-field
							outlined
							dense
							v-model="form.tarif_menginap"
							:rules="rules.tarif_menginap"
							label="Tarif Menginap (Rp)"
							type="number"
						></v-text-field>

						<v-select
							outlined
							dense
							v-model="form.mode_tarif"
							:rules="rules.mode_tarif"
							label="Mode Tarif"
							:items="[
								{ text: 'Flat', value: 0 },
								{ text: 'Progresif', value: 1 },
							]"
						></v-select>

						<v-text-field
							v-if="form.mode_tarif == 0"
							outlined
							dense
							v-model="form.tarif_flat"
							:rules="rules.tarif_flat"
							label="Tarif Flat (Rp)"
							type="number"
						></v-text-field>

						<v-text-field
							v-if="form.mode_tarif == 1"
							outlined
							dense
							v-model="form.tarif_maksimum"
							:rules="rules.tarif_maksimum"
							label="Tarif Maximum (Rp)"
							type="number"
						></v-text-field>

						<v-text-field
							v-if="form.mode_tarif == 1"
							outlined
							dense
							v-model="form.menit_pertama"
							:rules="rules.menit_pertama"
							label="Menit Pertama"
							type="number"
						></v-text-field>

						<v-text-field
							v-if="form.mode_tarif == 1"
							outlined
							dense
							v-model="form.tarif_menit_pertama"
							:rules="rules.tarif_menit_pertama"
							label="Tarif Menit Pertama (Rp)"
							type="number"
						></v-text-field>

						<v-text-field
							v-if="form.mode_tarif == 1"
							outlined
							dense
							v-model="form.menit_selanjutnya"
							:rules="rules.menit_selanjutnya"
							label="Menit Selanjutnya"
							type="number"
						></v-text-field>

						<v-text-field
							v-if="form.mode_tarif == 1"
							outlined
							dense
							v-model="form.tarif_menit_selanjutnya"
							:rules="rules.tarif_menit_selanjutnya"
							label="Tarif Menit Selanjutnya (Rp)"
							type="number"
						></v-text-field>

						<!-- <v-switch v-model="form.is_default" label="Default"></v-switch> -->
					</v-form>
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text @click="showForm = false"> BATAL </v-btn>
					<v-btn color="primary" text @click="saveData"> SIMPAN </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import crud from '~/mixins/crud'

export default {
	mixins: [crud],

	data() {
		return {
			url: '/api/tarif',
			paginated: '',
		}
	},

	mounted() {
		this.getData()
	},
}
</script>
