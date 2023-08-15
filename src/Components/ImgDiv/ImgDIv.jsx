import './ImgDiv.css'
function ImgDiv({ children, img, color, style, height }) {
    return (
        <div id="img-div-main" style={{height}}>
            <div id="back" style={{ backgroundImage: `url(${img})` }}></div>
            <div id="front" style={{ color, ...style }}>
                {children}
            </div>
        </div>
    )
}
export default ImgDiv;