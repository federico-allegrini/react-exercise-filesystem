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

export default File;