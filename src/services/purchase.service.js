import app from "./config";

export const makePurchase = async (productIds) => {

  const token = localStorage.getItem('token')

  try {
    const { data } = await app.post(
      '/purchases',
      { productIds },
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}

export const getAllPurchases = async () => {

  const token = localStorage.getItem('token')

  try {
    const { data } = await app.get('/my-purchases',
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}

export const getMyPurchases = async () => {

  const token = localStorage.getItem('token')

  try {
    const { data } = await app.get('/purchases/own',
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return data

  } catch (error) {
    console.log('Error loging: ', error.message)
  }
}