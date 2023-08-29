import './Home.css';
import Button from '../Button/Button';
import ImgDiv from '../ImgDiv/ImgDIv';
import OurWork from '../OurWork/OurWork';
import soldiersPhoto from '../../pictures/nahal-sodiers.png';
import mountainPhoto from '../../pictures/nahal-mountain.png';
import soldierPhoto from '../../pictures/nahal-soldier.png';
import memorial from '../../pictures/memorial-nahal.png'
import PhotoText from '../PhotoText/PhotoText';
import WhatsappGroups from '../WhatsappGroups/WhatsappGroups';
import Carousel from '../Carousel/Carousel';
import pictures from '../../JSONS/ourPhotos.json';
import reviews from '../../JSONS/reviews.json';
import OurTeam from '../OurTeam/OurTeam';
function Home() {
    return (
        <>
            <ImgDiv img={soldiersPhoto} color={'#F7F6E7'} height={'85vh'}>
                <h1>תדע כל נחלוואית <br /> ידע כל נחלוואי</h1>
                <h2>ברוכים/ות הבאים/ות לעמותת הנח"ל <br /> בואו נדבר תכלס ונסביר מה קורה פה, תגללו למטה</h2>
                <div className="buttons-div">
                    <a href="https://www.jgive.co.il/new/he/ils/donation-targets/36486" target="_blank" rel="noopener noreferrer">
                        <Button text={'כבר מכירים נשמות, איפה תורמים?'} invert={true} />
                    </a>
                    <a href="http://www.nahal.co.il/%d7%98%d7%95%d7%a4%d7%a1-%d7%91%d7%95%d7%92%d7%a8%d7%99-%d7%94%d7%a0%d7%97%d7%9c/" target="_blank" rel="noopener noreferrer">
                        <Button text={'שמעתי כבר הכל, איפה נרשמים?'} />
                    </a>
                </div>
            </ImgDiv>
            <ImgDiv img={mountainPhoto} color={'white'} height={'50vh'}>
                <h2>הצטרפו לווצאפים של הקהילה</h2>
                <div className="buttons-div">
                    <a href="https://chat.whatsapp.com/BRItiyDXuPFCHZf0KAvJLe" target="_blank" rel="noopener noreferrer">
                        <Button text={'קבוצת נטוורקינג פעילה'} invert={true} />
                    </a>
                    <a href="https://chat.whatsapp.com/GlkElqHrVoD1al9hBib2iD" target="_blank" rel="noopener noreferrer">
                        <Button text={'קבוצת עדכונים שקטה'} />
                    </a>
                </div>
            </ImgDiv>
            <div id="who-are-we">
                <h1>מי אנחנו?</h1>
                <h2>אנחנו עמותת הנח"ל</h2>
                <h3>ובשנים האחרונות לקחנו על עצמנו משימה גדולה (בנוסף להנצחת חללי הנח"ל וחיל החינוך)</h3>
                <h2>לדאוג ללוחמי, חיילי ובוגרי החטיבה</h2>
                <h3>סביב המשימה הזו התחלנו לכנס עוד ועוד בוגרי חטיבה צעירים ושאפתנים שרוצים לעזור לכל בוגר/ת חטיבה</h3>
                <h2>לממש את הפוטנציאל הגלום בתוכו</h2>
                <h1>אם הגעת לדף הזה כנראה שהעמותה נועדה גם בשבילך</h1>
            </div>
            <OurWork />
            <PhotoText img={soldierPhoto}>
                <h1>בואו להיות חלק מהעשייה!</h1>
                <h2>רישום כחבר/ת עמותה</h2>
                <h4>ניתן להירשם בקישור, להתעדכן ולקחת חלק בפעילות. דמי רישום כחברי עמותה רק ב-25 ש"ח לחודש</h4>
                <h2>תרומה כספית</h2>
                <h4>ניתן לתרום תרומה חד פעמית או הוראת קבע, כל אחד לפי יכולתו ורצונו</h4>
                <br />
                <h4>כלל הכספים יתמכו בפעילות העמותה למען החיילים ובוגרי החטיבה</h4>
                <br />
                <div className="buttons-div">
                    <a href="http://www.nahal.co.il/%d7%98%d7%95%d7%a4%d7%a1-%d7%91%d7%95%d7%92%d7%a8%d7%99-%d7%94%d7%a0%d7%97%d7%9c/" target="_blank" rel="noopener noreferrer">
                        <Button text={'רישום כחבר/ה'} invert={true} />
                    </a>
                    <a href="https://www.jgive.co.il/new/he/ils/donation-targets/36486" target="_blank" rel="noopener noreferrer">
                        <Button text={'תרומה כספית'} />
                    </a>
                </div>
            </PhotoText>
            <PhotoText img={memorial} invert={true}>
                <h1>הצטרפו לקהילה!</h1>
                <h4>קהילת בוגרי הנח"ל מטרתה לממש את הפוטנציאל הגלום בכל אחת ואחד מחיילי הנח"ל בעבר, בהווה ובעתיד</h4>
                <h3>הכח הכי גדול שלנו הוא</h3>
                <h2>הביחד</h2>
                <h3>שני מסלולי הצתרפות לקהילה:</h3>
                <h3>חבריה וחברות פעילים</h3>
                <h4>יוזמים, שותפים לקבלת החלטות, נעזרים בפלטפורמה של העמותה כדי לפיץ טוב</h4>
                <h3>חברים וחברות מופעלים</h3>
                <h4>פשוט חלק מהקהילה שלנו, וכשצריך עזרה במשהו ספציפי יכולים ואף מוזמנים לקחת חלק בצורה שמתאימה להם, מחכים ליום הפעלה</h4>
                <br />
                <h4>יאללה תבחרו קבוצת ווצאפ להיכנס אליה, מבטיחים להיות עניינים ולנהל את השיח אך ורק לטובת החיילים והבוגרים</h4>
                <br />
                <div className="buttons-div">
                    <a href="https://chat.whatsapp.com/BRItiyDXuPFCHZf0KAvJLe" target="_blank" rel="noopener noreferrer">
                        <Button text={'חברים פעילים'} invert={true} />
                    </a>
                    <a href="https://chat.whatsapp.com/GlkElqHrVoD1al9hBib2iD" target="_blank" rel="noopener noreferrer">
                        <Button text={'חברים מופעלים'} />
                    </a>
                </div>
            </PhotoText>
            <div id="donate-work">
                <h1>רוצים לתרום תרומה שוות כסף?</h1>
                <h3>הרשמו למאגר השירותים, עסקים ומנטורים שאנו בונים עבור בוגרי הנח"ל</h3>
                <h3>את המאגרים אנחנו בונים עבור פרויקטים להמשך שאנו מתכננים להקים</h3>
                <div className="buttons-div">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSWMjMVUvvuHTFeCwIJEyCnDwgymF3rhefV7W4qWGjy4w2BQ/viewform" target="_blank" rel="noopener noreferrer">
                        <Button text={'רישום כמנטור/ית'} />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSegDcQkL1jy76lu5GCY58oYAndmoWueyULN4tAr-5eGU7vezA/viewform" target="_blank" rel="noopener noreferrer">
                        <Button text={'רישום כנותן/נת שירות לקהילה'} invert={true} />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScfhnXHAF_3aR6dECSY3P5R2C5j3Iw1XvdBSDse4LsqDiAzuw/viewform" target="_blank" rel="noopener noreferrer">
                        <Button text={'רישום למתן הנחה בעסק שלך'} />
                    </a>
                </div>
            </div>
            <WhatsappGroups />
            <Carousel show={window.innerWidth > 768 ? 2 : 1}>
                {pictures &&
                    pictures.map((value, index) => {
                        return (
                            <img id='picture' key={index} src={value.img} alt="" style={{ width: '100%' }} />
                        )
                    })
                }
            </Carousel>
            <div id="reviews">
                <h2>אין הנחתום מעיד...</h2>
                <Carousel show={window.innerWidth > 768 ? 3 : 1} isRadioButtons={true}>
                    {reviews &&
                        reviews.map((value, index) => {
                            return (
                                <div key={index} className='review-item'>
                                    <img id='right-qoute' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2XKw7CQBRFj67F1JHQDeCqECwB24S1dFHVONYAGByyhqAQ5GEwIMhjPi2Qe5Kxc3Ln8+YNCCGEEOIJSzxG85iCoB0xHS10R1DVekHlF70j6GW314uhO4J6LdT9ojYe/UcYoyyqRSFowVzE7MhXeewfghSOyc8JQhS5PZVDcEgQpMrtaRyCTYIgTW5P5xC0CYJ0OT01cHMI5pEh6pyeEjg6Jt9FhihzeSbAGjg5y+EqMEBWj304toEhsnvsg9EDswGC9CEe7+RXYBEYYhCPOVdoGRFiEI85zuo0MsQgHntT+kKr0ygeAy7A/tEOtAkeuzE9Qgh+nDsLDEkl96yZAAAAAABJRU5ErkJggg=="></img>
                                    {value.text}
                                    <img id='left-qoute' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO2YMQrCQBBFXzprC2u9QsBK8BQpxNt4I2+Q0iOoWFppq42FrAjaBNFJdich+B9sO49PdmdnA0IIIYSoTQ6sgBLYAlcg9MWTAQWwexX7tFLg6pkAmy+FUwVx9cyAk6F4bBBXzxy4GYvHBHH1jIFzjeJNg7h6MuNejQ3i7imMBY/AEhg2COHuyX60vvc6AKOGAVrx5Ibid2AaEaIVz8ogWEeGaMVTGgSLBEHcPXuD4HkDx+LuuRgEgwRB3D0hZR/v0hP+KUiosTrzBAVBXyRoa6EzgrpWBbVfdI+gmz1UD4bOCJq10PSLxnj0HqGLtqgRBff/CEIIesIDMUFJL2ymR/4AAAAASUVORK5CYII="></img>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            <OurTeam />
        </>
    )
}
export default Home;