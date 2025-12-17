import { JSX } from "react";
import { Hero } from "./Sections/Hero";
import { About } from "./Sections/About";
import { Project } from "./Sections/Projects";
import { Footer } from "./Sections/Footer";


export const HomePage = (): JSX.Element =>{
    return(
        <div>
        <Hero/>
        <About/>
        <Project/>
        <Footer/>
    
        </div>
    )
}