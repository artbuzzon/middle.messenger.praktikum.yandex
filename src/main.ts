import Router from './utils/Router';
import Chat from './pages/Chat/chat';
import Profile from './pages/Profile';
import ComponentRegistry from './utils/ComponentRegistry';
import ChatPreview from './components/ChatPreview/chat-preview';
import Message from './components/Message/message';
import {SignUp} from './pages/SignUp';
import {SignUpForm} from './components/SignUpForm';
import {SignIn} from './pages/SignIn';
import {SignInForm} from './components/SignInForm';
import {ProfileUserData} from './pages/ProfileUserData';
import {ProfilePasswordForm} from './components/ProfilePasswordForm';
import {ProfilePassword} from './pages/ProfilePassword';
import {ProfileUserDataForm} from './components/ProfileUserDataForm';



const router = new Router('.root');
const componentRegistry = new ComponentRegistry();

componentRegistry
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
    .add('profile-password-form', ProfilePasswordForm);

router
    .use('/', Chat)
    .use('/profile', Profile)
    .use('/signup', SignUp)
    .use('/signin', SignIn)
    .use('/profile-user-data', ProfileUserData)
    .use('/profile-password', ProfilePassword)
    .start();



