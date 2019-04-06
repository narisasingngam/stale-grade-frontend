export const state = () => ({
  users: [
    {
      username: 'smartkung',
      activeJobs: [1, 2, 3, 4],
      doneJobs: [0],
      role: 'student'
    },
    {
      username: 'wongnok',
      role: 'sysad',
      activeJobs: [1, 2],
      allJobs: [0, 1, 2, 3, 4]
    }
  ],
  currentUser: undefined,
  jobs: [
    {
      id: 0,
      title: 'Create web application for business',
      accepted: false,
      approved: false,
      due: '30 days',
      company: 'wongnnai',
      description: `
      Aliquip cillum consequat ea sint fugiat cupidatat nulla consectetur fugiat ut amet elit. Eu consequat aliquip fugiat amet Lorem ullamco eiusmod cupidatat et voluptate. Ea labore id voluptate qui reprehenderit laboris duis et cupidatat sint. Laboris ipsum voluptate do fugiat ipsum aute amet incididunt aliquip. Ipsum ullamco aute veniam in proident Lorem aliquip dolore. Sunt do eiusmod culpa non nulla laboris voluptate Lorem ullamco.
      \nMagna sunt cupidatat sit voluptate tempor consectetur enim Lorem nulla. Cupidatat qui Lorem sint enim ullamco est dolor veniam nostrud reprehenderit quis fugiat in. Officia consectetur nostrud deserunt labore duis non anim fugiat non non dolore consectetur minim. Do pariatur tempor mollit velit consectetur. Velit ea elit officia commodo. Ad id qui incididunt qui labore aliquip do non veniam cupidatat duis non cillum in. Laboris ad laboris in deserunt nisi ullamco mollit velit dolor.
      `
    },
    {
      id: 1,
      title: 'Create data base for stocking goods',
      accepted: true,
      approved: true,
      due: '15 days',
      company: 'sellsuki',
      description: `
       Ullamco incididunt officia culpa quis. Dolore est ad in ad ea culpa aliqua ullamco officia veniam aliqua adipisicing excepteur do. Esse tempor et ea excepteur anim. Occaecat anim mollit cillum consequat tempor id.
       \nDolore sit reprehenderit sunt do ullamco. Tempor sunt exercitation velit velit voluptate. Lorem occaecat labore ea cupidatat velit quis ipsum cillum.
       \nQui mollit minim laboris incididunt tempor tempor amet amet velit ex consectetur proident. Non consectetur eiusmod velit incididunt ipsum excepteur aliqua nisi velit excepteur. Nisi aute eiusmod dolore sint veniam eu sit sint pariatur et ex.
      `
    },
    {
      id: 2,
      title: 'Create mobile application about traveller',
      accepted: true,
      approved: false,
      due: '10 days',
      company: 'agoda',
      description: `
      Est anim eu incididunt nostrud id incididunt quis pariatur duis culpa veniam anim anim. Cupidatat aliqua esse nostrud reprehenderit amet aliqua eu ad et duis anim nisi sint. Enim proident irure cillum velit aute adipisicing laboris. Sit proident occaecat cupidatat laboris ipsum adipisicing occaecat do tempor deserunt occaecat sunt aute. Fugiat occaecat velit excepteur nulla nulla reprehenderit amet culpa. Ex ipsum dolor non eu aliquip in cupidatat. Minim quis dolor ut est.
      \nIpsum dolor quis Lorem pariatur pariatur occaecat anim sit ea ullamco labore. Occaecat ad minim commodo sint. Incididunt laboris nisi aute nulla ut tempor minim sunt. Eiusmod aliquip non adipisicing pariatur amet enim Lorem consectetur minim Lorem laboris ad nostrud ea.
      `
    },
    {
      id: 3,
      title: 'Sketch people',
      accepted: true,
      approved: false,
      due: '10 days',
      company: 'Din Sor See',
      description: `
      Lorem do ut qui culpa consectetur eu anim. Irure voluptate ad commodo elit sint voluptate est exercitation nulla occaecat ad. Esse officia magna velit adipisicing. Nulla consequat in sunt ut ex ipsum tempor voluptate velit excepteur incididunt. Ipsum commodo cupidatat nostrud mollit enim tempor voluptate Lorem excepteur voluptate aliquip labore qui id.
      \nEa veniam reprehenderit ea in aute aliqua nisi est dolore veniam fugiat. Proident dolore eu amet sit id irure ad esse aliqua non exercitation fugiat. Sint irure officia aliqua do magna ut adipisicing irure amet ut est duis in.
      `
    },
    {
      id: 4,
      title: 'Create game',
      accepted: true,
      approved: false,
      due: '30 days',
      company: 'game sanook',
      description: `
      Incididunt in pariatur velit adipisicing id excepteur proident cupidatat incididunt nostrud sint. Velit ad non est voluptate occaecat. Aliquip in mollit ad aliquip labore in eu minim. Et cupidatat velit ullamco nisi reprehenderit. Exercitation ad do in cupidatat deserunt amet proident laboris eiusmod consequat et occaecat mollit deserunt. Aute nulla tempor veniam sit magna commodo eu. Cillum deserunt culpa eu eiusmod qui proident sunt sit anim veniam amet tempor ea.
      \nDuis cupidatat culpa sunt velit duis occaecat consectetur irure quis enim dolore eiusmod cupidatat. Amet ullamco ad sunt elit ad minim. Nulla quis aute enim excepteur esse ea nostrud. Occaecat nostrud enim enim id sit consectetur commodo consectetur consequat excepteur dolore occaecat. Commodo sunt qui sunt laborum duis incididunt exercitation non amet anim. Eu aliqua voluptate anim eiusmod nostrud laboris tempor cillum ad irure officia.
      `
    }
  ]
})

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  },
  addActiveJob(state, job) {
    state.currentUser.activeJobs.push(job.id)
  },
  setApproved(state, job) {
    state.jobs[job.id].approved = true
  }
}
export const actions = {
  login({ commit }, user) {
    commit('setCurrentUser', user)
  },
  logout({ commit }) {
    commit('setCurrentUser', undefined)
  },
  addActiveJob({ commit }, job) {
    commit('addActiveJob', job)
  },
  setApproved({ commit }, job) {
    commit('setApproved', job)
  }
}

export const getters = {
  userActiveJob: state => {
    const activeJobs = []
    if (!state.currentUser) return []
    for (const i of state.currentUser.activeJobs) {
      activeJobs.push(state.jobs[i])
    }
    return activeJobs
  },
  allJobs: state => {
    const jobs = []
    if (state.currentUser.role === 'student') {
      return state.jobs
    } else {
      for (const j of state.currentUser.allJobs) {
        jobs.push(state.jobs[j])
      }
    }
    return jobs
  }
}
