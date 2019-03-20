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
import { addAlbum as addAlbumAction } from '../actions/albumActions';

const styles = () => ({
  ...whiteInput,
  blueButton,
});

class ManagePageAlbumAdd extends Component {
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
    const { title, year } = this.state;
    const { history, match } = this.props;
    const { artistId } = match.params;
    this.props.addAlbum(history, { title, year, artist: artistId });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="album-add">
        <div className="container">
          <h3>Add Album</h3>
          <form action="">
            <div className="row">
              <div className="col-md-12">
                <FormControl>
                  <InputLabel classes={{
                    root: classes.cssLabel,
                    focused: classes.cssLabel,
                  }}
                  >
                    Title
                  </InputLabel>
                  <Input
                    classes={{
                      root: classes.cssUnderline,
                      focused: classes.cssLabel,
                    }}
                    name="title"
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
                    Year
                  </InputLabel>
                  <Input
                    classes={{
                      root: classes.cssUnderline,
                      focused: classes.cssLabel,
                    }}
                    name="year"
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
  addAlbum(history, data) {
    return dispatch(addAlbumAction(history, data));
  },
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(ManagePageAlbumAdd));
