import mixpanel from 'mixpanel-browser';

// Replace with your actual Mixpanel token from mixpanel.com
const MIXPANEL_TOKEN = 'YOUR_MIXPANEL_TOKEN_HERE';

export const initMixpanel = () => {
  if (typeof window !== 'undefined') {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
  }
};

export const trackEvent = (eventName: string, properties?: any) => {
  if (typeof window !== 'undefined') {
    mixpanel.track(eventName, properties);
  }
};

export default mixpanel;
