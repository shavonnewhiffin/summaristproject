"use client"

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SearchResults } from "./SearchResults";
import Sidebar from "./Sidebar";
import styles from "../../styles/for-you/Search.module.css";

export default function Search() {
  const pathname = usePathname();
  const wrapperRef = useRef(null);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedSearch] = useDebounce(search, 300)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setSearch("");
    closeMenu();
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

  function openMenu(){
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsMenuOpen(true);
    setTimeout(() => setIsMenuVisible(true), 10);
  }

  function closeMenu(){
    setIsMenuVisible(false);
    closeTimeoutRef.current = setTimeout(() => setIsMenuOpen(false), 300);
  }

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
            <FaBars className="icons" onClick={openMenu}/>
            {isMenuOpen && (
              <>
                <div className={`${styles.overlay} ${isMenuVisible ? styles["overlay--visible"] : ""}`} onClick={closeMenu} />
                <Sidebar mobileOpen mobileVisible={isMenuVisible} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
