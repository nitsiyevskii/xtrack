import * as React from 'react'
import { Header } from '../Header/Header'
import NavigationBar from '../NavigationBar/NavigationBar'
import { Albums } from '../Albums/Albums'
import './app.less';
export class App extends React.Component<{}, { showHeader: boolean }> {
    constructor(props: {}) {
        super(props)
        this.state = {
            showHeader: true
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if( this.state.showHeader){
            if(document.documentElement.scrollTop > 100) {
                this.setState({
                    showHeader: false
                })
            }
        } else {
            if(document.documentElement.scrollTop == 0){
                this.setState({
                    showHeader: true
                })
            }
        }
    }

    render() {
        return (
            <>
                <Header />
                <NavigationBar />
                <Albums />
            </>
        )
    }
}