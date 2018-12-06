import React, { PureComponent } from 'react';

class AccountSettings extends PureComponent {
    constructor(props) {
      super(props);
      const { userEmail } = this.props;
      
      this.state = {
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
        bio: null,
        education: null,
        userImg: null,
        facebookProfile: null,
        linkedInProfile: null,
        twitterProfile: null,
        gitHubProfile: null,
        instagramProfile: null,
      };
      
      this.handleStateUpdate = this.handleStateUpdate.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
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

    render() {
        const { userEmail } = this.props;
        console.log(this.state);

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
                  <input type="text" name="addressCountry" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressCountry")}/>
                </label>
                <label>
                  Job Title:
                  <input type="text" name="jobTitle" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "addressCountry")}/>
                </label>
                <label>
                  Industry:
                  <select defaultValue="----" onChange={(e) => this.onInputChange(e.target.value, "jobIndustry")}>
                    <option value="default">------</option>
                    <option value="Aerospace">Aerospace</option>
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
                <button>Save Changes</button>
              </form>
            </div>
        );
    }

}

export default AccountSettings;