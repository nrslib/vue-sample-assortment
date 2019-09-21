import express from 'express';
import authorize from './middlewares/authorize-middleware';
import cors from 'cors';
import session from 'express-session';
import sessionVerify from './middlewares/session-verify-middleware';
import authority from './middlewares/authority-middleware';
import errorHandler from './middlewares/error-handler-middleware';

export default (app, http) => {
    app.use(express.json());
    app.use(cors({
        "origin" : "http://localhost:8080",
        "credentials" : true,
    }));
    app.use(session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 30 * 60 * 1000
        }
    }));
    app.use(sessionVerify);
    app.use(authority);

    app.use('/account', require('./routes/account'));
    app.use('/user', authorize(), require('./routes/user'));
    app.use('/login', require('./routes/login'));
    app.use('/logout', require('./routes/logout'));

    app.use(errorHandler);
}
