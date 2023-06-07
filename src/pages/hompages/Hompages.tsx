import type { RootState } from "../../components/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import style from "./Homepages.module.scss";
import Mainview from "../main/Mainview";
import ContentFooter from "../Footer/ContentFooter";
import ModalBasic from "../../components/modal/Modal";

const { Content, Footer } = Layout;

const Hompages = () => {
    return (
        <Layout className={style.homePage}>
            <ModalBasic />
            <Content className={style.content}>
                <Mainview />
            </Content>
            <Footer className={style.footer}>
                <ContentFooter />
            </Footer>
        </Layout>
    );
};

export default Hompages;
