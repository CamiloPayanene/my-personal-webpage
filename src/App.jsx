import styles from "./style";
import {
  Navbar,
  Biography,
  Stats,
  Bussiness,
  CardDeal,
  Interests,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <nav className={`${styles.boxWidth}`}>
        <Navbar />
      </nav>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Biography />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <CardDeal />
        <Interests />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
