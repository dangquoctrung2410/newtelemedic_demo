import Grids from "../grid/Grids";
import style from "./ContentModal.module.scss";

type Props = {};

const ContentModal = (_props: Props) => {
    return (
        <div className={style.contentModal}>
            <div className={style.contentTop}>
                <div></div>
                <div>
                    <Grids />
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default ContentModal;
