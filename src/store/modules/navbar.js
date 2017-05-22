import * as types from '../mutation-types'

// init state
const state = {
    navbar: {
        initData: [{text: '首页', checked: true, path: 'index'},
            {text: '详细数据', checked: false, path: 'details'},
            {text: '我的信息', checked: false, path: 'mine'}],
        index: 0
    }
}

// getters
const getters = {
    navbar: state => state.navbar
}

const actions = {
    addNavbarIndex ({ commit, state }) {
        if (state.navbar.index + 1 < state.navbar.initData.length) {
            commit(types.ADD_NAVBAR_INDEX)
        } else {
            commit(types.SET_NAVBAR_INDEX_MIN)
        }
    },
    subNavbarIndex ({ commit, state }) {
        if (state.navbar.index > 0) {
            commit(types.SUB_NAVBAR_INDEX)
        } else {
            commit(types.SET_NAVBAR_INDEX_MAX)
        }
    },
    setNavbarIndex ({ commit, state }, index) {
        if (index < state.navbar.initData.length) {
            commit(types.SET_NAVBAR_INDEX, {index: index})
        }
    }
}

// mutations
const mutations = {
    [types.ADD_NAVBAR_INDEX] (state) {
        state.navbar.index ++
    },

    [types.SUB_NAVBAR_INDEX] (state) {
        state.navbar.index --
    },

    [types.SET_NAVBAR_INDEX_MAX] (state) {
        state.navbar.index = state.navbar.initData.length - 1
    },

    [types.SET_NAVBAR_INDEX_MIN] (state) {
        state.navbar.index = 0
    },
    [types.SET_NAVBAR_INDEX] (state, payload) {
        state.navbar.index = payload.index
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
