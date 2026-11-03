'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { LogIn, Shield, Loader2, UserCheck } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Loader from '@/components/Loader'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isSigningIn, setIsSigningIn] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home')
    }
  }, [status, router])

  const handleSignIn = async () => {
    setIsSigningIn(true)
    try {
      await signIn('credentials', {
        email: 'deepthikamichetty336@gmail.com',
        redirect: false,
      })
      router.push('/home')
    } catch (e) {
      console.error(e)
      router.push('/home')
    } finally {
      setIsSigningIn(false)
    }
  }

  if (status === 'loading' || isSigningIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <Loader />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-secondary rounded-lg">
              <Shield className="h-6 w-6 text-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-foreground">Welcome to PEC.UP</h1>
          <p className="text-muted-foreground text-sm">Smart Academic Resource Platform</p>
        </div>

        <Card>
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-primary" />
              Student Sign In
            </CardTitle>
            <CardDescription>Click below to sign in and access the dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={handleSignIn}
              disabled={isSigningIn}
              className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors flex items-center justify-center gap-2 text-base"
            >
              {isSigningIn ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Opening Dashboard...
                </>
              ) : (
                <>
                  <UserCheck className="h-5 w-5" />
                  Sign In (Kamichetty Veera Pradeepthi)
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Aditya University • Department of Information Technology
          </p>
        </div>
      </div>
    </div>
  )
}
