import Responsive from "../components/common/Responsive";
import ContentsContainer from "../components/containers/ContentsContainer";
import TitleBox from "../components/contentPanel/TitlePanel";
import ProfileContainer from "../components/containers/ProfileContainer";
import Footer from "../components/common/Footer";
import LandingTextBox from "../components/contentPanel/LandingPanel";

const MainPage = () => {
    return (
        <>
            {/* <LandingTextBox /> */}
            <Responsive>
                <TitleBox />
                <ProfileContainer />
                <ContentsContainer />
            </Responsive>
            <Footer />
        </>
        
    )
}

export default MainPage;