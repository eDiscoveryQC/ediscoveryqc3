import bcrypt from 'bcryptjs';    // For password hashing
import { query } from '../../../lib/db';  // Import the MySQL query function you set up

export default async function handler(req, res) {
  if (req.method === 'POST') {  // Only handle POST requests
    const { username, email, password } = req.body;  // Get data from the body of the request

    try {
      // Check if user already exists in the database
      const [existingUser] = await query('SELECT * FROM users WHERE email = ?', [email]);
      
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password before saving it in the database
      const hashedPassword = await bcrypt.hash(password, 10);  // 10 rounds of salt

      // Insert the new user into the database
      const result = await query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

      // Send a success response
      res.status(200).json({ message: 'User registered successfully', userId: result.insertId });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });  // Send an error response if something goes wrong
    }
  } else {
    // If the request is not a POST request, send a 405 Method Not Allowed error
    res.status(405).json({ message: 'Method not allowed' });
  }
}

