import styled from 'styled-components';
/*
    ===============================
            Navbar Styles
    ===============================
*/
export const NavbarSection = styled.div `
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: fixed;
    border-bottom: 1px solid #000;
    width:100%;
    z-index :100;
    @media (max-width : 991px) 
    {
        position:relative;
    }
`

export const Logo = styled.div `
    width: 50%;
    float: left;
    /* Media for Navbar Style */ 
    @media (max-width : 991px)
     {
        width: 100%;
        float: none;
    }
`


export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
`



    
export const UlList = styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    /* Media for Navbar Style */ 
    @media (max-width : 991px) 
    {
        width: 100%;
        float:  none;
        margin-top: 20px;
        display: none;
    }
`
export const  Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
`
export const LinkSpan = styled.span`
    color: #222;
    padding: 10px 15px;
    font-weight: bold;
    @media (max-width : 991px) 
    {
      display:block;
    }
&:hover{
    color:red;
}
`
export const ListItem = styled.li`
    display: inline-block;
    /* Media for Navbar Style */ 
    @media (max-width : 991px) 
    {
        display: block;
        text-align: center;
    }
`
export const Label = styled.label`
    position: absolute;
    top: 13px;
    right: 25px;
    display: block;
    width: 15px;
    height: 15px;
    background: url('images/NavbarImg/open.png') no-repeat ;
    background-size: cover;
    padding: 20px;
    cursor: pointer;  
    @media (min-width : 992px) {
        display: none
}
`
export const InputCheck = styled.input`
    position: absolute;
    top: 13px;
    right: 25px;
    display: none;
        &:checked + ${Label} {
            background: url('images/NavbarImg/close.png') no-repeat ;
            background-size: cover;
        }
        &:checked ~ ${UlList} {
            display: block;
        }   
`













