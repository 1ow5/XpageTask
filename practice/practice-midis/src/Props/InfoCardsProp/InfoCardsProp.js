import '../InfoCardsProp/InfoCardsProp.scss'
import Link from '../../assets/img/Strelka.svg'

export const InfoCardProp = (props) => {
	const { img = '', redtxt = '', graytxt = '', justxt = '' } = props;
	return (
		<div className='InfoCardsProp__Wrapper'>
			<div className='InfoCardsProp__Container'>
				<div className='InfoCardsProp__Img'>
					<img src={img}></img>
				</div>
				<div className='InfoCardsProp__Text'>
					<div className='Text__little'>
						<p className='Text__little--red'>{redtxt}</p>
						<p className='Text__little--fray'>{graytxt}</p>
					</div>
					<div className='Text__main'>
						<p className='Text__main--h3'>{justxt}</p>
					</div>
				</div>
				<button className='InfoCardsProp__Button'>
					<img src={Link}></img>
				</button>
			</div>
		</div>
	)
}
export default InfoCardProp;