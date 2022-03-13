/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  POSTS_API_BASE_URL: process.env.REACT_APP_POSTS_API_BASE_URL,

  isProd() {
    return this.NODE_ENV === 'production'
  },
  isDev() {
    return !this.isProd()
  },
}

export default Env
