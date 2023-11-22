const API_URL = 'https://ominous-giggle-wwj64rpxr442vvgx-3001.app.github.dev/api/';

export const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.message === 'Login successful') {
      console.log('Login successful');

      sessionStorage.setItem('token', data.token);
    } else {
      console.error('Login failed');
    }

    return data;
  } catch (error) {
    console.error('Error during login:', error);
  }
};