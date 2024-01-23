// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import packageInfo from './package.json';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
  environment: process.env.NODE_ENV,
  release: packageInfo.version,
  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
  ignoreErrors: ['밀크티'],
  denyUrls: ['sentry-example-page'],
  // allowUrls: ['sentry-example-page'],
  autoSessionTracking: true,
  beforeBreadcrumb(breadcrumb, hint) {
    console.log('[breadcrumb]');
    console.log(breadcrumb);

    return breadcrumb;
  },
  beforeSend(event, hint) {
    console.log('[event]');
    console.log(event);

    return event;
  },
  beforeSendTransaction(transaction) {
    console.log('[transaction]');
    console.log(transaction);

    return transaction;
  },
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: true,
    }),
    new Sentry.Integrations.Breadcrumbs({
      console: false,
    }),
  ],
});
