import './MyPurchases.css'

import { useEffect, useState } from 'react';

import { getMyPurchases } from '../../services/purchase.service';
import PurchaseCard from '../../components/PurchaseCard/PurchaseCard';
import { Divider } from '@mui/material';

const MyPurchases = () => {

  const [myPurchases, setMyPurchases] = useState([])

  useEffect(() => {
    const fetchMyPurchases = async () => {
      const data = await getMyPurchases()
      console.log(data)
      setMyPurchases(data)
    }

    fetchMyPurchases()

  }, [])

  const displayMyPurchases = () => {
    const formattedPurchases = myPurchases.map((purchase) => {
      return (
        <>
          <PurchaseCard purchase={purchase} />
        </>
      )
    })

    return formattedPurchases
  }

  return (
    <div id="my-purchases">
      {displayMyPurchases()}
    </div>
    
  )
}

export default MyPurchases