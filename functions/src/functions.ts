import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp();

// Express Servers
import { newsletterServer } from './newsletter';

// HTTP Cloud Functions
const newsletter = functions.https.onRequest(newsletterServer);

module.exports = {
  newsletter,
};
