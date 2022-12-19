import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    // calling to useRouter
    const router = useRouter()
  return (
    <div>
        Page of products with name: { router.query.id }
    </div>
  )
}

export default ProductItem