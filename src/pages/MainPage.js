import Responsive from "../components/common/Responsive";
import ContentsContainer from "../components/containers/ContentsContainer";
import TitleBox from "../components/contentboxs/TitleBox";
import ProfileContainer from "../components/containers/ProfileContainer";
import Footer from "../components/common/Footer";
import LandingTextBox from "../components/textboxs/LandingTextBox";

const MainPage = () => {
    return (
        <>
            <LandingTextBox />
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