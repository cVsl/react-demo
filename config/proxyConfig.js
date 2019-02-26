// 配置反向代理
module.exports = {
  proxyList: {
    port: 7070,
    url: 'http://172.31.118.205:8066'
    // list: [
    //   {
    //     api: '/ets',
    //     url: 'http://172.31.118.201:8091/ets'
    //   },
    //   {
    //     api: '/NetApp',
    //     url: 'http://172.31.118.205:8066/NetApp'
    //   },
    //   {
    //     api: '/roc',
    //     // url: 'http://172.31.118.201:8082/roc'
    //     url: 'http://39.108.209.97:35002/roc'
        
    //     // url: 'http://172.31.118.23:35006/adapter/ets/open'
    //     // http://172.31.118.23:35006/adapter/ets/open'
    //   }
    // ]
  }
};
