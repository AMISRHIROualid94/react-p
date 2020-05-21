import React from 'react';
import {HomePage,Add,HomeInformation,HomeTitle,HomeInfo, HomeDesc,Span, HomeBtn } from './style.js';


export const Home = ()=> {
    return (
        <div>
        <Add>

        </Add>
        <HomePage>

        <div className="container">
            <HomeInformation>
                <HomeTitle>React Project</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn className="home-btn">Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </HomePage>
    </div>
    )
}

