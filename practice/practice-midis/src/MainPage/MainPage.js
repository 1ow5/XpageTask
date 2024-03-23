import "./MainPage.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FrameOne from "../Frames/FrameOne/FrameOne";
import FrameTwo from "../Frames/FrameTwo/FrameTwo"

function MainPage(){
    return (
			<div className='MainPage__Wrapper'>
				<div className='MainPage__Container'>
					<Header />
					<FrameOne />
					<FrameTwo />
					<Footer />
				</div>
			</div>
		)
}
export default MainPage;