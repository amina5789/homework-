import { NavLink, Outlet } from "react-router-dom";
import "./profile.css";

const profileTabs = [
  {
    link: "settings",
    title: "Настройки",
  },
  {
    link: "info",
    title: "Личная информация",
  },
];

export const Profile = () => {
  return (
    <main>
      <h1>Профиль</h1>
      <nav className="profile_tabs">
        {profileTabs.map((item, index) => {
          return (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `tab ${isActive && "active-tab tab"}`
              }
              replace
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <Outlet />
    </main>
  );
};