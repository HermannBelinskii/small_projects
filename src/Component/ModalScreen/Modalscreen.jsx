
import { useState } from "react"
import styles from './ModaleScreen.module.scss'

const Modalscreen = () =>{
    const [open, setOpen] = useState(false)

    return (
        <>
        <button 
        className={styles.open_modal_btn}
        onClick={() => setOpen(true)}
      >&#128561; Open</button>
      {
        open && (
          <div className={styles.overlay}>
          <div className={styles.modal}>
            <svg 
              height="200" viewBox="0 0 200 200" width="200"
              onClick={() => setOpen(false)}
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media.tenor.com/2NvV4xEaCp4AAAAM/happy-cat-cat-happy.gif" />
          </div>
        </div>
        )
      }
        </>
    )
}

export default Modalscreen