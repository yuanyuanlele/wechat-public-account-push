/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx386d391bc39923d0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f1bd10a1f606a446dd61c5db80c48655',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '袁苑',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orOdc69O_oQrpaQ4eAMz7EBzcRL0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '_nDpMKhAZLNWqVEBVMPDAfkwfpCW_xOjT44BWJgkrU4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '袁苑', year: '2002', date: '05-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '袁苑', year: '2002', date: '07-04',
        },
        //{
        //  type: '节日', name: '恋爱纪念日', year: '2018', date: '05-01',
        //},
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-05-01' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2L_w-NYmrZJ-M5xw6UWnLA6becEM-WN6-CRPuOLWT4E',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orOdc67qrXY9t_f2Bp49zhD_lkwU',
    }
  ],

}

module.exports = USER_CONFIG

