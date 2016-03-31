import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';
import '../styles/project.scss';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { project } = this.props;
    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
      <div className="project-container" style={{background: project.background_color}}>
        <div className="desktop-screenshot-container">
          { project.gfycat ?
            <video className="gfyVid" controls>
              <source src={`https://fat.gfycat.com/${project.gfycat}.mp4`} type="video/mp4" />
              <source src={`https://fat.gfycat.com/${project.gfycat}.webm`} type="video/webm" />
              Your browser does not support the video tag.
            </video> : <img src={project.desktop_image}/> }
        </div>
        <div className="project-body">
          <div className="project-intro">
            <h2>{project.title}</h2>
            { project.tagline }
            <ul className="tech-icon-container">
              {techStackItems}
            </ul>
          </div>
          { project.mobile_image !== '' ? <Mobile image={project.mobile_image}/> :
          <div className="desktop-screenshot-container no-mobile">
            { project.gfycat ? <div className="gfyitem" data-id="SilkyNextIrishwolfhound"></div> : <img src={project.desktop_image}/> }
          </div> }
          <ul className="project-links">
            <a href={project.project_url} target="_blank">
              <li>View project
              <i className="fa fa-external-link-square"></i></li>
            </a>
            <a href={project.github_url} target="_blank">
              <li>Github
              <i className="fa fa-external-link-square"></i></li>
            </a>
          </ul>
          <div className="project-details">
            {project.role}
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
