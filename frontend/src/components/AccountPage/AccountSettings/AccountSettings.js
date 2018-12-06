import React, { PureComponent } from 'react';

class AccountSettings extends PureComponent {
    render() {
        const { userEmail } = this.props;
        return (
            <div>
              <h3>Account Settings</h3>
              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Email:
                  <input type="text" name="email" defaultValue={userEmail}/>
                </label>
                <label>
                  Sex:
                  <input type="radio" name="gender" value={"Male"}/>Male
                  <input type="radio" name="gender" value={"Female"}/>Female
                  <input type="radio" name="gender" value={"Other"}/>Other
                </label>
                <label>
                  Date of Birth:
                  <input type="date" name="gender" defaultValue={""}/>
                </label>
                <label>
                  Address:

                  <label htmlFor={"addressNo"}>House/apartment Number</label>
                  <input type="text" name="addressNo" defaultValue={""}/>


                  <label htmlFor={"addressStreet"}>Street</label>
                  <input type="text" name="addressStreet" defaultValue={""}/>
                  
                  <label htmlFor={"addressCity"}>City</label>
                  <input type="text" name="addressCity" defaultValue={""}/>
                  
                  <label htmlFor={"addressPostCode"}>Post Code</label>
                  <input type="text" name="addressPostCode" defaultValue={""}/>
                  
                  <label htmlFor={"addressCountry"}>Country</label>
                  <input type="text" name="addressCountry" defaultValue={""}/>
                </label>
                <label>
                  Job Title:
                  <input type="text" name="jobTitle" defaultValue={""}/>
                </label>
                <label>
                  Industry:
                  <select>
                    <option value="default" selected>------</option>
                    <option value="Aerospace">Aerospace</option>
                  </select> 
                </label>
                <label>
                  Summary:
                  <textarea maxlength={250} rows={4} cols={32}/>
                </label>
                <label>
                  Education:
                  <input type="text" maxlength={250} rows={4} cols={32} />
                </label>
                <label>
                  Profile Picture:
                  <input type="file" name="userImg" accept="image/png, image/jpeg" defaultValue={""} />
                </label>
                <label>
                  Facebook Profile:
                  <input type="url" name="facebookURL" pattern="https://.*" size="30" placeholder="https://example.com"/>
                </label>
                <label>
                  LinkedIn Profile:
                  <input type="url" name="linkedInURL" pattern="https://.*" size="30" placeholder="https://example.com"/>
                </label>
                <label>
                  GitHub Profile:
                  <input type="url" name="gitHubURL" pattern="https://.*" size="30" placeholder="https://example.com"/>
                </label>
                <label>
                  Twitter Profile:
                  <input type="url" name="twitterURL" pattern="https://.*" size="30" placeholder="https://example.com"/>
                </label>
                <label>
                  Instagram Profile:
                  <input type="url" name="instagramURL" pattern="https://.*" size="30" placeholder="https://example.com"/>
                </label>
              </form>
            </div>
        );
    }

}

export default AccountSettings;