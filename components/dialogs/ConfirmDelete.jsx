import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField as MuiTextField,
  DialogActions,
  Button,
  IconButton,
  Box,
  Grow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  accountPaper: {
    padding: 20,
  },
  buttonGroup: {
    display: 'flex',
  },
  button: {
    marginTop: 20,
    marginRight: 8,
    width: 120,
  },
  margin: {
    margin: '60px 0',
  },
  deleteButton: {
    color: 'white',
    backgroundColor: theme.palette.danger.main,
    '&:hover': {
      backgroundColor: theme.palette.danger.main,
    },
  },
  dialogActions: {
    padding: 20,
  },
}));

const ConfirmDelete = ({ onConfirmCB, children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  function openDialog() {
    setDialogOpen(true);
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }
  return (
    <>
      <div
        onClick={e => {
          e.stopPropagation();
          openDialog();
        }}
        style={{ display: 'inline-block' }}
      >
        {children}
      </div>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        TransitionComponent={Grow}
      >
        <DialogTitle>Verification</DialogTitle>

        <DialogContent>
          <MuiTextField label="OTP" fullWidth />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            variant="contained"
            className={classes.deleteButton}
            startIcon={<DeleteIcon />}
            onClick={() => {
              onConfirmCB();
              handleDialogClose();
            }}
          >
            Confirm
          </Button>

          <Button
            color="primary"
            variant="outlined"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ConfirmDelete;
