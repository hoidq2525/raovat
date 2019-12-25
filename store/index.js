const axios = require("axios");

//! 1  Create List State
export const state = () => ({
    islogin: false,
    user: '',
});
//! Khi xu ly su kien, call api thi se goi len mutation de set gia tri cho state
export const mutations = {
    CheckLogin: (state, playload) => {
        state.islogin = playload;
    },
    SetUser: (state, playload) => {
        state.user = playload;
    },

};
//! Call api
export const actions = {
    async nuxtServerInit({ commit, dispatch }, context) {
        // ! gọi api lấy tin nổi bật 
        // await dispatch('Call_');
        await dispatch('CheckLoginsss')
    },
    // async Call_({ commit }) {
    //     commit('CheckLogin', data.list)
    // },
    // async SetU({ commit }) {
    //     commit('SetUser', data.list)
    // },
    async CheckLoginsss({ commit, rootState }, da) {
        const { data } = await axios.post('https://app.fakejson.com/q/ATx0x3Ul?token=XnJ3cQn1HmuJPCuKna_rBg');
        console.log(data)
            // rootState.auth.loggedIn = true;
            // rootState.auth.user = data.name;
        commit("CheckLogin", true);
        commit("SetUser", data.name);
    },
    async Logout({ commit, rootState }, da) {
        commit("CheckLogin", false);
        commit("SetUser", '');

    },
    async Call_Login({ commit, rootState }, da) {
        console.log(da)
        let payload = {
            token: "XnJ3cQn1HmuJPCuKna_rBg",
            data: {
                name: da.replace(/(@gmail.com)/gm, ``),
                email: da,
                phone: "phoneHome",
                _repeat: 1
            }
        };
        const { data } = await axios.post('https://app.fakejson.com/q', payload);
        console.log(data)
            // rootState.auth.loggedIn = true;
            // rootState.auth.user = data.name;
        commit("CheckLogin", true);
        commit("SetUser", data.name);
    },

}