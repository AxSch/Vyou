import React, { PureComponent, Fragment } from 'react';

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
      this.renderIndustryOptions = this.renderIndustryOptions.bind(this);
      this.renderIndustryOptions = this.renderIndustryOptions.bind(this);
      this.renderCountriesOptions = this.renderCountriesOptions.bind(this);
    }

    renderIndustryOptions() {
      return (
        <Fragment>
          <option value="default">------</option>
          <option value="Aerospace">Aerospace</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Chemical">Chemical</option>
          <option value="Computer">Computer</option>
          <option value="Construction">Construction</option>
          <option value="Defense">Defense</option>
          <option value="Education">Education</option>
          <option value="Energy">Energy</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Financial">Financial</option>
          <option value="Food">Food</option>
          <option value="Health Care">Health Care</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Information">Information</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Media">Media</option>
          <option value="Mining">Mining</option>
          <option value="Telecommunications">Telecommunications</option>
          <option value="Transport">Transport</option>
          <option value="Water">Water</option>
          <option values="Sales">Sales</option>
        </Fragment>
      );
    }

    renderCountriesOptions() {
      return (
        <Fragment>
          <option value="default">------</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="AntiguaBarbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="TheBahamas">The Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bhutan">Bhutan</option>
          <option values="Bolivia">Bolivia</option>
          <option value="BosniaAndHerzegovina">Bosnia and Herzegovina</option>
          <option values="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option values="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option values="BurkinaFaso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option values="CaboVerde">Cabo Verde</option>
          <option value="Cambodia">Cambodia</option>
          <option values="Cameroon">Cameroon</option>
          <option values="Canada">Canada</option>
          <option value="CentralAfricanRepublic">Central African Republic</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="CongoDemocraticRepublicOfThe">Congo, Democratic Republic of the</option>
          <option value="CongoRepublicOfThe">Congo, Republic of the</option>
          <option value="CostaRica">Costa Rica</option>
          <option value="CôteDIvoire">Côte d’Ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="CzechRepublic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="DominicanRepublic">Dominican Republic</option>
          <option value="EastTimor">East Timor</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="ElSalvador">El Salvador</option>
          <option value="EquatorialGuinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Gabon">Gabon</option>
          <option value="TheGambia">The Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Grenada">Grenada</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guinea">Guinea</option>
          <option value="GuineaBissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="NorthKorea">North Korea</option>
          <option value="SouthKorea">South Korea</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macedonia">Macedonia</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="MarshallIslands">Marshall Islands</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="MicronesiaFederatedStatesof">Federated States of Micronesia</option>
          <option value="Moldova">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="NewZealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Panama">Panama</option>
          <option value="PapuaNewGuinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russia">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="SaintKittsNevis">Saint Kitts and Nevis</option>
          <option value="SaintLucia">Saint Lucia</option>
          <option value="SaintVincentAndTheGrenadines">Saint Vincent and the Grenadines</option>
          <option value="Samoa">Samoa</option>
          <option value="SanMarino">San Marino</option>
          <option value="SaoTomeAndPrincipe">Sao Tome and Principe</option>
          <option value="SaudiArabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="SierraLeone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="SolomonIslands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="SouthAfrica">South Africa</option>
          <option value="Spain">Spain</option>
          <option value="SriLanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="SudanSouth">South Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syria">Syria</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Togo">Togo</option>
          <option value="Tonga">Tonga</option>
          <option value="TrinidadAndTobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="UnitedArabEmirates">United Arab Emirates</option>
          <option value="UnitedKingdom">United Kingdom</option>
          <option value="UnitedStates">United States</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="VaticanCity">Vatican City</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
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
                    {this.renderCountriesOptions()}
                  </select>
                </label>
                <label>
                  Job Title:
                  <input type="text" name="jobTitle" defaultValue={""} onChange={(e) => this.onInputChange(e.target.value, "jobTitle")}/>
                </label>
                <label>
                  Industry:
                  <select defaultValue="----" onChange={(e) => this.onInputChange(e.target.value, "jobIndustry")}>
                    {this.renderIndustryOptions()}
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