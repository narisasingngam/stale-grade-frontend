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
      allJobs: [1, 2],
      role: 'sysad'
    }
  ],
  currentUser: undefined,
  jobs: [
    {
      id: 1,
      title: 'Do this',
      description: 'Minim voluptate mollit ad reprehenderit exercitation sit proident deserunt do culpa eiusmod.'
    },
    {
      id: 2,
      title: 'Do that'
    }
  ]
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
