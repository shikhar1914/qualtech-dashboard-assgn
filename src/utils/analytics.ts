interface EventPayload {
  [key: string]: any;
}

export const trackEvent = (
  eventName: string,
  payload?: EventPayload
) => {
  console.log("Event:", eventName, payload);
};