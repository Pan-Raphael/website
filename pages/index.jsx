// Imports
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import {FaLinkedin,FaGithub,FaFacebook} from 'react-icons/fa'
import {TfiCheckBox} from 'react-icons/tfi'
import {
  SiUpwork,SiPostgresql,SiSqlite,SiMongodb,
  SiGraphql,SiPython,SiR,SiPowerbi,SiTableau,SiD3Dotjs
} from 'react-icons/si'

// Settings
const URL_LINKEDIN = 'https://www.linkedin.com/in/panagiotis-xanthopoulos-997a791a6/'
const URL_GITHUB   = 'https://github.com/Pan-Raphael'
const URL_FACEBOOK = 'https://www.facebook.com/profile.php?id=100076803608586'
const URL_UPWORK   = 'https://www.upwork.com/freelancers/~01b92f1426e6b5c364'
const IMG_ABOUT_STYLE = {
  'borderRadius': 10,
  'borderColor': 'black',
  'borderWidth': 2,
  'borderStyle': 'solid'
}

// Maincode
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Electronic Portfolio</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <main className={styles.main}>
        {/* Landing Section */}
        <section className={styles.home_sect+' '+styles.home} id='home'>
          <div className={styles.intro}>
            <h1 className={styles.title}>
              Welcome to <br/>
              <a href='#'>Raphael's Portfolio</a>
            </h1>
            <p className={styles.introduction}>I'm a data analyst specializing in data visualization and I have an interest in working with machine learning models.</p>

            <ul className={styles.social}>
              <li><a target='_blank' rel='noreferrer' href={URL_LINKEDIN}><FaLinkedin className={styles.icon}/></a></li>
              <li><a target='_blank' rel='noreferrer' href={URL_GITHUB}  ><FaGithub   className={styles.icon}/></a></li>
              <li><a target='_blank' rel='noreferrer' href={URL_FACEBOOK}><FaFacebook className={styles.icon}/></a></li>
              <li><a target='_blank' rel='noreferrer' href={URL_UPWORK}  ><SiUpwork   className={styles.icon}/></a></li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.home_sect+' '+styles.about} id='about'>
          <header className={styles.about_header}>
            <h1 className={styles.sect_head}>About</h1>
            <article className={styles.about_desc}>
              <p className={styles.about_par}>
                I am not an ordinary data analyst.
              </p>
              <p className={styles.about_par}>
                My original field of expertise was biology, and I still study genetics in university on a post-graduate level. So how and why did a biologist decide to practice data analysis?
                It's because I have no choice but to recognize data is an intrinsic part of biology research and experimentation. I saw that the ability to organize and analyze data was vital,
                and I decided to acquire a skill that would set me apart from other researchers - the skill to deeply understand the trends in my own data.
              </p>
              <p className={styles.about_par}>
                But in the process, I saw in my study of data analysis a rekindling of a passion for mathematics I had when I was younger, and I decided to practice it professionally, not only
                to distinguish myself in my work. I studied statistics more closely and even learnt how to process data in python and make visualizations. Every new facet of the subject made me
                interested in it for its own sake rather than the utility it had represented in the beginning.
              </p>
              <p className={styles.about_par}>
                <Link href='/resume' target='blank'>Here</Link>, you can view a digital form of CV.
              </p>
            </article>
          </header>
          
          <div className={styles.img_container}>
            <Image src='/poster-about.png' layout='fill' objectFit='fill' style={IMG_ABOUT_STYLE}></Image>
          </div>
        </section>
        
        {/* Skill Section */}
        <section className={styles.home_sect + ' ' + styles.skills} id='skills'>
          <h1 className={styles.sect_head}>Skills</h1>
          
          <div className={styles.skills_group}>
            <h1 className={styles.group_head}>Database Administration</h1>
            <div className={styles.skills_grid}>
              <div className={styles.grid_item}><SiPostgresql className={styles.icon}/> PostgreSQL</div>
              <div className={styles.grid_item}><SiSqlite     className={styles.icon}/> SQLite</div>
              <div className={styles.grid_item}><SiMongodb    className={styles.icon}/> MongoDB</div>
              <div className={styles.grid_item}><SiGraphql    className={styles.icon}/> GraphQL</div>
            </div>
          </div>

          <div className={styles.skills_group}>
            <h1 className={styles.group_head}>Data Analysis</h1>
            <div className={styles.skills_grid}>
              <div className={styles.grid_item}><SiPython className={styles.icon}/> Python</div>
              <div className={styles.grid_item}><SiR      className={styles.icon}/> R</div>
            </div>
          </div>

          <div className={styles.skills_group}>
            <h1 className={styles.group_head}>Data Visualization</h1>
            <div className={styles.skills_grid}>
              <div className={styles.grid_item}><SiPowerbi className={styles.icon}/> PowerBI</div>
              <div className={styles.grid_item}><SiTableau className={styles.icon}/> Tableau</div>
              <div className={styles.grid_item}><SiD3Dotjs className={styles.icon}/> D3.js</div>
            </div>
          </div>
        </section>
        
        {/* Project Section */}
        <section className={styles.home_sect + ' ' + styles.projects} id='projects'>
          <h1 className={styles.sect_head}>Projects</h1>
          
          <div className={styles.projects_grid}>
            <div className={styles.grid_item}>
              <div className={styles.project_caption}>BellaBeat Case Study</div>
              
              <div className={styles.grid_modal}>
                <button className={styles.info_btn}><a target='_blank' rel='noreferrer' href='/project1.html'>Project Page</a></button>
              </div>
            </div>

            {/* Template */}
            {/* <div className={styles.grid_item}>
              <div className={styles.project_caption}>[Project Name]</div>

              <div className={styles.grid_modal}>
                <button className={styles.info_btn}>Project Page</button>
              </div>
            </div> */}

          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.home_sect + ' ' + styles.contacts} id='contact'>
          <h1 className={styles.sect_head}>Contact</h1>
          
          <div className={styles.contact_container}>
            <div className={styles.contact_panel}>
              <div className={styles.poster}>
                <Image src='/poster-contact.png' layout='fill' objectFit='fill' style={IMG_ABOUT_STYLE}></Image>
              </div>

              <h5 className={styles.contact_header}>
                <TfiCheckBox className={styles.status_icon}/>
                Currently Available for Full-Time Positions
              </h5>

              <div className={styles.contact_media}>
                <span className={styles.contact_header}>Here's where you can talk to me</span>
                <ul className={styles.social + ' ' + styles.contact_icons}>
                  <li><a target='_blank' rel='noreferrer' href={URL_LINKEDIN}><FaLinkedin className={styles.icon}/></a></li>
                  <li><a target='_blank' rel='noreferrer' href={URL_GITHUB}  ><FaGithub   className={styles.icon}/></a></li>
                  <li><a target='_blank' rel='noreferrer' href={URL_FACEBOOK}><FaFacebook className={styles.icon}/></a></li>
                  <li><a target='_blank' rel='noreferrer' href={URL_UPWORK}  ><SiUpwork   className={styles.icon}/></a></li>
                </ul>
              </div>
            </div>

            <div className={styles.contact_panel}>
              <form className={styles.contact_form}>
                <div className={styles.contact_flex}>
                  <div className={styles.form_el}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'/>
                  </div>
                  
                  <div className={styles.form_el}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id='phone'/>
                  </div>
                </div>
                
                <div className={styles.form_el}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email'/>
                </div>
                
                <div className={styles.form_el}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id='subject'/>
                </div>
                
                <div className={styles.form_el}>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" cols="30" rows="8"/>
                </div>

                <button className={styles.contact_btn}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}