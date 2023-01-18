import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
      title="Find all the massive events in Bogotá with Capital Wave"
      description="Concerts, festivals, shows and more..."
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
      />
       <SectionWrapper 
        title="Find The Best And Official Prices"
        description="All you need to know for buying your dream tickets."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Capital Wave is built using Expo, which runs natively on all users' devices and can easily get to people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Wave your way into a new dream"
        description="Search and consult all you want to know, who?, when? where? and how much? "
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText} mt-10`}>©2023 Capital Wave {" "} <br />
        <span className="bold">Yeyson Esteban Pulido Parra</span>
        </p>
      </div>
    </>
  )
}

export default App