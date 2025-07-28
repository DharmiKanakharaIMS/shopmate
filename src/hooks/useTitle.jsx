import React, { useEffect } from 'react'

function useTitle(title) {

  useEffect(()=>{
    document.title = `${title} | Shopping Cart`
  },[title])

  return null
}

export default useTitle