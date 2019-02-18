import * as React from 'react'
import Header from '../Header/Header'
import NavigationBar from '../NavigationBar/NavigationBar'
import './app.less';

interface appProps { children: React.ReactChild }

export function App(props: appProps) {
    return (
        <>
            <Header />
            <NavigationBar />
            {props.children}
        </>
    )
}