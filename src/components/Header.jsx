import helpIcon from "../assets/icons/Help.svg";
import Search from "../assets/icons/Search.svg";
import Announcement from "../assets/icons/Announcement.svg";
import dropDown from "../assets/icons/Drop-Down.svg";
const Header = () => {
  return (
    <>
      <div className="title-div">
        <span className="title">Payments</span>
        <div className="how-it-works" title="Read full documentation here">
          <span>
            <img src={helpIcon} alt="help Icon" />
          </span>
          <span className="text">How it works</span>
        </div>
      </div>
      <div className="search-div">
        <img src={Search} alt="Search" />
        <input type="text" placeholder="Search features, tutorials, etc." />
      </div>
      <div className="actionable-buttons">
        <div>
          <img src={Announcement} alt="Announcement" />
          <img src={dropDown} alt="Drop-Down" />
        </div>
      </div>
    </>
  );
};

export default Header;
