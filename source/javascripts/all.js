Notification.requestPermission();

window.addEventListener('DOMContentLoaded', init);

var endpoint;
var key;
var authSecret;

function init() {

  navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {

    return registration.pushManager.getSubscription()
    .then(function(subscription) {
      if (subscription) {
        return subscription;
      }

      return registration.pushManager.subscribe({ userVisibleOnly: true });
    });
  })
  .then(function(subscription) {
    endpoint = subscription.endpoint;

    var rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
    key = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
    var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
    authSecret = rawAuthSecret ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : '';

    console.log({
      endpoint: endpoint,
      key: key,
      authSecret: authSecret
    });
  });
}
