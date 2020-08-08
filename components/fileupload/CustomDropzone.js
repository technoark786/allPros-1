import { Box } from '@material-ui/core';
import { default as React, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { fileIcon } from '../load-steps/UploadDocs';

export default function CustomDropzone({ callBack, list }) {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      list.push(file);
      callBack(list);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  //   const handleDelete = async name => {
  //     try {
  //       let exportsAttachments = load.exports.exportsAttachments.filter(atch => atch.name !== name);
  //       setLoad({
  //         ...load,
  //         exportsAttachments,
  //       });
  //     } catch (delError) {
  //       //   openSnackbar('error', delError.message);
  //     }
  //   };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          height: '100px',
          minWidth: '300px',
          backgroundColor: '#f1f1ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dotted #000080',
          borderRadius: '5px',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag 'n' drop SUPPORTING DOCUMENTS TO ATTACH (I.E.- FUMIGATION CERTIICATES, CERTIFICATE
            OF ORIGIN, OR COMMERCIAL INVOICE, SCALE TICKETS)
          </p>
        )}
      </div>
      <Box p={2}>
        {list.map(a => {
          return (
            <div
              style={{
                borderRadius: '5px',
                backgroundColor: 'black',
                padding: '5px 10px',
                letterSpacing: '2px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1em',
                display: 'inline-flex',
                color: 'white',
              }}
            >
              <span
                style={{
                  fontSize: '20px',
                  position: 'relative',
                  marginRight: '0.5em',
                  width: '20px',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleDelete(a.name);
                }}
              >
                &times;
              </span>
              <a
                href={typeof a === 'string' ? a : a.url ? a.url : URL.createObjectURL(a)}
                target="_blank"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  fontSize: '10px',
                  fontWeight: '500',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                {typeof a === 'string' ? 'file' : a.name}
              </a>
              <span
                style={{
                  position: 'relative',
                  color: '#9db7c7',
                  zIndex: '0',
                  borderRadius: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {fileIcon(a.type)}
              </span>
            </div>
          );
        })}
      </Box>
    </div>
  );
}
