import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const router = useRouter()

    return (
    <div>Page ID: {router.query.productoId}</div>
  )
}

export default ProductItem