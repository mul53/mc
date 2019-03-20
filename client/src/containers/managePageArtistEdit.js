import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core';

import { blueButton, whiteInput } from '../util/styles';
import { getArtist as getArtistAction, editArtist as editArtistAction } from '../actions/artistActions';

const styles = () => ({
  ...whiteInput,
  blueButton,
});

class ManagePageArtistEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getArtist, match } = this.props;
    const { artistId } = match.params;
    getArtist(artistId);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const { name, label } = this.state;
    const { editArtist, history, match } = this.props;
    const { artistId } = match.params;
    editArtist(history, artistId, { name, label });
  }

  render() {
    const { classes, artist } = this.props;

    return (
      <div className="artist-edit">
        <div className="container">
          <h3>Edit Artist</h3>
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
                    defaultValue={artist.name}
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
                    defaultValue={artist.label}
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

const mapStateToProps = state => ({
  artist: state.artistStore.show,
});

const mapDispatchToProps = dispatch => ({
  getArtist(id) {
    return dispatch(getArtistAction(id));
  },
  editArtist(history, id, data) {
    return dispatch(editArtistAction(history, id, data));
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManagePageArtistEdit));
