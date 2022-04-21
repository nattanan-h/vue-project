export const state = () => ({
  drawer: false
})

export const mutations = {
  set_drawer (state, newstate) {
    state.drawer = newstate
  }
}
