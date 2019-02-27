const book = {
  state: {
    test: 1
  },
  mutations: {
    'set_Test': (state, newTest) => {
      state.test = newTest
    }
  },
  actions: {
    setTest: ({ commit, state }, newTest) => {
      return commit('set_Test', newTest)
    }
  }
}
export default book
