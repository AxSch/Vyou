import React, { PureComponent, Fragment } from 'react';
import accountSettingsUtils from './utils';

class AccountSettings extends PureComponent {
    constructor(props) {
      super(props);
      const { userEmail, profile } = this.props;
      
      this.state = {
        user: profile.userId,
        name: null,
        email: userEmail,
        sex: null,
        dob: null,
        addressNo: null,
        addressStreet: null,
        addressPostCode: null,
        addressCity: null,
        addressCountry: null,
        jobTitle: null,
        jobIndustry: null,
        bio: "n/a",
        education: null,
        userImg: "https://www.testuserImg.com",
        facebookProfile: "https://www.testFB.com",
        linkedInProfile: "https://www.testLIN.com",
        twitterProfile: "https://www.testTW.com",
        gitHubProfile: "https://www.testGH.com",
        instagramProfile: "https://www.testIG.com",
      };
      
      this.handleStateUpdate = this.handleStateUpdate.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    componentDidMount() {
      const { profile } = this.props;
      if (profile.hasProfile) {
        this.setState(() => {
          return {
            name: profile.userProfile.name,
            sex: profile.userProfile.sex,
            dob: profile.userProfile.dob,
            addressNo: profile.userProfile.address_no,
            addressStreet: profile.userProfile.addressStreet,
            addressPostCode: profile.userProfile.address_postcode,
            addressCity: profile.userProfile.address_city,
            addressCountry: profile.userProfile.address_country,
            jobTitle: profile.userProfile.job_title,
            jobIndustry: profile.userProfile.job_industry,
            bio: profile.userProfile.bio,
            education: profile.userProfile.education,
            userImg: profile.userProfile.user_img,
            facebookProfile: profile.userProfile.facebook_profile,
            linkedInProfile: profile.userProfile.linkedIn_profile,
            twitterProfile: profile.userProfile.twitter_profile,
            gitHubProfile: profile.userProfile.gitHub_profile,
            instagramProfile: profile.userProfile.instagram_profile,
          }
        }, () => {});
      }
    }

    renderUserSex(userSex) {
      if (userSex === "Female"){
        return (
          <label>
            Sex:
            <input type="radio" name="sex" value={"Male"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Male
            <input type="radio" name="sex" value={"Female"} checked onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Female
            <input type="radio" name="sex" value={"Other"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Other
          </label>
        );
      } else if (userSex === "Male") {
        return (
          <label>
            Sex:
            <input type="radio" name="sex" value={"Male"} checked onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Male
            <input type="radio" name="sex" value={"Female"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Female
            <input type="radio" name="sex" value={"Other"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Other
          </label>
        )
      } else if (userSex === "Other") {
        return (
          <label>
            Sex:
            <input type="radio" name="sex" value={"Male"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Male
            <input type="radio" name="sex" value={"Female"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Female
            <input type="radio" name="sex" value={"Other"} checked onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Other
          </label>
        );
      } else {
        return(
          <label>
              Sex:
              <input type="radio" name="sex" value={"Male"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Male
              <input type="radio" name="sex" value={"Female"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Female
              <input type="radio" name="sex" value={"Other"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Other
          </label>
        );
      }
    }

    renderUserName(userName){
      if (userName === "n/a") {
        return (
          <label>
            Name:
            <input type="text" name="name" onChange={(e) => this.onInputChange(e.target.value, "name")} />
          </label>
        );
      } else {
        return (
          <label>
            Name:
            <input type="text" name="name" defaultValue={userName} onChange={(e) => this.onInputChange(e.target.value, "name")}/>
          </label>
        );
      }
    }

    renderUserEmail(userEmail) {
      return (
        <label>
            Email:
            <input type="text" name="email" defaultValue={userEmail} onChange={(e) => this.onInputChange(e.target.value, "email")}/>
        </label>
      );
    }

    renderDateEmail(userDob) {
      if (userDob === "n/a") {
        return (
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" onChange={(e) => this.onInputChange(e.target.value, "dob")}/>
          </label>
        );
      } else {
        return (
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" defaultValue={userDob} onChange={(e) => this.onInputChange(e.target.value, "dob")}/>
          </label>
        );
      }
    }

    renderUserImg(userImg) {
      if (userImg === "https://www.testuserImg.com") {
        return (
          <label>
            Profile Picture:
            <input type="file" name="userImg" accept="image/png, image/jpeg" onChange={(e) => this.onInputChange(e.target.value, "userImg")} />
          </label>
        );
      } else {
        return (
          <label>
            Profile Picture:
            <input type="file" name="userImg" accept="image/png, image/jpeg" defaultValue={userImg} onChange={(e) => this.onInputChange(e.target.value, "userImg")} />
          </label>
        );
      }
    }

    renderAddressNo(userAddressNo) {
      if (userAddressNo === "n/a") {
        return (
          <Fragment>
            <label htmlFor={"addressNo"}>House/apartment Number</label>
            <input type="text" name="addressNo" onChange={(e) => this.onInputChange(e.target.value, "addressNo")}/>
          </Fragment>
        );   
      } else {
          return (
            <Fragment>
              <label htmlFor={"addressNo"}>House/apartment Number</label>
              <input type="text" name="addressNo" defaultValue={userAddressNo} onChange={(e) => this.onInputChange(e.target.value, "addressNo")}/>
            </Fragment>
          );

      }
    }

    renderAddressStreet(userAddressStreet) {
      if (userAddressStreet === "n/a") {
        return (
          <Fragment>
            <label htmlFor={"addressStreet"}>Street</label>
            <input type="text" name="addressStreet" onChange={(e) => this.onInputChange(e.target.value, "addressStreet")}/>
          </Fragment>
        );   
      } else {
          return (
            <Fragment>
              <label htmlFor={"addressStreet"}>Street</label>
              <input type="text" name="addressStreet" defaultValue={userAddressStreet} onChange={(e) => this.onInputChange(e.target.value, "addressStreet")}/>
            </Fragment>
          );

      }
    }

    renderAddressCity(userAddressCity) {
      if (userAddressCity === "n/a") {
        return (
          <Fragment>
            <label htmlFor={"addressCity"}>City</label>
            <input type="text" name="addressCity" onChange={(e) => this.onInputChange(e.target.value, "addressCity")}/>
          </Fragment>
        );   
      } else {
          return (
            <Fragment>
              <label htmlFor={"addressCity"}>City</label>
              <input type="text" name="addressCity" defaultValue={userAddressCity} onChange={(e) => this.onInputChange(e.target.value, "addressCity")}/>
            </Fragment>
          );

      }
    }

    renderAddressPostCode(userAddressPostCode) {
      if (userAddressPostCode === "n/a") {
        return (
          <Fragment>
            <label htmlFor={"addressPostCode"}>Post Code</label>
            <input type="text" name="addressPostCode" onChange={(e) => this.onInputChange(e.target.value, "addressPostCode")}/>
          </Fragment>
        );   
      } else {
          return (
            <Fragment>
              <label htmlFor={"addressPostCode"}>Post Code</label>
              <input type="text" name="addressPostCode" defaultValue={userAddressPostCode} onChange={(e) => this.onInputChange(e.target.value, "addressPostCode")}/>
            </Fragment>
          );

      }
    }

    renderAddressCountry(userAddressCity) {
      if (userAddressCity === 'n/a') {
        return (
          <label>
            Country
            <select defaultValue="----" name="addressCountry" onChange={(e) => this.onInputChange(e.target.value, "addressCountry")}>
              {accountSettingsUtils.renderCountriesOptions()}
            </select>
            
          </label>
        );
      } else {
        return (
          <label>
            Country
            <select defaultValue={userAddressCity} name="addressCountry" onChange={(e) => this.onInputChange(e.target.value, "addressCountry")}>
              {accountSettingsUtils.renderCountriesOptions()}
            </select>
          </label>
        );
      }
    }

    renderJobTitle(userJobTitle) {
      if (userJobTitle === 'n/a') {
        return (
          <label>
            Job Title:
            <input type="text" name="jobTitle" onChange={(e) => this.onInputChange(e.target.value, "jobTitle")}/>
          </label>
        );
      } else {
        return (
          <label>
            Job Title:
            <input type="text" name="jobTitle" defaultValue={userJobTitle} onChange={(e) => this.onInputChange(e.target.value, "jobTitle")}/>
          </label>
        );
      }
    }

    renderJobIndustry(userJobIndustry) {
      if (userJobIndustry === 'n/a') {
        return (
          <label>
            Industry:
            <select defaultValue="----" onChange={(e) => this.onInputChange(e.target.value, "jobIndustry")}>
              {accountSettingsUtils.renderIndustryOptions()}
            </select> 
          </label>
        );
      } else {
        return (
          <label>
            Industry:
            <select defaultValue={userJobIndustry} onChange={(e) => this.onInputChange(e.target.value, "jobIndustry")}>
              {accountSettingsUtils.renderIndustryOptions()}
            </select> 
          </label>
        );
      }
    }

    renderUserBio(userBio) {
      if (userBio === 'n/a') {
        return (
          <label>
              Summary:
              <textarea maxLength={250} rows={4} cols={32} onChange={(e) => this.onInputChange(e.target.value, "bio")} />
          </label>
        );
      } else {
        return (
          <label>
              Summary:
              <textarea defaultValue={userBio} maxLength={250} rows={4} cols={32} onChange={(e) => this.onInputChange(e.target.value, "bio")} />
          </label>
        );
      }
    }

    renderUserEducation(userEducation) {
      if (userEducation === 'n/a') {
        return (
          <label>
            Education:
            <input type="text" onChange={(e) => this.onInputChange(e.target.value, "education")} />
          </label>
        );
      } else {
        return (
          <label>
            Education:
            <input type="text" defaultValue={userEducation} onChange={(e) => this.onInputChange(e.target.value, "education")} />
          </label>
        );
      }
    }

    renderUserFBLink(userFBLink) {
      if (userFBLink === 'https://www.testFB.com') {
        return (
          <label>
            Facebook Profile:
            <input type="url" name="facebookURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "facebookURL")}/>
          </label>
        );
      } else {
        return (
          <label>
            Facebook Profile:
            <input type="url" name="facebookURL" pattern="https://.*" size="30" defaultValue={userFBLink} onChange={(e) => this.onInputChange(e.target.value, "facebookURL")}/>
          </label>
        );
      }
    }

    renderUserLINLink(userLINLink) {
      if (userLINLink === 'https://www.testLIN.com') {
        return (
          <label>
            LinkedIn Profile:
            <input type="url" name="facebookURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "linkedInURL")}/>
          </label>
        );
      } else {
        return (
          <label>
            LinkedIn Profile:
            <input type="url" name="facebookURL" pattern="https://.*" size="30" defaultValue={userLINLink} onChange={(e) => this.onInputChange(e.target.value, "linkedInURL")}/>
          </label>
        );
      }
    }
    
    renderUserGHLink(userGHLink) {
      if (userGHLink === 'https://www.testGH.com') {
        return (
          <label>
            GitHub Profile:
            <input type="url" name="gitHubURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "gitHubURL")}/>
          </label>
        );
      } else {
        return (
          <label>
            GitHub Profile:
            <input type="url" name="gitHubURL" pattern="https://.*" size="30" defaultValue={userGHLink} onChange={(e) => this.onInputChange(e.target.value, "gitHubURL")}/>
          </label>
        );
      }
    }

    renderUserTWLink(userTWLink) {
      if (userTWLink === 'https://www.testTW.com') {
        return (
          <label>
            Twitter Profile:
            <input type="url" name="twitterURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "twitterURL")}/>
          </label>
        );
      } else {
        return (
          <label>
            Twitter Profile:
            <input type="url" name="twitterURL" pattern="https://.*" size="30" defaultValue={userTWLink} onChange={(e) => this.onInputChange(e.target.value, "twitterURL")}/>
          </label>
        );
      }
    }

    renderUserINLink(userIGLink) {
      if (userIGLink === 'https://www.testIG.com') {
        return (
          <label>
            Instagram Profile:
            <input type="url" name="instagramURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "instagramURL")}/>
          </label>
        );
      } else {
        return (
          <label>
            Instagram Profile:
            <input type="url" name="instagramURL" pattern="https://.*" size="30" defaultValue={userIGLink} onChange={(e) => this.onInputChange(e.target.value, "instagramURL")}/>
          </label>
        );
      }
    }

    renderForm(profile) {
      const { email } = this.state;
      return (
        <Fragment>
            <form>
              <fieldset>
                <legend>Basic info</legend>
                  {this.renderUserName(profile.userProfile.name)}
                  {this.renderUserEmail(email)}
                  {this.renderUserSex(profile.userProfile.sex)}
                  {this.renderDateEmail(profile.userProfile.dob)}
                  {this.renderUserImg(profile.userProfile.user_img)}
              </fieldset>
              <fieldset>
                <legend>Address</legend>
                  {this.renderAddressNo(profile.userProfile.address_no)}
                  {this.renderAddressStreet(profile.userProfile.address_street)}
                  {this.renderAddressCity(profile.userProfile.address_city)}
                  {this.renderAddressPostCode(profile.userProfile.address_postcode)}
                  {this.renderAddressCountry(profile.userProfile.address_country)}
              </fieldset>
              <fieldset>
                <legend>Profession</legend>
                  {this.renderJobTitle(profile.userProfile.job_title)}
                  {this.renderJobIndustry(profile.userProfile.job_industry)}
                  {this.renderUserBio(profile.userProfile.bio)}
                  {this.renderUserEducation(profile.userProfile.education)}
              </fieldset>
              <fieldset>
                <legend>Connected Accounts</legend>
                  {this.renderUserFBLink(profile.userProfile.facebook_profile)}
                  {this.renderUserLINLink(profile.userProfile.linkedIn_profile)}
                  {this.renderUserGHLink(profile.userProfile.gitHub_profile)}
                  {this.renderUserTWLink(profile.userProfile.twitter_profile)}
                  {this.renderUserINLink(profile.userProfile.instagram_profile)}
              </fieldset>
              <button onClick={(e) => this.onSubmitChange(e)}>Save Changes</button>
            </form>
        </Fragment>
      );
    }

    handleStateUpdate(value, name) {
      this.setState(prevState => {
        return {
            [name]: value
        }
      }, () => {});
    }
    
    onInputChange(value, name) {
      switch(name) {
        case "name":
          this.handleStateUpdate(value, name);
          break;
        case "email":
          this.handleStateUpdate(value, name);
          break;
        case "sex":
          this.handleStateUpdate(value, name);
          break;
        case "dob":
          this.handleStateUpdate(value, name);
          break;
        case "addressNo":
          this.handleStateUpdate(value, name);
          break;
        case "addressStreet":
          this.handleStateUpdate(value, name);
          break;
        case "addressCity":
          this.handleStateUpdate(value, name);
          break;
        case "addressPostCode":
          this.handleStateUpdate(value, name);
          break;
        case "addressCountry":
          this.handleStateUpdate(value, name);
          break;
        case "jobTitle":
          this.handleStateUpdate(value, name);
          break;
        case "jobIndustry":
          this.handleStateUpdate(value, name);
          break;
        case "bio":
          this.handleStateUpdate(value, name);
          break;
        case "education":
          this.handleStateUpdate(value, name);
          break;
        case "userImg":
          this.handleStateUpdate(value, name);
          break;
        case "facebookURL":
          this.handleStateUpdate(value, name);
          break;
        case "linkedInURL":
          this.handleStateUpdate(value, name);
          break;
        case "gitHubURL":
          this.handleStateUpdate(value, name);
          break;
        case "twitterURL":
          this.handleStateUpdate(value, name);
          break;
        case "instagramURL":
          this.handleStateUpdate(value, name);
          break;
        default:
          return null;
      }
    }

    checkEmailChange(email, defaultEmail) {
      if (email !== defaultEmail) {
        // do put dispatch to user endpoint
      }
      return null;
    }
    
    onSubmitChange(e) {
      e.preventDefault();
      const { userEmail, createProfile, profile, updateProfile } = this.props;
      const { 
        name,
        email, 
        dob,
        sex,
        userImg,
        education,
        jobTitle,
        jobIndustry,
        bio,
        addressNo,
        addressStreet,
        addressCity,
        addressCountry,
        addressPostCode,
        facebookProfile,
        linkedInProfile,
        gitHubProfile,
        twitterProfile,
        instagramProfile
      } = this.state;
      const userProfileData = {
        user: profile.userId,
        name: name,
        sex: sex,
        dob: dob,
        addressNo: addressNo,
        addressStreet: addressStreet,
        addressCity: addressCity,
        addressPostCode: addressPostCode,
        addressCountry: addressCountry,
        jobTitle: jobTitle,
        jobIndustry: jobIndustry,
        bio: bio,
        education: education,
        userImg: userImg,
        facebookProfile: facebookProfile,
        linkedInProfile: linkedInProfile,
        twitterProfile: twitterProfile,
        gitHubProfile: gitHubProfile,
        instagramProfile: instagramProfile,
      };

      if (profile.hasProfile) {
        this.checkEmailChange(email, userEmail);
        updateProfile(profile.userId, userProfileData);
      } else {
          this.checkEmailChange(email, userEmail);
          createProfile(userProfileData);
      }
    }

    render() {
        const { profile } = this.props;
        // console.log(this.state);
        return(
          <div>
            <h3>Account Settings</h3>
            {this.renderForm(profile)}
          </div>
        );
    }

}

export default AccountSettings;