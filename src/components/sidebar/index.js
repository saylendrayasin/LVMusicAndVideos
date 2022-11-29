import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaInfo, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() =>{
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
        <img src={image}
        className="profile-img"
        alt="profile"
        />
        <div>
            {/* <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} /> */}
            {/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
            <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
            {/* <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} /> */}
            <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
            <SidebarButton title="About Us" to="/about" icon={<FaInfo />} />
        </div>
        <SidebarButton title="Exit" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
