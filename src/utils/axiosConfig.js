import axios from 'axios'
import Qs from 'qs'
// import { Indicator } from 'mint-ui'
import xml from './xml'
const baseUrl = '/NetApp/CstService.asmx/GetService'
export default {
  install (options) {
    console.log(options, 'axios--ip')
    let ipAddr = options.ip ? 'http://' + options.ip : ''
    let instance = axios.create({
      baseURL: ipAddr,
      timeout: 60000,
      transformRequest: [function (data) {
        if (typeof data === 'object' && data.hideLoad) {
          delete data.hideLoad
        } else {
          // Indicator.open({spinnerType: 'fading-circle'})
        }
        return Qs.stringify(data)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    instance.interceptors.request.use(function (config) {
      console.log('http://' + options.ip, 'options.ip')
      console.log(config, 'config')
      // Indicator.open({spinnerType: 'fading-circle'})
      return config
    }, function (error) {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(function (response) {
      // Indicator.close()
      let data = response.data
      console.log('返回的结果', response.data, response)
      if (data.status - 0 === 0 || data.code === '200' || data.isSuccess) {
        response.data = data.data
        return response
      } else {
        // Vue.toast(response.data.desc)
        return Promise.reject(response)
      }
    }, function (error) {
      // Indicator.close()
      return Promise.reject(error)
    })

    // xml
    let instanceXml = axios.create({
      baseURL: ipAddr,
      url: baseUrl,
      method: 'POST',
      timeout: 60000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      transformRequest: [function (data) {
        console.log('http://' + options.ip)
        console.log('xml请求参数:', data)
        return Qs.stringify(data)
      }],
      transformResponse: [function (data, config) {
        // Do whatever you want to transform the data
        let jsonData = xml(data)
        return jsonData[Object.keys(jsonData)[0]][0]
      }]
      // paramsSerializer: function (params) {
      //   console.log(params, '???--------')
      //   return Qs.stringify(params, {arrayFormat: 'brackets'})
      // }
    })
    instanceXml.interceptors.request.use(function (config) {
      console.log('http://' + options.ip, 'options.ip')
      console.log(config, 'config')
      return config
    }, function (error) {
      return Promise.reject(error)
    })
    instanceXml.interceptors.response.use(function (response) {
      setTimeout(() => {
        console.log('loading结束--')
        // Indicator.close()
      }, 50)

      let res = response.data.Result
      if (res && res[0]['InfoKey'] === '_ERROR') {
        // Vue.toast(res[0]['_Detail'])
        return Promise.reject(res[0])
      }
      let syswin = response.data.Syswin
      if (syswin && syswin.length && syswin[0].status === 0) {
        // Vue.toast(syswin[0].msg)
        return Promise.reject(syswin[0])
      }
      if (response.data.Table && response.data.Table.length && response.data.Table[0].status === 1) {
        response.data = response.data.Table[0].data
      }
      if (response.data.Table && response.data.Table instanceof Array) {
        response.data = response.data.Table
      }
      if (syswin && syswin.length && (syswin[0].status === 1 || syswin[0].status === '1')) {
        response.data = syswin[0].data || syswin[0].Data
        response.msg = syswin[0].msg || syswin[0].Msg || ''
      }
      return response
    }, function (error) {
      // Indicator.close()
      // Vue.toast('服务器连接错误')
      return Promise.reject(error)
    })
    let xmlPost = function (name, data, other, hideLoad) {
      let obj = {
        p0: '',
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
        p6: '',
        p7: ''
      }
      obj.p0 = name
      if (data) {
        obj.p7 = JSON.stringify(data)
      }
      Object.assign(obj, other)
      if (!hideLoad) {
        console.log('开启loading')
        // Indicator.open({spinnerType: 'fading-circle'})
      }
      return instanceXml.post(baseUrl, obj)
    }
    window.xml = window.prototype.$xml = xmlPost
    // Vue.xml = xmlPost
    // Vue.prototype.$xml = xmlPost

    // Vue.http = instance
    // Vue.prototype.$http = instance
  }
}
