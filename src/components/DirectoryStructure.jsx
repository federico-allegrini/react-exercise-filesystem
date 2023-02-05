import { useState } from "react";
import PropTypes from "prop-types";

import File from './File';
import Folder from './Folder';

import styles from './DirectoryStructure.module.css'

const DirectoryStructure = ({ name, files }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles['directory-structure']}>
      {files ? (
        <Folder name={name} open={open} onClick={handleClick} />
      ) : (
        <File name={name} />
      )}
      {open &&
        files.map(({ name, files }, index) => (
          <DirectoryStructure key={index} name={name} files={files} />
        ))}
    </div>
  );
};

DirectoryStructure.propTypes = {
  name: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    files: PropTypes.array
  }))
};

export default DirectoryStructure;