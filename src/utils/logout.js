import { client } from '../client/client'
export const logout = () => {
  client.auth.signOut()
}
