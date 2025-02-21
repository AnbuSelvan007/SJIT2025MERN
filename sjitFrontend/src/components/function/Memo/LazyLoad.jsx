import React,{Suspense,lazy} from 'react'
const LazyComp=lazy(()=>{import('../SignUp.jsx')})
const LazyLoad = () => {
  return (
    <div>
        <Suspense fallback={<h1>loading...</h1>}>
        <h1>Loading</h1>
        <LazyComp/>
        </Suspense>
   
    </div>
  )
}

export default LazyLoad
