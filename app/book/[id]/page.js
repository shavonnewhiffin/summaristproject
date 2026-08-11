import React from 'react'

export default async function page({params}) {
  const { id } = await params;
  const response = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
  const book = await response.json();
  console.log(book)
  return (
    <div>This is book: {id}</div>
  )
}

