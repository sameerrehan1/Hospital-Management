import React from "react";
import Hero from "../components/Hero"
import Biography from "../components/Biography";

const AboutUs = ()=>{
    return (
        <>
        <Hero  
        title={"Learn more About US | SamCare Hospitals"} 
        imageUrl={"/about.png"} 
        />
        <Biography imageUrl={"/whoweare.png"}/>
        </>
        );
};

export default AboutUs;