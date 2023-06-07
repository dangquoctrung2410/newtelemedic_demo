import Hompages from "./pages/hompages/Hompages";
import styles from "./App.module.scss";
import ModalBasic from "./components/modal/Modal";

type Props = {};

const App = (_props: Props) => {
    return (
        <div className={styles.app}>
            <Hompages />
        </div>
    );
};

export default App;
