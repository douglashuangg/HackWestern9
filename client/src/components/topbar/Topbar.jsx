import "./Topbar.css";
import { Search, Person } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft"></div>
      <span className="logo">TopG</span>
      <div className="topbarCenter"></div>
      <div className="searchbar"></div>
      <Search />
      <input
        placeholder="Search for friends, goals, or photos"
        className="searchInput"
      />

      <div className="topbarRight"></div>
      <div className="topbarlinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
    </div>
  );
}
