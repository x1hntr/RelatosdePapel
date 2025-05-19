import { useEffect, useState } from "react";

import { books as booksAdventure } from '../data/booksAdventure';
import { books as booksCSiFi } from '../data/booksCSiFi';
import { books as booksFantasy } from '../data/booksFantasy';
import { books as booksHorror } from '../data/booksHorror';
import { books as booksRomance } from '../data/booksRomance';


const useBooks = (category) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchBooks = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                let fallbackBooks = [];
                if (category === 'aventura') {
                    fallbackBooks = booksAdventure;
                } else if (category === 'csifi') {
                    fallbackBooks = booksCSiFi;
                } else if (category === 'fantasia') {
                    fallbackBooks = booksFantasy;
                } else if (category === 'horror') {
                    fallbackBooks = booksHorror;
                } else if (category === 'Romance') {
                    fallbackBooks = booksRomance;
                }
                setBooks(fallbackBooks);
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                console.log("print")
            } finally{
                setLoading(false)
            }
        };
        fetchBooks();
    }, [category]);
    return {books, loading}
}

export default useBooks;
