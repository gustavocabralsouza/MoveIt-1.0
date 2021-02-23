import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/78655626?s=400&u=d4c1096f1be3e31ed80a1e9766b158beaa6f2120&v=4" alt="Gustavo Cabral" />
            <div>
                <strong>Gustavo Cabral</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}