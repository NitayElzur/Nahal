import './PhotoText.css'
function PhotoText({ invert, img, children }) {
    return (
        <div id={'photo-text-main'} className={`photo-text${invert ? '-invert' : '-regular'}`}>
            <img id={`photo${invert ? '-invert' : ''}`} src={img} alt="" />
            <div id='text'>
                {children}
            </div>
        </div>
    )
}
export default PhotoText;