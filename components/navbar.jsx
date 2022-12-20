// Imports
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import {Link} from 'react-scroll'
import {default as Back} from 'next/link'
import {useRouter} from 'next/router'

// Maincode
export default function Navbar() {
  const router = useRouter()

  return <div className={styles.navbar}>
    <Image src='/analysis.png' width={60} height={60}></Image>
    <nav className={styles["navbar-list"]}>
        {/* Offset scroll backwards by the height of the Navbar (80px) */}
      {router.pathname !== '/'
        ? <Back href='/' target='blank'>Home</Back>
        : <Link to='home' spy={true} smooth={true} offset={-80} duration={500}>Home     </Link>
      }
      
      {router.pathname !== '/'
        ? <Back href='/#about' target='blank'>About</Back>
        : <Link to='about' spy={true} smooth={true} offset={-80} duration={500}>About</Link>
      }
      
      {router.pathname !== '/'
        ? <Back href='/#skills' target='blank'>Skills</Back>
        : <Link to='skills' spy={true} smooth={true} offset={-80} duration={500}>Skills</Link>
      }
      
      {router.pathname !== '/'
        ? <Back href='/#projects' target='blank'>Projects</Back>
        : <Link to='projects' spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
      }
      
      {router.pathname !== '/'
        ? <Back href='/#contact' target='blank'>Contact</Back>
        : <Link to='contact' spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
      }
    </nav>
  </div>
}