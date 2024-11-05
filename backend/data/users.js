import bcrypt from "bcryptjs";

const users = [
    {
      name: 'Admin User',
      email: 'admin@mail.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: true,
    },
    {
      name: 'Jane Doe',
      email: 'Jane@mail.com',
      password: bcrypt.hashSync('12356', 10),
      isAdmin: false,
     },
    {
      name: 'John Doe',
      email: 'John@mail.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
    },

];

export default users;