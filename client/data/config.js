import Raven from 'raven-js'

const sentry_key = 'cdb3d2dde41d4101b7cdcee0d7e8293e'
const sentry_app = '5021553'
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`
// https://cdb3d2dde41d4101b7cdcee0d7e8293e@sentry.io/5021553

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  })
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex)
}
