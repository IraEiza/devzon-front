import app from "./config";

export const getUserByToken = async () => {
  const token = localStorage.getItem('token');

  try {
    const { data } = await app.get('/users/token', {
      headers: {
        Authorization: token,
      },
    })
    return data.user

  } catch (error) {
    console.log('Error getting user data: ', error.message)
  }
}