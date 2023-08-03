// @ts-nocheck
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import {
  updateItemSchema,
  type ItemSchema,
  type UpdateItemInputSchema,
} from "@{{GB_APP_ID}}/core/shared";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { updateItemAction } from "./update-item.action";
import { RhfTextField } from "@/components/rhf-inputs/RhfTextField";

interface ItemProps {
  item: ItemSchema;
}

export function UpdateItem({ item }: ItemProps) {
  const { control, handleSubmit } = useForm<UpdateItemInputSchema>({
    defaultValues: item,
    resolver: zodResolver(updateItemSchema),
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleClick = handleSubmit(async (d) => {
    startTransition(async () => {
      await updateItemAction(d);
      router.replace("/items");
    });
  });
  return (
    <Box display="flex" justifyContent="center">
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
        flexGrow="1"
        maxWidth={(t) => t.breakpoints.values.sm}
      >
        <Typography variant="h6">New Item</Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <RhfTextField control={control} fullWidth label="Name" name="name" />
          <RhfTextField
            control={control}
            fullWidth
            label="Description"
            multiline
            name="description"
          />
        </Box>
        <Box display="flex" gap={2} justifyContent="flex-end">
          <LoadingButton
            color="success"
            loading={isPending}
            onClick={handleClick}
            variant="contained"
          >
            Submit
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}
