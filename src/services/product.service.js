import app from "./config";

export const getProducts = async () => {
  try {
    const { data } = await app.get('/products')

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}