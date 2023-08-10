// @ts-nocheck
import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useMemo, type ReactElement, type ReactNode } from "react";
import NextLink from "next/link";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

interface DrawerListItemProps {
  icon: ReactNode;
  open: boolean;
  text: string;
  href: string;
  indent?: boolean;
}

export function DrawerListItem(props: DrawerListItemProps): ReactElement {
  const { icon, href, indent, open, text } = props;
  const theme = useTheme();
  const pathname = usePathname();
  const isSelected = useMemo(() => {
    return href.includes(pathname);
  }, [href, pathname]);
  if (open) {
    return (
      <Link
        component={NextLink}
        color={theme.palette.primary.main}
        key={text}
        href={href}
      >
        <ListItemButton
          selected={isSelected}
          sx={{ pl: (t) => (indent ? t.spacing(3) : undefined) }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText
            primary={text}
            primaryTypographyProps={{ whiteSpace: "nowrap" }}
          />
        </ListItemButton>
      </Link>
    );
  } else {
    return (
      <Tooltip title={text} placement="right">
        <Link
          component={NextLink}
          color={theme.palette.primary.main}
          key={text}
          href={href}
        >
          <ListItemButton
            selected={isSelected}
            sx={{ pl: (t) => (indent ? t.spacing(3) : undefined) }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
          </ListItemButton>
        </Link>
      </Tooltip>
    );
  }
}
