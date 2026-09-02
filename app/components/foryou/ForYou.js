"use client";

import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../../src/context/auth-context'

const ForYou = ({ children }) => {
  const { isPremium, loading } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isPremium) {
      router.push('/choose-plan')
    }
  }, [loading, isPremium, router])

  if (loading || !isPremium) return null

  return (
    <div>
      <div className="row">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ForYou