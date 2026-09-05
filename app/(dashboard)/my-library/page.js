"use client";

import React, { useContext, useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../src/firebase'
import { AuthContext } from '../../src/context/auth-context'
import BookCard from '../../components/foryou/BookCard'
import LoginPrompt from '../../components/dashboard/LoginPrompt'
import styles from '../../styles/for-you/ForYou.module.css'

const page = () => {
  const { user, loading } = useContext(AuthContext)
  const [books, setBooks] = useState([])
  const [finishedBooks, setFinishedBooks] = useState([])

  useEffect(() => {
    if (!user) return

    const libraryRef = collection(db, "customers", user.uid, "library")

    const unsubscribe = onSnapshot(libraryRef, (snapshot) => {
      setBooks(snapshot.docs.map((doc) => doc.data()))
    })

    return () => unsubscribe()
  }, [user])

  useEffect(() => {
    if (!user) return

    const finishedRef = collection(db, "customers", user.uid, "finished")

    const unsubscribe = onSnapshot(finishedRef, (snapshot) => {
      setFinishedBooks(snapshot.docs.map((doc) => doc.data()))
    })

    return () => unsubscribe()
  }, [user])

  async function handleRemove(book) {
    try {
      await deleteDoc(doc(db, "customers", user.uid, "library", book.id))
    } catch (error) {
      console.error("Error removing from library:", error)
    }
  }

  if (loading) return null
  if (!user) return <LoginPrompt />

  return (
    <div className="container">
        <div className="row">
            <div className="title">
                Saved Books
            </div>
            <div className={styles['foryou__subtitle']}>
                {books.length} items
            </div>
            <div className={styles['foryou__books--wrapper']}>
                {books.map((book) => (<BookCard key={book.id} book={book} onRemove={handleRemove} />))}
            </div>
            <div
              className={styles['prompt__books--block-wrapper']}
              style={{ display: books.length ? 'none' : 'block' }}
            >
                <div className={styles['prompt__books--title']}>Save your favorite books!</div>
                <div className={styles['prompt__books--sub-title']}>When you save a book, it will appear here.</div>
            </div>
            <div className="title">
                Finished
            </div>
            <div className={styles['foryou__subtitle']}>
                {finishedBooks.length} items
            </div>
            <div className={styles['foryou__books--wrapper']}>
                {finishedBooks.map((book) => (<BookCard key={book.id} book={book} />))}
            </div>
              <div
                className={styles['prompt__books--block-wrapper']}
                style={{ display: finishedBooks.length ? 'none' : 'block' }}
              >
                <div className={styles['prompt__books--title']}>Done and dusted!</div>
                <div className={styles['prompt__books--sub-title']}>When you finish a book, you can find it here. later.</div>
            </div>
        </div>
        </div>
  )
}

export default page
