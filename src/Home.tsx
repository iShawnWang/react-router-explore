import { useEffect } from 'react'
export const Home = () => {

  useEffect(() => {
    console.log('Home Mount')
    return () => {
      console.log("Home UnMount")
    }
  }, [])

  return <div>Home</div>
}