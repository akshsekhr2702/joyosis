import {SessionProvider} from 'next-auth/react'

 function AuthProvider({children}) {
  <SessionProvider>
    {children}
  </SessionProvider>
}

export default AuthProvider