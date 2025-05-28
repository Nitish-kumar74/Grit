import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const users = db.collection('users');

    // Check for existing user
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 } // 409 Conflict is more appropriate for duplicate resources
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12); // Increased salt rounds for better security

    // Create new user
    const newUser = {
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      emailVerified: false, // For future email verification
      role: 'user' // Default role
    };

    const result = await users.insertOne(newUser);

    return NextResponse.json(
      { 
        success: true,
        message: 'User created successfully', 
        userId: result.insertedId,
        email: newUser.email // Return email for confirmation
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'An error occurred during registration' 
      },
      { status: 500 }
    );
  }
}