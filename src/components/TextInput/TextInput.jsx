import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({ id, label, variant }) {

  return (
        <div dir="rtl">
          <TextField id={id} label={label} variant={variant} />
        </div>
  );
}
