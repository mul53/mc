import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core';

import { blueButton, whiteInput } from '../util/styles';
import { addArtist } from '../actions/artistActions';

const styles = () => ({
  ...whiteInput,
  blueButton,
});

class ManagePageArtistAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const { name, label } = this.state;
    const { history } = this.props;
    this.props.addArtist(history, { name, label });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="artist-add">
        <div className="container">
          <h3>Add Artist</h3>
          <form action="">
            <div className="row">
              <div className="col-md-12">
                <FormControl>
                  <InputLabel classes={{
                    root: classes.cssLabel,
                    focused: classes.cssLabel,
                  }}
                  >
                    Name
                  </InputLabel>
                  <Input
                    classes={{
                      root: classes.cssUnderline,
                      focused: classes.cssLabel,
                    }}
                    name="name"
                    onChange={this.handleChange}
                  />
                </FormControl>
              </div>
              <div className="col-md-12">
                <FormControl>
                  <InputLabel classes={{
                    root: classes.cssLabel,
                    focused: classes.cssLabel,
                  }}
                  >
                    Label
                  </InputLabel>
                  <Input
                    classes={{
                      root: classes.cssUnderline,
                      focused: classes.cssLabel,
                    }}
                    name="label"
                    onChange={this.handleChange}
                  />
                </FormControl>
              </div>
              <div className="col-md-12">
                <Button className={classes.blueButton} onClick={this.handleSubmit}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addArtist(history, data) {
    return dispatch(addArtist(history, data));
  },
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(ManagePageArtistAdd));
