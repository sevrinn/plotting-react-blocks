import styles from './PlottingBlocks.module.css';

const Header  = (props) => {

  return (
    <div className={styles.header}>
      {props.children}
        <header>
          {props.header}
        </header>
    </div>
  );
}

export default Header;