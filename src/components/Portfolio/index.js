import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './style.js';
import { PortfolioPage, PortfolioTitle, Span, PortfolioList,PortfolioItem, Overlay,Div,BoxDiv,OverlaySpan,Image } from './style.js';

export const Portfolio = () =>{

    const [images , setImage] = useState([]);
    useEffect(() => {
        axios.get('js/data.json')
          .then(response => (setImage(response.data.portfolio)))
    }, [])
    const portfolioList = images.map((portfolioItem) =>{
        return(
            <BoxDiv key={portfolioItem.id}>
                <Image src={portfolioItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </BoxDiv>
        )
})

    return (
        <PortfolioPage>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active="on">All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        <Div>           
            {portfolioList}
        </Div>
    </PortfolioPage>
    )
}
