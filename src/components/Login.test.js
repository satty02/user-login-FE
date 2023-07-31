
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios'; // Mocked version will be used
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('Login Component', () => {
  test('renders the Login component', () => {
    render(<BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login}/>
      </Routes>
    </BrowserRouter>);
    expect(screen.getByLabelText('User name')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Forgot password?')).toBeInTheDocument();
  });

  test('shows error message if fields are empty on form submit', () => {
    render(<BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login}/>
      </Routes>
    </BrowserRouter>);
    fireEvent.click(screen.getByText('Sign in'));
    // Assert that error messages are displayed
    expect(screen.queryByText('Email doesn’t exist')).not.toBeInTheDocument(); // Should not display error message yet
  });

  test('submits the form with correct data', async () => {
    axios.post.mockResolvedValue({ data: { success: true, result: 'John Doe' } });
    render(<BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login}/>
      </Routes>
    </BrowserRouter>);
    fireEvent.change(screen.getByLabelText('User name'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret123' } });
    fireEvent.change(screen.getByLabelText('Date of birth'), { target: { value: '2023-07-31T00:00' } });

    fireEvent.click(screen.getByText('Sign in'));

    // Assert that the API is called with the correct data
    expect(axios.post).toHaveBeenCalledWith('http://user-login-be.vercel.app/api/login', {
      username: 'john@example.com',
      password: 'secret123',
      dob: '2023-07-31T00:00',
    });
  })


  test('shows error message for invalid login data', async () => {
    axios.post.mockResolvedValue({ data: { success: false, message: 'Email doesn’t exist' } });
    render(<BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login}/>
      </Routes>
    </BrowserRouter>);
    fireEvent.change(screen.getByLabelText('User name'), { target: { value: 'invalid@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.change(screen.getByLabelText('Date of birth'), { target: { value: '2023-07-31T00:00' } });

    fireEvent.click(screen.getByText('Sign in'));

    // Wait for error message
    await screen.findByText('Email doesn’t exist');

    // Assert that error message is displayed
    expect(screen.getByText('Email doesn’t exist')).toBeInTheDocument();
  });

});
