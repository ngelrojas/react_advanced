import React, {useEffect, useState} from 'react';
import {Category} from '../category';
import { List, Item } from './styles.js';
// import { categories as mockCategories } from '../../../api/db.json';


export const ListOfCategories = () => {
    // const [categories, setCategories] = useState(mockCategories)
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    useEffect(function(){
       window.fetch('https://petgram-server.midudev.now.sh/gategories')
        .then(res => res.json())
        .then(response => {
            setCategories(response) 
        })
    }, [])

    useEffect(function(){
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed': ''}>
        {
            categories.map(category => <Item key={category.id}><Category {...category} /></Item>) 
        }
        </List>
    )
    return(
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    );
}
