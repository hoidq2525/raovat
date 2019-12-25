const cookieparser = process.server ? require('cookieparser') : undefined
const axios = require("axios");

//! 1  Create List State
export const state = () => ({
    auth: null
});
//! 2 Khi xu ly su kien, call api thi se goi len mutation de set gia tri cho state
export const mutations = {
    SetAuth: (state, playload) => {
        state.auth = playload;
    }

};
//! 3 Call api {nuxtServerInit : tự động render all data ra view-source ấn crtl+u để xem}
export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        //!Auto load khi tai lai trang
        await dispatch('CheckLogin', req);
    },
    //! Kiem tra login hay chua
    async CheckLogin({ commit, rootState }, req) {
        let auth = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('SetAuth', auth);
    },
}