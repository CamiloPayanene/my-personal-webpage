import { card } from '../assets';
import styles, {layout} from '../style';
import  Button from './Button';


export const CardDeal = () => (
  <section id="education" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>I am a person who is passionate <br className='sm:block hidden'/>about technology</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I have taken several courses on Coursera, Platzi, Udemy and I have a professional career, additionally I took a programming bootcamp at Oracle One Next education</p>
        <Button styles='mt-10'/>
    </div>

      <div className={layout.sectionImg}>  
          <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
  </section>
)

export default CardDeal