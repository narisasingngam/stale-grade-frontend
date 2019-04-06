export const state = () => ({
  users: [
    {
      username: 'smartkung',
      activeJobs: ['1', '2', '3', '4'],
      doneJobs: ['5'],
      role: 'student'
    },
    {
      username: 'iamsysadmin',
      allJobs: ['1', '2'],
      role: 'sysad'
    }
  ],
  currentUser: undefined,
  jobs: [
    {
      id: 1,
      title: 'Do this'
    },
    {
      id: 2,
      title: 'Do that'
    },
    {
      id: 3,
      title: 'Do Those'
    },
    {
      id: 4,
      title: 'Do These'
    },
    {
      id: 5,
      title: 'Do now'
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
