"use client"

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SearchResults } from "./SearchResults";
import styles from "../../styles/for-you/Search.module.css";

export default function Search() {
  const pathname = usePathname();
  const wrapperRef = useRef(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500)

  useEffect(() => {
    setSearch("");
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  useEffect(() => {
    if (search) {
      setIsSearching(true);
      setIsOpen(true);
    }
  }, [search])

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    async function fetchSearch() {
      const data = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${debouncedSearch}`)
      const response = await data.json();
      setResults(response);
      setIsSearching(false);
    }

    fetchSearch();
  }, [debouncedSearch])

  return (
    <div className={styles.search__background}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles["search__input--wrapper"]} ref={wrapperRef}>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search for books"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className={styles.search__icon}>
                <IoIosSearch className="icons" />
              </div>
              {search && isOpen ? <SearchResults results={results} isSearching={isSearching} /> : null}
            </div>
          </div>
          <div className={styles['sidebar__toggle--btn']}>
            <FaBars className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
}
