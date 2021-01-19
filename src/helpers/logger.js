// sentry or some other error reporter should be used in production
export const captureError = error => (__DEV__ ? console.log(error) : console.log(error));
