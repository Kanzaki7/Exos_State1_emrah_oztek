import './Card.css';
import points from '../../Assets/images/icon-ellipsis.svg';

export default function Card(props) {
    return(
        <div className={props.card}>
            {/* <img src={props.img} alt="" /> */}
                <div className='contentCard'>
                    <div className='contentDiv1'>
                        <p className='title'>{props.title}</p>
                        <img src={points} alt="" className='imgPoints'/>
                    </div>
                    <div className='contentDiv2'>
                        <p className='pDigit'>{props.current}hrs</p>
                        <div className='previous'>
                            <p>{props.time}</p>
                            <p>-</p>
                            <p>{props.previous}hrs</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}