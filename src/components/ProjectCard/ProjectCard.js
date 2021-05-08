import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './ProjectCard.css';

const ProjectCard = ({ projectData }) => {
  return (
    <div className="projectCard__container">
      <Card className="projectCard__card">
        <CardActionArea className="projectCard__cardActionArea">
          <img
            className="projectCard__img"
            src={ projectData.image }
            alt={ projectData.name }
          />
          <CardContent className="projectCard__cardContent">
            <h2>{ projectData.name }</h2>
            <p>{ projectData.description }</p>
            <div>
              { projectData.techStack.map((skill, index) => 
                (
                  <span key={ index }>#{ skill }  </span>
                )
              )}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className="projectCard__cardActions">
          <Button 
            size="small" 
            color="primary" 
            className="projectCard__cardButton"
          >
            <a className="projectCard__anchor" href={ projectData.github } target="_blank" rel="noreferrer">Source Code</a>
          </Button>
          <Button 
            size="small" 
            color="primary" 
            className="projectCard__cardButton"
          >
            <a className="projectCard__anchor" href={ projectData.link } target="_blank" rel="noreferrer">See Project</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProjectCard;
