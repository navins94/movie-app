import { ListItemButton, ListItemIcon } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { RouteType } from "../../../../routes/config";
import { useLocation, Link } from "react-router-dom";

type Props = {
  item: RouteType;
  onClose: () => void;
};

const SidebarItem = ({ item, onClose }: Props) => {
  const theme = useTheme();
  const location = useLocation();
  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      onClick={onClose}
      to={item.path}
      sx={{
        "&: hover": {
          backgroundColor: theme.palette.secondary.main,
        },
        "&.Mui-selected": {
          borderRight: `3px solid ${theme.palette.info.main}`,
          color: theme.palette.info.main,
          "& .MuiSvgIcon-root": {
            color: theme.palette.info.main,
          },
        },
        "& .MuiSvgIcon-root": {
          color: theme.palette.text.secondary,
        },
        paddingY: "6px",
        paddingX: "40px",
        color: theme.palette.text.secondary,
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
