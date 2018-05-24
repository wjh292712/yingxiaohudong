const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://center.marketing.yunpaas.cn/api' : 'api/'
}