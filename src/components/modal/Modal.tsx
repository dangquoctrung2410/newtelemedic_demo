import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { defaultModal } from "../redux/controller/modalslice.modal";
import { setModal } from "../redux/reducer/modalslice";
import style from "./Modal.module.scss";
import { CloseOutlined } from "@ant-design/icons";

type Props = {
    open?: boolean;
    content?: any;
};

const ModalBasic = (props: Props) => {
    const openModal = useSelector((state: any) => state.modal);
    const dispath = useDispatch();

    return openModal.open ? (
        <div className={style.modal}>
            <div className={style.modalTop}>
                <span onClick={() => dispath(setModal(defaultModal))}>
                    <CloseOutlined />
                </span>
            </div>
            {openModal.content}
        </div>
    ) : null;
};

export default ModalBasic;
