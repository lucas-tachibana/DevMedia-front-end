import React from "react";  

import Header from '../components/Header';
import Footer from '../components/Footer';

import './estilo.css';
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <div className="site">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}