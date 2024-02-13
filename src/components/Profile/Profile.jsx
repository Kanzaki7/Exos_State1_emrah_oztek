import './Profile.css';
import imageProfile from '../../Assets/images/image-jeremy.png'


export default function Profile(props) {


    return(
        <div className='profile'>
            <div className='listProfile'>
                <div className='profileDiv1'>
                    <div className='imgProfileDiv'>
                        <img src={imageProfile} alt="" className='imgProfile' />
                    </div>
                    <div className='profileText'>
                        <p className='report'>Report for</p>
                        <p className='nom'>Jeremy Robson</p>
                    </div>
                </div>
                <div className='timeDiv'>
                    <p onClick={props.function} className={props.active1}>Daily</p>
                    <p onClick={props.function} className={props.active2}>Weekly</p>
                    <p onClick={props.function} className={props.active3}>Monthly</p>
                </div>
            </div>
        </div>
    )
}