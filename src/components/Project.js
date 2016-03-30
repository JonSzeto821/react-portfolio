import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

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
      <div className="project-container">
        <div className="image-container" >
          <div className="screenshot-container">
            { project.gfycat1 ? <div className="gfyitem" data-id="SilkyNextIrishwolfhound" ></div> : <img src={project.desktop_image}/> }
          </div>
        </div>
        <div className="project-info">
          <h2>{project.title}</h2>
          <a href={project.project_url} target="_blank">Link</a>
          <a href={project.github_url} target="_blank">
            {project.github_url !== '' ? 'Github' : null}
          </a>
          <h5>Tech Stack</h5>
          <div className="tech-icon-container">{techStackItems}</div>
        </div>
            { project.mobile_image !== '' ? <Mobile image={project.mobile_image}/> : null }
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
