import PropTypes from "prop-types";

import fileIcon from "../assets/file.png";

import styles from './File.module.css'

const File = ({ name }) => {
  return (
    <div className={styles['file']}>
      <img src={fileIcon} alt="file" />
      <span>{name}</span>
    </div>
  );
};

File.propTypes = {
  name: PropTypes.string.isRequired
};

export default File;