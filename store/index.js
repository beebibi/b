export const state = () => ({
  isHebrew: false
})

export const mutations = {
  translate(state) {
    state.isHebrew = !state.isHebrew
  }
}
