export const state = () => ({
  users: [
    {
      username: 'smartkung',
      activeJobs: [1],
      doneJobs: [2],
      role: 'student'
    },
    {
      username: 'iamsysadmin',
      role: 'sysad'
    }
  ],
  currentUser: undefined,
})

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  }
}

export const actions = {
  login({ commit }, user) {
    commit('setCurrentUser', user)
  }
}
