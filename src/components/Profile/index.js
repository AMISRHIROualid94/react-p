import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './style.js';
import { ProfileSkills, ProfilePage, ProfileTitle,ProfileSpan,ProfileList,ProfileItem, Skills, SkillsTitle,SkillsTitleSpan, SkillsDesc,SkillsBar,SkillsBarSpan,BarParent,BarParentSpan,ProfileTitleSpan } from './style.js';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            profile:[],
            skills : []
        }
    }
    componentDidMount(){
        axios.get('js/data.json')
        .then(response => this.setState({profile : response.data.profile}))
        axios.get('js/data.json')
        .then(response => this.setState({skills : response.data.skills}))
    }
        // const [profile,setProfile] = useState([]);
        // const [skills,setSkills] = useState([]);
        // useEffect(() =>{
        //     axios.get('js/data.json')
        // .then(response => setProfile(response.data.profile))
        // axios.get('js/data.json')
        // .then(response => setSkills(response.data.skills))
        // })
    render(){
        const {profile,skills} =this.state;
        const profileList = profile.map((profileItem)=>{
            return(
                <ProfileItem key={profileItem.id}>
                    <ProfileSpan>{profileItem.title}</ProfileSpan>
                    <ProfileSpan web={profileItem.id} normal="1">{profileItem.des}</ProfileSpan>
                </ProfileItem>
            )
        })
        const skillsList = skills.map((skillsItem)=>{
            return(
                <SkillsBar key={skillsItem.id}>
                <SkillsBarSpan title="1">{skillsItem.title}</SkillsBarSpan>
                <SkillsBarSpan perc="1">{skillsItem.per}</SkillsBarSpan>
                <BarParent>
                    <BarParentSpan sp={skillsItem.id}></BarParentSpan>
                </BarParent>
            </SkillsBar>
            )
        })
    return (
        <ProfileSkills>
            <div className="container">
                <ProfilePage>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        {profileList}
                    </ProfileList>
                </ProfilePage>
                <Skills>
                    <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {skillsList}
                </Skills>
                
            </div>
        </ProfileSkills>
    )}

}
export default Profile;