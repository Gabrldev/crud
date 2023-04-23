import { useEffect, useState } from 'react'
import { client } from '../client/client'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/')
      }
    })
  })
  const onChange = (e) => {
    setEmail(e.target.value)
  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      await client.auth.signInWithOtp({
        email
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <form onSubmit={handelSubmit}>
      <input type='email' placeholder='Email' name='email' onChange={onChange} />
      <button>Send</button>
    </form>
  )
}
