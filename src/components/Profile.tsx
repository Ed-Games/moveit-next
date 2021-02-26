import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/2254731?s=460&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4" alt="Diegão" />
            <div>
                <strong>Diego Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 01
                    </p>
            </div>
        </div>
    )
}