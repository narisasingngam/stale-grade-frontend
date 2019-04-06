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
      title: 'Create web application for business',
      status: 'Not approved',
      due: '30 days',
      company: 'wongnnai'
    },
    {
      id: 2,
      title: 'Create data base for stocking goods',
      status: 'Approved',
      due: '15 days',
      company: 'sellsuki'
    },
    {
      id: 3,
      title: 'Create mobile application about traveller',
      status: 'Not approved',
      due: '10 days',
      company: 'agoda'
    },
    {
      id: 4,
      title: 'Sketch people',
      status: 'Not approved',
      due: '10 days',
      company: 'Din Sor See'
    },
    {
      id: 5,
      title: 'Create game',
      status: 'Not approve',
      due: '30 days',
      company: 'game sanook'
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
  },
  logout({ commit }) {
    commit('setCurrentUser', undefined)
  }
}
