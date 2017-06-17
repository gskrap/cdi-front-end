import axios from 'axios'
import React from 'react'
import EmergencyContactForm from './EmergencyContactForm'
import ClassListContainer from '../containers/ClassListContainer'
import TeacherListContainer from '../containers/TeacherListContainer'

import '../styles/UserMenuCard.css'

export default class UserMenuCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPhotoUploadButton: false
    }
  }

  selected(view) {
    return this.props.userView === view
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
        public_id: '2017_' + this.props.user.last_name + '_' + this.props.user.first_name + '_cdi_gskrap',
        tags:['cdi']
      },
      function(error, result) {
        this.setState({showPhotoUploadButton: false})
        console.log(result);
      }.bind(this));
  }

  checkPhoto() {
    axios.get('http://res.cloudinary.com/dqehbd6wb/image/upload/v1497381944/' + '2017_' + this.props.user.last_name + '_' + this.props.user.first_name + '_cdi_gskrap')
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

  renderView() {
    switch(this.props.userView) {
      case 'classes':
        return <ClassListContainer/>
      case 'teachers':
        return <TeacherListContainer/>
    }
  }

  render() {
    return (
      <div>
        <div className='user-menu'>
          {this.renderPhotoUploadButton()}
          <div className='top'>
            <EmergencyContactForm userId={this.props.user.id}/>
            <button className={this.selected('classes')} onClick={() => this.props.updateUserView('classes')}>Classes</button>
            <button className={this.selected('teachers')} onClick={() => this.props.updateUserView('teachers')}>Teachers</button>
          </div>
          <div className='bottom'>
            {this.renderView()}
          </div>
        </div>
      </div>
    )
  }
}
