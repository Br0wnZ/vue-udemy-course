import { auth, firebase } from '../firebase'
import { Router, useRouter } from 'vue-router'

export const useUser = () => {
  const router: Router = useRouter()
  
  const signIn = async (): Promise<void> => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await auth.signInWithPopup(provider)
      router.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      await auth.signOut()
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return { signIn, signOut }
}
