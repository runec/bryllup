import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Praktisk from '../components/Praktisk';
import BackgroundImage from '../images/baggrund.jpg';
import AttractionsImage from '../images/attractions.png';
import { background } from '../styles/app.scss';
import ImageModal from '../components/general/ImageModal';


class PraktiskContainer extends React.Component {
  constructor() {
    super();
    this.state = { showAttractionsModal: false };
    this.toggleAttractionsModal = this.toggleAttractionsModal.bind(this);
  }

  toggleAttractionsModal() {
    this.setState({showAttractionsModal: !this.state.showAttractionsModal});
  }

  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <Praktisk />
        <ImageModal
          imgSrc={AttractionsImage}
          show={this.state.showAttractionsModal}
          toggle={this.toggleAttractionsModal}
          title={'Seværdigheder på Fejø'}
        />
        <input type="button" onClick={this.toggleAttractionsModal} value="clickme"/>
      </div>
    );
  }
}

PraktiskContainer.propTypes = {
};


export default connect(null, null)(PraktiskContainer);
