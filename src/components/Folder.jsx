import PropTypes from "prop-types";

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

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Folder;