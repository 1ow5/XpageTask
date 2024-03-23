import './Header.scss';
import HeaderLogo from "../assets/img/HeaderLogo.svg";
import LoopaLogo from "../assets/img/LoopaLogo.svg"
import { Link } from 'react-router-dom'; //НЕ ЗАБЫТЬ ПРИМЕНИТЬ ЗАМЕНИВ <li>
import UTubeLogo from "../assets/img/YouTubeLogo.svg"
import VkLogo from "../assets/img/VkLogo.svg"
import OdnoclassnikiLogo from "../assets/img/OdnoclassnikiLogo.svg"
import IntagramLogo from "../assets/img/IntagramLogo.svg"
import FacebookLogo from "../assets/img/FacebookLogo.svg"

function Header(){
    return (
		<div className='Header__Wrapper'>
			<div className='Header__Container'>
				<div className='Header__UpperContent'>
					<div className='Header__UpperContent--button'>
						<input className='UpperContent__button' type='button' value={"Предложить новость"}></input>
					</div>
					<div className='Header__UpperContent--img'>
						<img src={HeaderLogo}></img>
					</div>
					<div className='Header__UpperContent--contacts'>
						<p className='UpperContent__contacts--number'>8(3513)65-17-11</p>
						<img className='UpperContent__contacts--logo' src={LoopaLogo}></img>
					</div>
				</div>
				<div className='Header__LowerContent'>
					<div className='LowerContent__Links'>
						<li><a className='Links__News'>Новости</a></li>
						<li><a className='Links__TVProjects'>Телепроеткы</a></li>
						<li><a className='Links__Adds'>Реклама</a></li>
						<li><a className='Links__Online'>Онлайн</a></li>
						<li><a className='Links__Program'>Программа Передач</a></li>
						<li><a className='Links__More'>Ещё</a></li>
						{/* className-ы линкам убрать, вставил для проверки стилей и чего-то ещё*/}
					</div>
					<div className='LowerContent__Media'>
						<div className='LowerContent__Media--text'>
							<p>Подписывайтесь на нас</p>
						</div>
						<div className='LowerContent__Media--logos'>
							<img src={UTubeLogo}></img>
							<img src={FacebookLogo}></img>
							<img src={VkLogo}></img>
							<img src={OdnoclassnikiLogo}></img>
							<img src={IntagramLogo}></img>
							
						</div>
					</div>
				</div>
            </div>
		</div>
	)
}
export default Header;