import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc  Auth user and gets token
// @route POST /api/users/login
// @acess Public
const authUser = asyncHandler(async (req, res) => { 
    res.send('auth user');
});

// @desc  Reg user
// @route POST /api/users
// @acess Public
const registerUser = asyncHandler(async (req, res) => { 
    res.send('register user');
});

// @desc  Logout user. & clear the cookie
// @route POST /api/users/logout
// @acess Private
const logoutUser = asyncHandler(async (req, res) => { 
    res.send('logout user');
});

// @desc  Get user profile
// @route GET /api/users/profile
// @acess Private
const getUserProfile = asyncHandler(async (req, res) => { 
    res.send(' get user profile');
});

// @desc  Update user profile
// @route PUT /api/users/profile
// @acess Private
const updateUserProfile = asyncHandler(async (req, res) => { 
    res.send(' update user profile');
});

// @desc  Get users
// @route GET /api/users
// @acess Private/Admin
const getUsers = asyncHandler(async (req, res) => { 
    res.send(' get users: admin');
});

// @desc  Get user by ID
// @route GET /api/users/:id
// @acess Private/Admin
const getUserByID = asyncHandler(async (req, res) => { 
    res.send(' get user by ID: admin');
});

// @desc  Delete user
// @route DELETE /api/users/:id
// @acess Private/Admin
const deleteUser = asyncHandler(async (req, res) => { 
    res.send(' delete user: admin func');
});

// @desc  Update user
// @route PUT /api/users/:id
// @acess Private/Admin
const updateUser = asyncHandler(async (req, res) => { 
    res.send(' update user: admin func');
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUser,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
};