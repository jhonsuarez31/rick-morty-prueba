import React from 'react'
import { DotSpinner } from '@uiball/loaders'

export const Loader = () => {
  return (
    <>
    <div className="container-loader">
    <DotSpinner size={60} speed={0.90} color="black" />
    </div>);
    </>
  )
}




