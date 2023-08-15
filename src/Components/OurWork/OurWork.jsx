import './OurWork.css'
import json from '../../JSONS/ourWork.json'
import { useEffect, useState } from 'react';

function OurWork() {
    const [data, setData] = useState();
    useEffect(() => {
        setData(json);
    }, [])
    return (
        <>
            <div id="our-work-main">
                <div id="top">
                    <h2>מה אנחנו עושים תכלס</h2>
                    <h3>הכל עבור הנחלוואים בעבר בהווה ובעתיד</h3>
                </div>
                <div id="boxes">
                    {data &&
                        data.map((value, index) => {
                            return (
                                <div id="box" key={index}>
                                    <img src={value.img} alt="" />
                                    <h3 id='title'>{value.title}</h3>
                                    <h4>{value.text}</h4>
                                    <h3 id='second-title'>{value?.['second-title']}</h3>
                                    <h4>{value?.['second-text']}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default OurWork;