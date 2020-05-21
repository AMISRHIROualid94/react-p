import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor, LinkSpan, Label,InputCheck} from './style.js';

class Navbar extends React.Component{
    render(){
    return (
                <NavbarSection>
                    <div className="container">
                        {/* logo */}
                        <Logo>
                        <LogoText>Ultra Profile</LogoText>
                        </Logo>
                        {/* Navbar Responsive */}
                        <InputCheck type="checkbox" id="nav"/>
                        <Label htmlFor="nav"></Label>
                        {/* Link List */}
                        <UlList>
                            <ListItem><Link style={{textDecoration : "none"}} to="/"><LinkSpan>Home</LinkSpan></Link></ListItem>
                            <ListItem><Anchor href="#">Work</Anchor></ListItem>
                            <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                            <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                            <ListItem><Anchor href="#">About</Anchor></ListItem>
                            <ListItem><Link style={{textDecoration : "none"}} to="/contact"><LinkSpan>Contact</LinkSpan></Link></ListItem>
                        </UlList>
                    
                    </div>
                
                </NavbarSection>
    )}
}

export default Navbar;