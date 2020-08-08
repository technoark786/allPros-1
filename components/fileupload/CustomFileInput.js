import React from 'react';

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
  },
  uploadPhoto: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
  },
  imageName: { backgroundColor: '#021835', padding: '3px', borderRadius: '5px' },
};

const CustomFileInput = ({ fileName, onChange }) => {
  return (
    <div style={style.container}>
      <label for="upload-photo" style={style.label}>
        {fileName ? 'Change file' : 'Upload files'}
      </label>
      <input
        type="file"
        name="photo"
        id="upload-photo"
        style={style.uploadPhoto}
        onChange={e => onChange(e)}
      />
      <div style={fileName ? style.imageName : null}>{fileName ? fileName : null}</div>
    </div>
  );
};

export default CustomFileInput;
