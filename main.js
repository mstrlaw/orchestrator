import {
  start,
} from 'single-spa';

Promise.all([
  System.import('pubsub-js'),
  System.import('snackbar')
]).then(() => {
  
  start();

  Snackbar.show({
    text: 'Single SPA loaded!'
  });
});
