export default {
  data() {
    return {
      filters: {},
      sort: null,
      sort_direction: null,
      loading: true,
      selectedData: [],
      selectedRow: {},
      rules: {},
      form: {},
      showForm: false,
      dialogDelete: false,
      items: [],
      totalItems: 0,
      paginated: true,
      options: {
        page: 1,
        itemsPerPage: 10,
        sortBy: [],
        sortDesc: [false],
        groupBy: false,
        groupDesc: false,
        multiSort: false,
        mustSort: false,
      },
      yesNoFilter: [
        { value: 'yes', text: 'Yes' },
        { value: 'no', text: 'No' },
      ],
    }
  },

  // mounted() {
  //   this.getData();
  // },

  watch: {
    options: {
      deep: true,
      handler() {
        this.getData()
      },
    },

    tenant_id: {
      handler() {
        this.getData()
      },
    },
  },

  methods: {
    searchData() {
      this.options.page = 1
      this.getData()
    },

    getData() {
      this.loading = true
      const params = {
        ...this.options,
        ...this.filters,
        paginated: this.paginated,
        sort_field: this.options.sortBy[0],
        sort_direction: this.options.sortDesc[0] ? 'desc' : 'asc',
      }

      this.$axios
        .$get(this.url, { params })
        .then((r) => {
          if (this.paginated) {
            this.items = r.data
            this.totalItems = r.total
          } else {
            this.items = r
            this.totalItems = r.length
          }
        })
        .catch((e) => {
          this.$notifier.showMessage({
            content: e.response.data.message,
            color: 'error',
          })
        })
        .finally(() => (this.loading = false))
    },

    clearSearch() {
      this.options.page = 1
      this.filters.keyword = ''
      this.getData()
    },

    refreshData() {
      this.options.page = 1
      this.filters = {}
      this.getData()
    },

    saveData() {
      this.loading = true

      this.$axios({
        method: this.form.id ? 'put' : 'post',
        url: this.form.id ? `${this.url}/${this.form.id}` : this.url,
        data: this.form,
      })
        .then((r) => {
          this.closeForm()

          this.$notifier.showMessage({
            content: r.data.message,
            color: 'success',
          })

          this.refreshData()
          this.afterSave()
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

    afterSave() {},

    afterDelete() {},

    confirmDelete(item) {
      this.dialogDelete = true
      this.selectedRow = item
    },

    deleteData() {
      this.loading = true
      this.$axios
        .$delete(`${this.url}/${this.selectedRow.id}`)
        .then((r) => {
          this.dialogDelete = false

          this.$notifier.showMessage({
            content: r.message,
            color: 'success',
          })

          this.getData()
          this.afterDelete()
        })
        .catch((e) => {
          if (e.response.status) {
            this.$notifier.showMessage({
              content: e.response.data.message,
              color: 'error',
            })
          }
        })
        .finally(() => (this.loading = false))
    },

    openForm(item) {
      this.form = { ...item }
      this.selectedRow = { ...item }
      this.showForm = true
    },

    closeForm() {
      this.$refs.form.resetValidation()
      this.showForm = false
    },
  },
}
