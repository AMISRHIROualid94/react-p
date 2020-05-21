import React from 'react';
import axios from 'axios';
import { WorkPage, WorkTitle, Span,Part, Icon, PartTitle,Line, PartDesc } from './style';
class Work extends React.Component {
    constructor(){
        super();
        this.state={
            works : []
        }
    }
    componentDidMount(){
        axios.get("js/data.json")
        .then(response => (this.setState({works : response.data.works})))
    }
    render(){
        const {works} = this.state;
        const worksList = works.map((workItem) =>{
            return (
            <Part id={workItem.id} key={workItem.id}>
            <Icon className={workItem.icon_name}></Icon>
            <PartTitle>{workItem.title}</PartTitle>
            <Line/>
            <PartDesc>{workItem.body}</PartDesc>
        </Part>)
        })
    return (
        <WorkPage>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worksList}
        </div>
    </WorkPage>
    )}
}

export default Work;