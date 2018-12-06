import React, { PureComponent } from 'react';
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

    onSubmitChange(e) {
      e.preventDefault();
      const { userEmail, createProfile, profile } = this.props;
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
        email: userEmail,
        sex: sex,
        dob: dob,
        address: addressNo + ' ' + addressStreet + ', ' + addressCity + ', ' + addressPostCode + ', ' + addressCountry,
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

      if (email !== userEmail) {
        console.log("dispatch UserPut endpoint");
        userProfileData.email = email;
        createProfile(userProfileData);
      } else {
        createProfile(userProfileData);
      }
    }

    render() {
        const { userEmail } = this.props;

        return (
            <div>
              <h3>Account Settings</h3>
              <form>
                <label>
                  Name:
                  <input type="text" name="name" onChange={(e) => this.onInputChange(e.target.value, "name")}/>
                </label>
                <label>
                  Email:
                  <input type="text" name="email" defaultValue={userEmail} onChange={(e) => this.onInputChange(e.target.value, "email")}/>
                </label>
                <label>
                  Sex:
                  <input type="radio" name="sex" value={"Male"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Male
                  <input type="radio" name="sex" value={"Female"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Female
                  <input type="radio" name="sex" value={"Other"} onChange={(e) => this.onInputChange(e.target.value, "sex")}/>Other
                </label>
                <label>
                  Date of Birth:
                  <input type="date" name="dateOfBirth" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "dob")}/>
                </label>
                <label>
                  Address:
                  <label htmlFor={"addressNo"}>House/apartment Number</label>
                  <input type="text" name="addressNo" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressNo")}/>

                  <label htmlFor={"addressStreet"}>Street</label>
                  <input type="text" name="addressStreet" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressStreet")}/>
                  
                  <label htmlFor={"addressCity"}>City</label>
                  <input type="text" name="addressCity" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressCity")}/>
                  
                  <label htmlFor={"addressPostCode"}>Post Code</label>
                  <input type="text" name="addressPostCode" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressPostCode")}/>
                  
                  <label htmlFor={"addressCountry"}>Country</label>
                  <select defaultValue="----" name="addressCountry" onChange={(e) => this.onInputChange(e.target.value, "addressCountry")}>
                    {accountSettingsUtils.renderCountriesOptions()}
                  </select>
                </label>
                <label>
                  Job Title:
                  <input type="text" name="jobTitle" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "jobTitle")}/>
                </label>
                <label>
                  Industry:
                  <select defaultValue="----" onChange={(e) => this.onInputChange(e.target.value, "jobIndustry")}>
                    {accountSettingsUtils.renderIndustryOptions()}
                  </select> 
                </label>
                <label>
                  Summary:
                  <textarea maxLength={250} rows={4} cols={32} onChange={(e) => this.onInputChange(e.target.value, "bio")} />
                </label>
                <label>
                  Education:
                  <input type="text" maxLength={250} rows={4} cols={32} onChange={(e) => this.onInputChange(e.target.value, "education")} />
                </label>
                <label>
                  Profile Picture:
                  <input type="file" name="userImg" accept="image/png, image/jpeg" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "userImg")} />
                </label>
                <label>
                  Facebook Profile:
                  <input type="url" name="facebookURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "facebookURL")}/>
                </label>
                <label>
                  LinkedIn Profile:
                  <input type="url" name="linkedInURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "linkedInURL")} />
                </label>
                <label>
                  GitHub Profile:
                  <input type="url" name="gitHubURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "gitHubURL")}/>
                </label>
                <label>
                  Twitter Profile:
                  <input type="url" name="twitterURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "twitterURL")}/>
                </label>
                <label>
                  Instagram Profile:
                  <input type="url" name="instagramURL" pattern="https://.*" size="30" placeholder="https://example.com" onChange={(e) => this.onInputChange(e.target.value, "instagramURL")}/>
                </label>
                <button onClick={(e) => this.onSubmitChange(e)}>Save Changes</button>
              </form>
            </div>
        );
    }

}

export default AccountSettings;