import React, { Component } from 'react';
class Profile extends Component {
    constructor(props) {
        super(props);

        this.renderProfileHeaderSection = this.renderProfileHeaderSection.bind(this);
        this.renderImageSection = this.renderImageSection.bind(this);
        this.renderBioSection = this.renderBioSection.bind(this);
        this.renderQuestionsSection = this.renderQuestionsSection.bind(this);
        this.checkFacebookComplete = this.checkFacebookComplete.bind(this);
        this.checkLinkedInComplete = this.checkLinkedInComplete.bind(this);
        this.checkTwitterComplete = this.checkTwitterComplete.bind(this);
        this.checkGitHubComplete = this.checkGitHubComplete.bind(this);
        this.checkInstaComplete = this.checkInstaComplete.bind(this);
        this.renderConnectedAccountsSection = this.renderConnectedAccountsSection.bind(this);
        this.renderProfessionSection = this.renderProfessionSection.bind(this);
    }

    renderProfileHeaderSection (name, addressCity, addressCountry, dateJoined) {
      return (
        <div>
          <h3>Welcome back, {name} </h3>
          <p>{addressCity}, {addressCountry} - Joined {dateJoined}</p>
        </div>
      );
    }
    
    renderImageSection(url, name) {
      if (url !== "https://www.testuserImg.com") {
        return(
          <div>
            <img className=""
                src={url}
                alt={`userImg-for-${name}`} 
            />
          </div>
        );
      }
      return null;
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

    checkFacebookComplete(fbLink) {
      if(fbLink === "https://www.testFB.com") {
        // return IncompleteIconComponent
      } else {
        // return CompleteIconComponent
      }
    }
    
    checkLinkedInComplete(lINLink) {
      if(lINLink === "https://www.testLIN.com") {
        // return IncompleteIconComponent
      } else {
        // return CompleteIconComponent
      }
    }
    
    checkTwitterComplete(twLink) {
      if(twLink === "https://www.testTW.com") {
        // return IncompleteIconComponent
      } else {
        // return CompleteIconComponent
      }
    }
    
    checkGitHubComplete(ghLink) {
      if(ghLink === "https://www.testGH.com") {
        // return IncompleteIconComponent
      } else {
        // return CompleteIconComponent
      }
    }
    
    checkInstaComplete(instaLink) {
      if(instaLink === "https://www.testIG.com") {
        // return IncompleteIconComponent
      } else {
        // return CompleteIconComponent
      }
    }
    
    renderConnectedAccountsSection(account) {
      return (
        <div>
          <h4>Connected accounts</h4>
          <p>{this.checkFacebookComplete(account.facebook_profile)}</p>
          <p>{this.checkLinkedInComplete(account.linkedIn_profile)}</p>
          <p>{this.checkGitHubComplete(account.gitHub_profile)}</p>
          <p>{this.checkTwitterComplete(account.twitter_profile)}</p>
          <p>{this.checkInstaComplete(account.instagram_profile)}</p>
        </div>
      );
    }

    renderProfessionSection(jobTitle, jobIndustry, education) {
      return (
        <div>
          <h4>Professional Info</h4>
          <p>{jobTitle}</p>
          <p>{jobIndustry}</p>
          <p>{education}</p>
        </div>
      );
    }

    render() {
        const { userProfile } = this.props;

        return (
            <div>
              {this.renderProfileHeaderSection(userProfile.name, userProfile.address_city, userProfile.address_country, userProfile.creation_date)}
              {this.renderImageSection(userProfile.user_img, userProfile.name)}
              {this.renderBioSection(userProfile.bio)}
              {this.renderProfessionSection(userProfile.job_title, userProfile.job_industry, userProfile.education)}
              {this.renderQuestionsSection()}
              {this.renderConnectedAccountsSection(userProfile)}
            </div>
        );
    }

}

export default Profile;