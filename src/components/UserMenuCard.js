import axios from 'axios'
import React from 'react'
import EmergencyContactForm from './EmergencyContactForm'
import ClassListContainer from '../containers/ClassListContainer'

import '../styles/UserMenuCard.css'

export default class UserMenuCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPhotoUploadButton: false
    }
  }

  componentDidMount() {
    this.checkPhoto()
  }

  uploadWidget() {
    let styleOverrides = "#cloudinary-overlay.modal {background-color: rgba(0,0,0,0.7);}"
    cloudinary.openUploadWidget(
      {
        stylesheet: styleOverrides,
        cloud_name: 'dqehbd6wb',
        upload_preset: 'qytqbro0',
        sources: ['local', 'url'],
        theme: 'white',
        public_id: this.props.user.last_name + '_' + this.props.user.first_name,
        tags:['cdi']
      },
      function(error, result) {
        console.log(result);
      });
  }

  checkPhoto() {
    axios.get('http://res.cloudinary.com/dqehbd6wb/image/upload/v1497381944/' + this.props.user.last_name + '_' + this.props.user.first_name)
      .catch(() => {
        this.setState({showPhotoUploadButton: true})
      })
  }

  renderPhotoUploadButton() {
    if (this.state.showPhotoUploadButton) {
      return (
        <div className='upload'>
          <div className='photo-btn-container'>
            <button onClick={this.uploadWidget.bind(this)} className='btn btn-primary btn-log'>
              Add Photo
            </button>
          </div>
          <h2 className='warning'>Please Provide a Head Shot&nbsp;<i className="fa fa-hand-o-up" aria-hidden="true"></i></h2>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className='user-menu'>
          {this.renderPhotoUploadButton()}
          <div className='top'>
            <EmergencyContactForm userId={this.props.user.id}/>
          </div>
          <div className='bottom'>
            <ClassListContainer/>
          </div>
        </div>
      </div>
    )
  }
}
