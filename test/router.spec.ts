import {JSDOM} from 'jsdom';
import {assert} from 'chai'

const index = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Coeli lumen</title>
</head>
<body>
<main id="root"></main>
<script src="../src/main.ts"></script>
</body>
</html>`;


const {window} = new JSDOM(index, {
    url: 'http://localhost:1234/',
});


global.window = window as unknown as Window & typeof globalThis
global.document = window.document


import Router from "../src/utils/Router";
import {SignUp} from "../src/pages/SignUp";
import ComponentRegistry from "../src/utils/ComponentRegistry";
import {SignUpForm} from "../src/components/SignUpForm";
import Profile from '../src/pages/Profile';
import {ProfileUserData} from '../src/pages/ProfileUserData';
import {ProfilePassword} from '../src/pages/ProfilePassword';
import Chat from '../src/pages/Chat/chat';
import {SignIn} from "../src/pages/SignIn";
import ChatPreview from "../src/components/ChatPreview/chat-preview";
import Message from "../src/components/Message/message";
import {SignInForm} from "../src/components/SignInForm";
import {ProfileUserDataForm} from "../src/components/ProfileUserDataForm";
import {ProfilePasswordForm} from "../src/components/ProfilePasswordForm";


let router: Router;


describe('Router tests', () => {
    beforeEach(() => {
        new ComponentRegistry()
            .add('chat', Chat)
            .add('chat-preview', ChatPreview)
            .add('message', Message)
            .add('signup', SignUp)
            .add('signup-form', SignUpForm)
            .add('signin', SignIn)
            .add('signin-form', SignInForm)
            .add('profile-user-data', ProfileUserData)
            .add('profile-user-data-form', ProfileUserDataForm)
            .add('profile-password', ProfilePassword)
            .add('profile-password-form', ProfilePasswordForm)

        router = new Router(".root");
        router
            .use('/', Chat)
            .use('/profile', Profile)
            .use('/signup', SignUp)
            .use('/signin', SignIn)
            .use('/profile-user-data', ProfileUserData)
            .use('/profile-password', ProfilePassword)
            .start();
    });


    [
        '/',
        '/signup',
        '/signin',
        '/profile',
        '/profile-user-data',
        '/profile-password'
    ].forEach((pageName) => {
        it(`Go to ${pageName}`, () => {
            router.go(pageName);
            const currentRoute = router.getCurrentRoute();
            assert.equal(currentRoute?._pathname, pageName)
        });
    });
});
