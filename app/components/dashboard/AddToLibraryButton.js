"use client";

import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import styles from "../../styles/dashboard/Book.module.css";
import { db } from "../../src/firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../src/context/auth-context";

export default function AddToLibraryButton({ book }) {
  const { user } = useContext(AuthContext);

  async function addToLibrary(book) {
    if (!user) {
      alert("Please sign in before saving books to your library.");
      return;
    }

    try {
      await setDoc(doc(db, "customers", user.uid, "library", book.id), book);
    } catch (error) {
      console.error("Error saving to library:", error);
    }
  }

  return (
    <div className={styles["inner__book--bookmark"]}>
      <div className={styles["inner__book--bookmark-icon"]}>
        <FaRegBookmark />
      </div>
      <div className={styles["inner__book--bookmark-text"]} onClick={() => addToLibrary(book)}>
        Add Title to My Library
      </div>
    </div>
  );
}
