import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, onClose, onSubmit, formik }) {
  const { values, handleChange, handleBlur } = formik;
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={onSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              required
              margin="dense"
              id="lastName"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
