import './Footer.scss'
import YouTube from "../assets/img/YouTubeLogo.svg"
import Facebook from "../assets/img/FacebookLogo.svg"
import Vk from "../assets/img/VkLogo.svg"
import Odnoclassniki from "../assets/img/OdnoclassnikiLogo.svg"
import Inst from "../assets/img/IntagramLogo.svg"
import Xpage from "../assets/img/XpageLogo.svg"

function Footer() {
	return (
		<div className='Footer__Wrapper'>
			<div className='Footer__Container'>
				<div className='Footer__UpperContent'>
					<div className='Footer__UpperContent--text'>
						<p className='UpperContent__text'>Подписывайтесь на нас:</p>
					</div>
					<div className='Footer__UpperContent--icons'>
						<div className='UpperContent__icons--youtube UpperContent__icon'>
							<img src={YouTube}></img>
						</div>
						<div className='UpperContent__icons--facebook UpperContent__icon'>
							<img src={Facebook}></img>
						</div>
						<div className='UpperContent__icons--vk UpperContent__icon'>
							<img src={Vk}></img>
						</div>
						<div className='UpperContent__icons--sameclass UpperContent__icon'>
							<img src={Odnoclassniki}></img>
						</div>
						<div className='UpperContent__icons--instagramm UpperContent__icon'>
							<img src={Inst}></img>
						</div>
					</div>
				</div>
				<div className='Footer__Border'></div>
				<div className='Footer__BottomContent'>
					<div className='Footer__BottomContent--text'>
						<p className='BottomContent__text'>
							&copy; «Златоустовское телевидение» Политика конфиденциальности
						</p>
					</div>
					<div className='Footer-BottomContent--icon'>
						<img src={Xpage}></img>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
