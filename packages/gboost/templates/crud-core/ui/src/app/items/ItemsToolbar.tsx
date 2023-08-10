// @ts-nocheck
import { Box, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

interface ItemsToolbarProps {
  isPending: boolean;
  handleRefresh: () => void;
}

export function ItemsToolbar(props: ItemsToolbarProps) {
  const { handleRefresh, isPending } = props;
  return (
    <Box display="flex" gap={(t) => t.spacing(2)} justifyContent="flex-end">
      <Button
        disabled={isPending}
        onClick={handleRefresh}
        startIcon={<RefreshIcon />}
      >
        Refresh
      </Button>
      <Button component={Link} href="/items/new" startIcon={<AddIcon />}>
        Create Item
      </Button>
    </Box>
  );
}
