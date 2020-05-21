import React from 'react';
import './style.js';
import { DropPage, DropTitle, Span, Form, FormInput, Input,InputForm,InputSub, Textarea, InputSubmit } from './style.js';
import {Footer} from '../Footer/index';

export const Contact = ()=> {
    return (
        <React.Fragment>
        <DropPage>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputForm dir="left" type="text" placeholder="Your Name"/>
                        <InputForm dir="right" type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputSub type="text" i="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
            
        </DropPage>
        <Footer/>
        </React.Fragment>
       
    )
}

