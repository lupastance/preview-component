    import Vue from 'vue'
    import UserPop from './UserPop.vue'
    import Ola from './Ola.vue'

    export default {
        install(Vue, options) {
            Vue.component('user-pop', UserPop)
            Vue.component('ola', Ola)
        }
    }