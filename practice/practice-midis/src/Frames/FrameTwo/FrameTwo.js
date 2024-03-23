import "./FrameTwo.scss"
import InfoCardProp from '../../Props/InfoCardsProp/InfoCardsProp'
import News12 from "../../assets/img/News1-2.svg"
import NewsCar from "../../assets/img/News-Car.svg"
import NewsPeople from "../../assets/img/News-People.svg"
import NewsRoad from "../../assets/img/News-Road.svg"
import Img from "../../assets/img/Img.svg"

export const FrameTwo = ()=>{
    return (
			<div className='FrameTwo__Wrapper'>
				<div className='FrameTwo__Container'>
					<div className='FramerTwo__News'>
						<p className='FramerTwo__News--text'>Свежие новости</p>
						<button className='FramerTwo__News--btn'>Все новости</button>
					</div>
					<div className='FramerTwo__NewsLinks'>
						<InfoCardProp img={News12} redtxt='Комуналка' graytxt='02/01/2021' justxt='Домой по светлой улице. В Златоусту завершили монтаж сразу двух новых линий наружного освещения' />
                        <InfoCardProp img={NewsCar} redtxt='Медицина' graytxt='02/01/2021' justxt='Ключи от медеционской помощи. «Городская больница» Златоуста получила новые спецавтомобили' />
                        <InfoCardProp img={News12} redtxt='Комуналка' graytxt='02/01/2021' justxt='Домой по светлой улице. В Златоусту завершили монтаж сразу двух новых линий наружного освещения' />
                        <InfoCardProp img={NewsRoad} redtxt='Комуналка' graytxt='02/01/2021' justxt='На перегоне между районом мешзавода и проспект Гагарина ограничили максимальную скорость до 40 километров в час' />
                        <InfoCardProp img={NewsPeople} redtxt='Медицина' graytxt='02/01/2021' justxt='Теплоснабжение без перебоев. Такую задачу перед всеми ответственными службами поставил глава округа Максим Пекарский' />
                        <InfoCardProp img={NewsRoad} redtxt='Комуналка' graytxt='02/01/2021' justxt='На перегоне между районом мешзавода и проспект Гагарина ограничили максимальную скорость до 40 километров в час' />
                    </div>
                    <div className="FrameTwo__Img">
                        <div className="FrameTwo__Img--container">
                            <img className="FrameTwo__Img--img" src={Img}></img>
                        </div>
                        <div className="FrameTwo__Img--border"></div>
                    </div>
				</div>
			</div>
		)
}
export default FrameTwo;