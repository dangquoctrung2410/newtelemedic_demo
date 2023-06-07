import {
    AudioOutlined,
    CameraOutlined,
    DesktopOutlined,
    LayoutOutlined,
    PhoneOutlined,
    PictureOutlined,
    PlayCircleOutlined,
    ShareAltOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import style from "./Content.module.scss";
import { Button, Col, Row, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { setModal } from "../../components/redux/reducer/modalslice";
import ContentModal from "../../components/modal/ContentModal";

type Props = {};

const ContentFooter = ({}: Props) => {
    const dispath = useDispatch();

    return (
        <div className={style.contentFooter}>
            <Row className={style.row}>
                <Col className={style.col} span={6}>
                    <Tooltip title="Chọn Bố Cục">
                        <Button
                            onClick={() =>
                                dispath(
                                    setModal({
                                        open: true,
                                        content: <ContentModal />,
                                        width: 600,
                                    })
                                )
                            }
                            icon={<LayoutOutlined />}
                        />
                    </Tooltip>
                </Col>
                <Col className={style.col} span={12}>
                    <Tooltip title="Bật/Tắt Micro">
                        <Button type="primary" icon={<AudioOutlined />} />
                    </Tooltip>
                    <Tooltip title="Bật/Tắt Micro">
                        <Button type="primary" icon={<CameraOutlined />} />
                    </Tooltip>
                    <Tooltip title="Chia sẻ màn hình">
                        <Button icon={<DesktopOutlined />} />
                    </Tooltip>
                    <Tooltip title="Ghi Lại Cuộc Họp">
                        <Button icon={<PlayCircleOutlined />} />
                    </Tooltip>
                    <Tooltip title="Kết Thúc Cuộc Họp">
                        <Button
                            icon={<PhoneOutlined />}
                            type="primary"
                            danger={true}
                            shape="round"
                            size="large"
                        />
                    </Tooltip>
                </Col>
                <Col className={style.col} span={6}>
                    <Tooltip title="Xem ảnh">
                        <Button icon={<PictureOutlined />} />
                    </Tooltip>
                    <Tooltip title="Danh sách người tham gia">
                        <Button icon={<UsergroupAddOutlined />} />
                    </Tooltip>
                    <Tooltip title="Chia sẻ">
                        <Button icon={<ShareAltOutlined />} />
                    </Tooltip>
                </Col>
            </Row>
        </div>
    );
};

export default ContentFooter;
