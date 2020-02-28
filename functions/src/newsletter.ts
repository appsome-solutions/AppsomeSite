import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import clearAxios from 'axios';
import Joi from 'joi';
import md5 from 'md5';

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const axios = clearAxios.create({
  baseURL: 'https://us19.api.mailchimp.com/3.0',
  auth: {
    username: process.env.MAILCHIMP_USER_NAME,
    password: process.env.MAILCHIMP_API_KEY,
  },
});

export const newsletterServer = express();

newsletterServer.use(cors({ origin: true }));
newsletterServer.use(bodyParser.urlencoded({ extended: true }));
newsletterServer.use(bodyParser.json());

newsletterServer.post('/subscription', (request, response) => {
  const subscriptionValidator = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
  });

  const LIST_ID = '6515159370';

  if (subscriptionValidator.validate(request.body).error !== null) {
    response.status(400).send('Incorrect body format sent. Check if you have attached email field with email format.');
  }

  axios
    .put(`/lists/${LIST_ID}/members/${md5(request.body.email)}`, {
      // eslint-disable-next-line @typescript-eslint/camelcase
      email_address: request.body.email,
      status: 'pending',
    })
    .then(() => {
      response.status(200).send('Subscribed!');
    })
    .catch(e => {
      console.log(e);
      response.status(500).send('Problem with Mailchimp request.\n' + e);
    });
});
