import './OurTeam.css';
import data from '../../JSONS/ourTeam.json'
function OurTeam() {
    return (
        <>
            <div id="our-team-main">
                <h1>Our Team</h1>
                <div id="members">
                    {
                        data.map((value, index) => {
                            return (
                                <div className='member-item' key={index}>
                                    <img src={value.img} alt="" />
                                    <h3>{value.name}</h3>
                                    <h4>{value.desc}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default OurTeam;