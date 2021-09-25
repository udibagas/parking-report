export const state = () => ({
  customerList: [],
})

export const mutations = {
  setCustomerList(state, data) {
    state.customerList = data
  },
}

export const actions = {
  async getCustomerList({ commit }) {
    const data = await this.$axios.$get('/api/customer')
    commit('setCustomerList', data)
  },
}
