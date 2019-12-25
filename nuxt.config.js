module.exports = {
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Báo Chí - Tạp Chí - Đọc Báo - Tuổi Trẻ Cuối Tuần - TTO',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
            { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            { hid: 'description', name: 'description', content: 'Tuần báo của Tuổi Trẻ - Cập nhật tin tức nhanh &amp; mới nhất về văn hóa, giải trí, nghệ thuật và các vấn đề, sự kiện đang diễn ra trong tuần.' },
        ],

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Roboto+Slab:400,700&display=swap' },
            { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=latin-ext,vietnamese' },
            { rel: 'stylesheet', type: 'text/css', href: '/vendor/bootstrap/css/bootstrap.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/vendor/fontawesome-free/css/all.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/vendor/pretty-checkbox-master/dist/pretty-checkbox.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/vendor/select2-develop/dist/css/select2.min.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/vendor/iOS7-icon-font-master/icon.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
        ],
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
}