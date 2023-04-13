import styles from './ModaleScreen.module.scss'


const ButtonOpen = ({open, setOpen}) =>{
    return (
        <button 
            className={styles.open_modal_btn}
            onClick={() => setOpen(true)}
        >&#128561; Open</button>
    )
}

export default ButtonOpen