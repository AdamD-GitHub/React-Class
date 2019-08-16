import React, { Component, Fragment } from "react";
import {Button, Grid, Icon, Paper, Typography} from '@material-ui/core';


class App extends Component {

  static defaultProps = {
    exercise  : { number: 10, title: 'State change'},
  };
  state = {
    author : { 
      name: 'Doug Hoff', 
      company: 'Centriq Training' 
    },
    update : {
      date: new Date().toLocaleDateString(), 
      time: new Date().toLocaleTimeString()
    }
  }

  render() {
    const {exercise } = this.props;
    const {author, update } = this.state;
    return (
      <Grid container spacing={2}>

        <Grid item>
          <ExerciseHeader3 number={exercise.number} title={exercise.title}></ExerciseHeader3>
          <Typography style={{float:'right'}} variant='caption'>Updated {update.time}</Typography>
        </Grid> {/* Grid item 1 */}

        <DataGridItem fieldName='Name' type='Instructor'>
          {author.name}
        </DataGridItem>

        <DataGridItem fieldName='Name' type='Education' db='Company'>
          {author.company}
        </DataGridItem>


      </Grid> // the grid container

    );
  }
}

const ExerciseHeader3 = props => (
  <Typography variant="h2" gutterBottom> 
    <i className = {props.faIcon} ></i>&nbsp;
    Exercise {props.number} - {props.title}
  </Typography>
);
ExerciseHeader3.defaultProps = {number:0, title:'Default exercise', faIcon: 'fas fa-user-edit'}
