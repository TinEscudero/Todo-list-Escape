export const state = () => ({
  tasks: []
})

export const mutations = {
  init(state) {
    state.tasks = JSON.parse(localStorage.getItem('_tasks_')) || []
  },
  save(state) {
    localStorage.setItem('_tasks_', JSON.stringify(state.tasks))
  },
  add(state, { title, description }) {
    let id, flag = true
    while (flag) {
      id = Math.floor(Math.random() * 100000)
      flag = !!state.tasks.find(task => task.id === id)
    }
    state.tasks.push({
      id,
      title,
      description,
      done: false,
    })
  },
  remove(state, id) {
    state.tasks = state.tasks.filter(task => task.id !== id)
  },
  done(state, { id, done = true }) {
    state.tasks = state.tasks.map(task => {
      if (task.id === id) task.done = done
      return task
    })
  }
}

export const actions = {
  init({ commit }) {
    commit('init')
  },
  add({ commit }, { title, description }) {
    commit('add', { title, description })
    commit('save')
  },
  remove({ commit }, id) {
    commit('remove', parseInt(id))
    commit('save')
  },
  done({ commit }, { id, done = true }) {
    commit('done', { id: parseInt(id), done })
    commit('save')
  }
}

export const getters = {
  tasks: state => {
    return state.tasks
  },
  task: state => id => {
    return state.tasks.find(task => task.id === id)
  },
  pendingTasks: state => {
    return state.tasks.filter(task => !task.done)
  },
  doneTasks: state => {
    return state.tasks.filter(task => task.done)
  }
}
