import React, { Component } from 'react';
class Profile extends Component {

    renderProfileHeaderSection (name, address, dateJoined) {
      return (
        <div>
          <h3>Welcome back, {name} </h3>
          <p>{address}</p>
          <p>{dateJoined}</p>
        </div>
      );
    }
    renderImageSection(url, name) {
      return(
        <div>
          <img className=""
              src={url}
              alt={`userImg-for-${name}`} 
          />
        </div>
      );
    }

    renderBioSection(bio) {
      return (
        <div>
          <p>{bio !== "n/a" ? bio: null}</p>
        </div>
      );
    }

    renderQuestionsSection(answers, questions) {
      return (
        <div>
          <h4>Questions</h4>
          <p></p>
        </div>
      );
    }
    
    renderConnectedAccountsSection(fbProfile, lINProfile, twitProfile, instaProfile) {
      return (
        <div>
          <h4>Connected accounts</h4>
          <p></p>
        </div>
      );
    }

    renderPersonalInfoSection() {
      return (
        <div>
          <h4>Personal info</h4>
          <p></p>
        </div>
      );
    }

    render() {
        const { userProfile } = this.props;

        return (
            <div>
              {this.renderProfileHeaderSection(userProfile.name, userProfile.address, userProfile.creation_date)}
              {this.renderImageSection(userProfile.user_img, userProfile.name)}
              {this.renderBioSection(userProfile.bio)}
              {this.renderPersonalInfoSection(userProfile.job_title, userProfile.job_industry, userProfile.education)}
              {this.renderQuestionsSection()}
              {this.renderConnectedAccountsSection(userProfile.facebook_profile, userProfile.linkedIn_profile, userProfile.twitter_profile, userProfile.gitHub_profile, userProfile.instagram_profile)}
            </div>
        );
    }

}

export default Profile;