import { Page } from "../page.js";
import { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { List, ListItem } from "../List.jsx";
import { Box } from "../Box.jsx";

interface NavListProps {
  pages: Page[];
  open?: boolean;
  onClick?: () => void;
}

export function NavList(props: NavListProps): ReactElement {
  const { pages, open = true, onClick } = props;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <List css={{ px: 0 }}>
      {pages.map((p) => (
        <ListItem
          key={p.path}
          css={{
            bc: location.pathname.startsWith(p.path) ? "$gray5" : "",
            gridTemplateColumns: open ? "1fr 3fr" : "1fr",
          }}
          onClick={() => {
            navigate(p.path);
            if (onClick) onClick();
          }}
        >
          <Box css={{ justifySelf: "center" }}>{p.icon}</Box>
          {open && p.name}
        </ListItem>
      ))}
    </List>
  );
}
