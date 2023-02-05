import { useState } from "react";

import closedFolderIcon from "../assets/closed-folder.png";
import openedFolderIcon from "../assets/opened-folder.png";
import fileIcon from "../assets/file.png";

import styles from './DirectoryStructure.module.css'

const DirectoryStructure = ({ name, files }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles['directory-structure']}>
      {files ? (
        <div onClick={handleClick} className={styles['folder']}>
          <img src={open ? openedFolderIcon : closedFolderIcon} alt="folder" />
          <span>{name}</span>
        </div>
      ) : (
        <div className={styles['file']}>
          <img src={fileIcon} alt="file" />
          <span>{name}</span>
        </div>
      )}
      {open &&
        files.map(({ name, files }, index) => (
          <DirectoryStructure key={index} name={name} files={files} />
        ))}
    </div>
  );
};

export default DirectoryStructure;