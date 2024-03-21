import '../FrameOne/FrameOne.scss'
import Sniper from "../../assets/img/Sniper.svg"
import Slider from "../../assets/img/Slider.svg"

function FrameOne() {
	return (
		<div className='FrameOne__Wrapper'>
			<div className='FrameOne__Container'>
				<div className='FrameOne__Img'>
					<img src={Sniper}></img>
				</div>
				<div className='FrameOne__Text'>
					<div className='FrameOne__Text--h1'>
						<p className='Text__h1--small'>Общество</p>
						<p className='Text__h1--big'>
							Гонка сильнейших. На стадионе имени Светланы Ишмуратовой стартовал
							Чемпионат мира по биатлону
						</p>
					</div>
					<div className='Button__functional'>
						<button className='Button__Read'>Читать</button>
						<div className='Button__Slider'>
							<div className='Slider__Img'>
								<img src={Slider}></img>
							</div>
							<div className='Slider__Text'>
								<p className='Text__small'>Нацпроект</p>
								<p className='Text__medium'>Безопасные и качественные автомобильные дороги</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FrameOne
