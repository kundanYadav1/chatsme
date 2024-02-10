import express from 'express';
// import { Router } from 'express'; // Use { Router } to import specifically

import {login, logout, singup } from '../controllers/auth.controllers.js';

const router = express.Router(); // Create a router instance

router.post("/singup",singup);

router.post("/login",login);

router.post("/logout",logout);

export default router;
