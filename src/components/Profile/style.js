import styled from 'styled-components';
/*
    ===============================
       Profile + Skills Styles
    ===============================
*/

export const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfilePage = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
    @media (max-width:768px) {
        margin-bottom: 20px;
}
`

export const ProfileList = styled.ul`
    list-style: none;
`

export const ProfileItem = styled.li`
    margin-bottom: 8px;
`

export const ProfileSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    font-weight: ${props => props.web === 6? "normal":""};
    color: ${props => props.web === 6? "#eb5424":""};
    font-weight: ${props => props.normal === "1"? "normal":""};
    width: ${props => props.normal === "1"? "50%":""};
    margin-left: ${props => props.normal === "1"? ".9%":""};
`
// End Profile style



export const Skills = styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`
export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`


export const BarParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`

export const BarParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.sp === 1?"100%":""};
    width: ${props => props.sp === 2?"90%":""};
    width: ${props => props.sp === 3?"80%":""};
`

export const ProfileTitle = styled.h2`
font-size: 40px; 
margin-bottom: 20px;
`
export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px;
`

export const ProfileTitleSpan = styled.span`
font-weight: normal;
`
export const SkillsTitleSpan = styled.span`
    font-weight: normal;
`
export const SkillsBarSpan = styled.span`
    float: ${props => props.title === "1"? "left":""};
    float: ${props => props.perc === "1"? "right":""};;
    margin-right: ${props => props.perc === "1"? "100px":""};
`


