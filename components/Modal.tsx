"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  handleClose: (value: boolean) => void;
  children: any;
}

export default function SimpleDialog({
  open,
  handleClose,
  children,
}: SimpleDialogProps) {
  return (
    <>
      <Dialog
        onClose={() => handleClose(false)}
        open={open}
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        {children}
      </Dialog>
    </>
  );
}
