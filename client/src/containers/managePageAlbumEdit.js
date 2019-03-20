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
import { getAlbum as getAlbumAction, editAlbum as editAlbumAction } from '../actions/albumActions';

const styles = () => ({
  ...whiteInput,
  blueButton,
});

class ManagePageAlbumEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getAlbum, match } = this.props;
    const { albumId } = match.params;
    getAlbum(albumId);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit() {
    const { title, year } = this.state;
    const { editAlbum, history, match } = this.props;
    const { albumId } = match.params;
    editAlbum(history, albumId, { title, year });
  }

  render() {
    const { classes, album } = this.props;

    return (
      <div className="artist-edit">
        <div className="container">
          <h3>Edit Album</h3>
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
                    defaultValue={album.title}
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
                    defaultValue={album.year}
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
  album: state.albumStore.show,
});

const mapDispatchToProps = dispatch => ({
  getAlbum(id) {
    return dispatch(getAlbumAction(id));
  },
  editAlbum(history, id, data) {
    return dispatch(editAlbumAction(history, id, data));
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManagePageAlbumEdit));