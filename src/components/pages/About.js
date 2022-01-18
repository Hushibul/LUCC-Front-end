import React, { Fragment } from 'react';
import Header from '../layouts/Header';
import History from '../sections/Lucc/AboutLucc/History';
import Historytab from '../sections/Lucc/AboutLucc/HistoryTab';
import Community from '../sections/Lucc/AboutLucc/Community'
import Goal from '../sections/Lucc/AboutLucc/Goal';
import Footer from '../layouts/Footer';
class About extends React.Component{
    render(){
        return(
            <Fragment>
            <Header />
            <History />
            <Historytab />
            <Community />
            <Goal />
            <Footer />
            </Fragment>
        );
    }
}

export default About;