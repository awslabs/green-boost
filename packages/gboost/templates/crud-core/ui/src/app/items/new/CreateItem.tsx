// @ts-nocheck
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { itemSchema, type ItemInputSchema } from "@{{GB_APP_ID}}/core/shared";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RhfTextField } from "@/components/rhf-inputs/RhfTextField";
import { createItemAction } from "./create-item.action";

export function CreateItem() {
  const { control, handleSubmit } = useForm<ItemInputSchema>({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: zodResolver(itemSchema),
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleClick = handleSubmit(async (d) => {
    startTransition(async () => {
      await createItemAction(d);
      router.replace("/items");
    });
  });
  return (
    <Box display="flex" justifyContent="center">
      <Box
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
