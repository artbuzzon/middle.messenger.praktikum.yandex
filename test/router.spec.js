import jsdom from 'jsdom';
import {Router} from 'express';
import Chat from '../src/pages/Chat/chat';
import {SignIn, SignUp} from '../dist/main.62d00c9e';
import Profile from '../src/pages/Profile';
import {ProfileUserData} from '../src/pages/ProfileUserData';
import {ProfilePassword} from '../src/pages/ProfilePassword';

const index = `<!DOCTYPE html><html lang="en"></html>`;

const {JSDOM} = jsdom;

const dom = new JSDOM(index, {
  url: 'http://localhost:1234/',
});

let router;

before(() => {
  window = dom.window;
  document = dom.window.document;
});

beforeEach(() => {
  router = new Router();
  router.use('/', Chat).
      use('/profile', Profile).
      use('/signup', SignUp).
      use('/signin', SignIn).
      use('/profile-user-data', ProfileUserData).
      use('/profile-password', ProfilePassword).
      start();
});

describe('Router tests', () => {
  ['/', 'signin', 'signup', 'profile'].forEach((page) => {
    it(`Go to ${page}`, () => {
      window.location.hash = page;
      const currentRoute = router.getCurrentRoute();
//TODO check page's name
    });
  });
});
