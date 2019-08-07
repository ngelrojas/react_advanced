import React from 'react'
import ReactDOM from 'react-dom'
import { ListOfCategories } from './components/listOfCategories'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import Logo from './components/logo'


export const App = () => (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </div> 
)
