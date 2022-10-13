import Footer from "components/common/Footer";
import Responsive from "components/common/Responsive";
import Introline from "components/common/Introline";
import detail from "../static/data/detailData.json"
import ScrollToTop from "components/common/ScrollToTop";
import DetailPanel from "components/contentPanel/DetailPanel";

const OffchatPage = () => {
    return (
        <>
            <ScrollToTop />
            <Introline />
            <Responsive>
                <DetailPanel data={detail[3]} />
            </Responsive>
            <Footer />
        </>
    )
}

export default OffchatPage;