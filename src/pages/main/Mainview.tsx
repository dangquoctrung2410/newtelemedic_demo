import { Layout } from "antd";
import style from "./Mainview.module.scss";
import { Content, Header } from "antd/es/layout/layout";
import ModalBasic from "../../components/modal/Modal";

type Props = {};
const { Sider } = Layout;

const Mainview = (_props: Props) => {
    return (
        <Layout className={style.mainView}>
            <Sider className={style.siderLeft}>
                <div className={style.contentSiderLeft}>left</div>
            </Sider>
            <Content className={style.content}>
                <Layout className={style.viewContent}>
                    <Header className={style.headerContent}>
                        <div className={style.viewHeaderContent}>header</div>
                    </Header>
                    <Content className={style.viewMain}>
                        <div className={style.viewMainContent}>content</div>
                    </Content>
                </Layout>
            </Content>
            <Sider className={style.siderRight}>
                <div className={style.contentSiderRight}>Right</div>
            </Sider>
        </Layout>
    );
};

export default Mainview;
