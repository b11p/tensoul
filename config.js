'use strict'

const process = require('process')

const config = {
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36',

  mjsoul: {
    // US: https://mahjongsoul.game.yo-star.com
    // JP: https://game.mahjongsoul.com
    base: process.env.MJS_BASE,
    // can be null
    gateway: null,
    timeout: 10000,
  },

  login: {
    type: 10,
    access_token: process.env.ACCESS_TOKEN,
    device: {
      hardware: 'pc',
      is_browser: true,
      os: 'windows',
      os_version: 'win10',
      platform: 'pc',
      sale_platform: 'web',
      software: 'Chrome',
    },
    random_key: process.env.RANDOM_KEY,
    reconnect: false,
  },

  forceReLoginIntervalMs: 0,

  // optional
  // apiAuth: {
  //   name: 'equim',
  //   pass: 'password',
  // },

  port: process.env.PORT || 2563,
  addr: '0.0.0.0',
}

if (!config.login.access_token) {
  console.error('missing access token')
  process.exit(1)
}

module.exports = config
