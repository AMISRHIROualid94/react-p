import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.js';
import { SocialMediaPage,Icon,Social, Description, Span } from './style.js';

export const SocialMedia = ()=> {
    const [socialmedia,setSM] = useState([]);
    useEffect(()=>{
        axios.get('js/data.json').then(response => setSM(response.data.social))
    },[])
    const socialList = socialmedia.map((socialItem)=>{
        return (
            <Social sm={socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <Description>
                <Span>{socialItem.title}</Span>
                <Span info="2">{socialItem.body}</Span>
            </Description>
        </Social>
        )
    })
    return (
        <SocialMediaPage>
            {socialList}
        </SocialMediaPage>
    )
}

