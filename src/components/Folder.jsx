import closedFolderIcon from "../assets/closed-folder.png";
import openedFolderIcon from "../assets/opened-folder.png";

import styles from './Folder.module.css'

const Folder = ({ name, open, onClick }) => {
  return (
    <div onClick={onClick} className={styles['folder']}>
      <img src={open ? openedFolderIcon : closedFolderIcon} alt="folder" />
      <span>{name}</span>
    </div>
  );
};

export default Folder;