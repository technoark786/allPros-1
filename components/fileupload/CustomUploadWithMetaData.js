import { Badge, Button, Grid, TextField } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';
import CustomDialog from '../dialogs/CustomDialog';
import { Table } from '../tables';
import './fileuploadStyles.scss';

const style = {
  label: {
    /* Style as you please, it will become the visible UI component. */
    cursor: 'pointer',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '10px',
  },
  container: {
    backgroundColor: 'rgb(0, 0, 128)',
    padding: '0.3em 0.6em',
    width: 'fit-content',
    color: '#F1F1FF',
    margin: '0.2em 0',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: '500',
    marginRight: '1em',
  },
  uploadPhoto: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
  },
  imageName: { backgroundColor: '#021835', padding: '3px', borderRadius: '5px' },
};

const CustomUploadWithMetaData = ({
  saveUpload,
  fileName,
  setFieldValue,
  fieldValue,
  fileSource,
  title,
}) => {
  const [imageData, setImageData] = useState({
    title: '',
    file: null,
    fileSource,
  });

  console.log(title);

  const [openDialog, setOpenDialog] = useState(false);
  const { openSnackbar } = useSnackbar();

  const handleRowAdd = async item => {
    setFieldValue([...fieldValue, item]);
  };

  const handleRowUpdate = async (newItem, oldItem) => {
    const newItems = [...fieldValue];
    const index = fieldValue.indexOf(oldItem);
    newItems[index] = newItem;
    let t = await setFieldValue(newItems);
    console.log(fieldValue);
    return await newItems;
  };

  const handleRowDelete = async item => {
    try {
      if (item.publicId !== null) {
        await api.delete('loads/file/' + item.publicId);
      }
      const newItems = [...fieldValue];
      const index = newItems.indexOf(item);
      newItems.splice(index, 1);
      setFieldValue(newItems);
      return newItems;
    } catch (error) {
      if (
        error.response !== null ||
        error.response.data !== null ||
        error.response.data.errors.length !== 0
      ) {
        openSnackbar('error', error.response.data.errors[0]);
      } else {
        openSnackbar('error', error.message);
      }
    }
  };

  return (
    <Fragment>
      <Badge badgeContent={fieldValue.length} color="primary">
        <Button onClick={() => setOpenDialog(true)} size="small" variant="outlined">
          +Attachments
        </Button>
      </Badge>
      <CustomDialog open={openDialog} handleClose={() => setOpenDialog(false)} title={title}>
        <Grid
          container
          alignItems="center"
          style={{
            backgroundColor: 'aliceblue',
            border: '2px solid darkblue',
            borderRadius: '5px',
            margin: '2em 0',
            padding: '1em',
          }}
        >
          <Grid item xs={12}>
            <TextField
              placeholder="File Name"
              onChange={e =>
                setImageData({
                  ...imageData,
                  title: e.target.value,
                })
              }
              value={fileName}
              variant="outlined"
              fullWidth
              style={{ marginBottom: '1em' }}
            />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={style.container}>
              <label for="upload-photo" style={style.label}>
                {imageData.file ? 'Change File' : 'Select File'}
              </label>
              <input
                type="file"
                name="photo"
                id="upload-photo"
                style={style.uploadPhoto}
                onChange={async e => {
                  setImageData({
                    ...imageData,
                    file: e.target.files[0],
                  });
                }}
              />
              <div style={imageData.file ? style.imageName : null}>
                {imageData.file ? imageData.file.name : null}
              </div>
            </div>
            <Button
              color="primary"
              onClick={() => saveUpload(imageData)}
              size="small"
              style={{ minWidth: 'auto' }}
            >
              UPLOAD
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table
            options={{
              filtering: false,
              toolbar: false,
              paging: false,
            }}
            editable={{
              onRowUpdate: handleRowUpdate,
              onRowDelete: handleRowDelete,
            }}
            title=""
            data={fieldValue}
            columns={[
              { title: 'Title', field: 'fileTitle' },
              { title: 'Type', field: 'fileType', editable: 'never' },
              { title: 'Size', field: 'size', editable: 'never' },
            ]}
          />
        </Grid>
      </CustomDialog>
    </Fragment>
  );
};

export default CustomUploadWithMetaData;
