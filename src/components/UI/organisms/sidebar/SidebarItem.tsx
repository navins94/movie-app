import { ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { colorConfigs } from "../../../../configs/colorConfigs";
import { RouteType } from "../../../../routes/config";
import { useLocation } from "react-router-dom";

type Props = {
  item: RouteType;
  onClose: () => void;
};

const SidebarItem = ({ item, onClose }: Props) => {
  const location = useLocation();
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      onClick={onClose}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        "&.Mui-selected": {
          borderRight: `3px solid ${colorConfigs.info}`,
          color: colorConfigs.info,
          "& .MuiSvgIcon-root": {
            color: colorConfigs.info,
          },
        },
        "& .MuiSvgIcon-root": {
          color: colorConfigs.secondaryText,
        },
        paddingY: "6px",
        paddingX: "40px",
        color: colorConfigs.secondaryText,
        fontWeight: 600,
        fontSize: { md: 15, xs: 14 },
      }}
      selected={item.path === location.pathname}
    >
      <ListItemIcon
        sx={{
          minWidth: "auto",
          paddingRight: "15px",
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
