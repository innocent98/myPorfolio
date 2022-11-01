import "./settings.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings">
      <Link to="/home" className="link">
        <ArrowBackIosOutlinedIcon className="icon" />
      </Link>
      <span className="tit">Settings</span>
      <div className="form">
        <div className="general">
          <h3>General Settings</h3>
          <form className="row">
            <div className="col-md-5">
              <AccountCircleOutlinedIcon className="icons" />
              <label htmlFor="firstName">First Name</label>
              <input type="text" defaultValue="Victor" />
            </div>
            <div className="col-md-5">
              <AccountCircleOutlinedIcon className="icons" />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" defaultValue="Adebayo" />
            </div>
            <div className="col-md-5">
              <MailOutlineOutlinedIcon className="icons" />
              <label htmlFor="email">Email</label>
              <input type="text" defaultValue="adevictor@mail.com" />
            </div>
            <div className="col-md-5">
              <PhoneAndroidOutlinedIcon className="icons" />
              <label htmlFor="phone">Phone</label>
              <input type="tel" defaultValue="+1(2)34-567-89" />
            </div>
            <div className="col-md-10">
              <HomeOutlinedIcon className="icons" />
              <label htmlFor="address">Address</label>
              <input type="text" defaultValue="Fill in your address" />
            </div>
            <div className="col-md-5">
              <LocationOnOutlinedIcon className="icons" />
              <label htmlFor="city">City</label>
              <input type="text" defaultValue="Oduduwa south" />
            </div>
            <div className="col-md-5">
              <PublicOutlinedIcon className="icons" />
              <label htmlFor="country">Country</label>
              <input type="text" defaultValue="Oduduwa" />
            </div>
          </form>
        </div>

        <div className="security">
          <h3>Security</h3>
          <div className="securityCards">
            <div className="securityCard">Update your Password</div>
            <div className="securityCard">Set/Update security question</div>
            <div className="securityCard">Set two factor authenticator</div>
            {/* <div className="securityCard">Update Password</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
