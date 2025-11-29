import { NavLink } from "react-router";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepPurple } from "@mui/material/colors";

const TopBar = () => {
  return (
    <>
      <div className="flex justify-between items-center pl-10 py-10 borderBottom border-l border-l-gray-200">
        <img src="logo.png" alt="" className="w-[5%]" />

        <div className="text-sm textPrimary">
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-2 hover:text-red-400"
              );
            }}
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-2 hover:text-red-400"
              );
            }}
            to="/orders"
          >
            Orders
          </NavLink>
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-2 hover:text-red-400"
              );
            }}
            to="/holdings"
          >
            Holdings
          </NavLink>
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-2 hover:text-red-400"
              );
            }}
            to="/positions"
          >
            Positions
          </NavLink>
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-2 hover:text-red-400"
              );
            }}
            to="/funds"
          >
            Funds
          </NavLink>
          <NavLink
            className={(data) => {
              return (
                (data.isActive ? "text-red-300 " : "") +
                "pr-4 hover:text-red-400"
              );
            }}
            to="/apps"
          >
            Apps
          </NavLink>

          <div className="inline-block border-l border-l-gray-200 pl-5 hover:cursor-pointer">
            <Stack className="flex items-center" direction="row" spacing={2}>
              <Avatar
                sx={{ bgcolor: deepPurple[500], width: 24, height: 24 }}
              ></Avatar>
              <span>USERID</span>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
