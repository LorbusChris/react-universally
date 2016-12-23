/* @flow */
/* eslint quote-props: ["error", "consistent"]*/

import config from './index.js';

export const nav = {
  'content': ['pages', 'galleries'],
  'enquiries': ['enquiries'],
  'people': ['users'],
};

export default {

  /**
   * Project Options
   * ===============
   */
  'name': config.projectName,
  'module root': '../../',
  'updates': '../../updates',
  'auto update': true,
  'language options': {
    'supported languages': ['de', 'en'], // List of supported languages, preferred first. Tags must be BCP47 compliant. Defaults to ['en-US']
    'language cookie': 'language', // Defaults to 'language'
    'language cooke options': {}, // Passed through to Express, defaults to {}
    'language select url': '/language/{language}', // Defaults to '/language/{language}'
  },

  /**
   * Admin UI Options
   * ================
   */
  // 'admin path': envConfig.adminPath,
  'brand': config.projectName,
  // 'back url': String
  // 'headless': true // Disables the Admin UI
  // 'csv field delimiter': String // Custom field delimiter for CSV export, defaults to comma
  // optional wysiwyg options

  /**
   * Database and User Auth Options
   * ==============================
   */
  'auth': true,
  'user model': 'User',
   // 'model prefix': String
  'cookie secret': config.cookieSecret,
  'session': true,
  'mongo': config.mongoUri,
  // 'mongo options': Object
  'session store': 'mongo',
  // 'session store options': Object
  // 'cookie signin': (process.env.NODE_ENV === 'production') && false,
  // 'signin url': String
  // 'signin redirect': String
  // 'signout url': String
  // 'signout redirect': String

  /**
   * Web Server Options
   * ==================
   */
  'env': process.env.NODE_ENV,
  'host': config.host,
  'port': config.port,
  'static': '../../public',
  'favicon': '../../public/favicon.ico', // Path to favicon
  // 'locals': {
  //   env: process.env.NODE_ENV,
  //   utils: require('keystone-utils'),
  // },
  // 'views': String
  // 'view engine': String // Express app view engine
  // 'custom engine': Function
  // 'view cache': Boolean // defaults to true in production, false otherwise
  // 'frame guard': 'deny', // This is set in our custom express app. Defaults to 'sameorigin'
  // 'compress': 'true', // This is set in our custom express app. Defaults to false
  // 'logger': String // Include Morgan middleware, set to false to disable
  // 'logger options'; Object // Optional morgan config options
  // 'trust proxy': Boolean // Processing of the HTTP request X-Forwarded-For header
  // 'file limit': Number // Adds a file limit to the Express body parser
  // 'alowed ip ranges': String // Comma seperated string of IP ranges specified using CIDR format

  /**
   * HTTPS Web Server Options
   * ========================
   */
  'letsencrypt': (process.env.DEPLOYFLAG === true && process.env.NODE_ENV === 'production') && {
    email: config.letsenscryptEmail,
    domains: [`www.${config.host}`, `${config.host}`],
    register: true,
    tos: true,
  },
  'ssl': (process.env.DEPLOYFLAG === true && process.env.NODE_ENV === 'production') && 'force',
  'ssl port': (process.env.DEPLOYFLAG === true && process.env.NODE_ENV === 'production') && process.env.SSLPORT, // TODO Add to .env and envConfig
  // 'ssl host': String // Defaults to process.env.SSL_IP or the 'host' option
  // 'ssl key'; Path
  // 'ssl cert': Path
  // 'ssl ca': Path

  /**
   * Services Options
   * ================
   */
  // Cloudinary
  'cloudinary config': config.cloudinaryUrl, // Defaults to process.env.CLOUDINARY_URL
  'cloudinary secure': (process.env.DEPLOYFLAG === true && process.env.NODE_ENV === 'production') && true,
  // 'cloudinary prefix': String // Prefix for all built-in tags
  // 'coudinary folder': Boolean

  // Embed.ly
  // Mandrill
  // Google Analytics
  // Google Maps
  // Amazon S3
  // Windows Azure Storage

};
