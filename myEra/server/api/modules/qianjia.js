class QianjiaApi {
  constructor(){

  }

  async statusQuery (params) {

    let result = await fetchData({
      url: 'http://zcm-merchant.zc.test.sankuai.com'+ '/manage/merchant/buffet/statusQuery',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'userId': '',
        'cookie': 'csrfToken=gYnRkbhJ8g_hXzX6jxFH14gd; bizlogintoken=111134932; ssoToken=D+IlzNX+QlrZ4XT2pQtPXslMqwk='
      },
      data: {"deviceSn":"83826300","extra":"empty","source":3,"sourceType":"ecom","shopId":"2563108"}
    })

    return result.data
  }

  async reasonList (params) {

    let result = await fetchData({
      url: 'http://zcm-merchant.zc.test.sankuai.com'+ '/manage/merchant/buffet/reasonList',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'userId': '',
        'cookie': 'csrfToken=gYnRkbhJ8g_hXzX6jxFH14gd; bizlogintoken=111134932; ssoToken=D+IlzNX+QlrZ4XT2pQtPXslMqwk='
      },
      data: {"applyType":2,"deviceSn":"83826301","deviceType":"1","source":3,"sourceType":"ecom","shopId":"141025289"}
    })
    return result.data
  }


  async mixed (params) {

    let statusQuery = await this.statusQuery()

    let reasonList = await this.reasonList()
    return {
      statusQuery: statusQuery.data,
      reasonList: reasonList.data,
      a: 123456
    }
  }

}


module.exports = new QianjiaApi()
