import app from "./config";

export const login = async (email, password) => {
  try {
    const { data } = await app.post('/auth/login', {
      email,
      password
    })

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}