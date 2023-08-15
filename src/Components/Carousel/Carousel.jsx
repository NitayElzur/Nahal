import { useState } from 'react';
import './Carousel.css';
function Carousel({ children, show, isRadioButtons, style }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children && children.length);
    const [touchPosition, setTouchPosition] = useState(null);

    function next() {
        if (currentIndex <= (length - show)) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    function prev() {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    function handleTouchStart(e) {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    function handleTouchMove(e) {
        const touchDown = touchPosition;
        if (touchDown === null) return;
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5 && currentIndex >= 0) {
            prev()
        }
        if (diff < -5 && currentIndex < length - 1) {
            next()
        }
        setTouchPosition(null)
    }
    return (
        <div id="picture-carousel-main" style={style}>
            <div id="container">
                <div id="wrapper" style={isRadioButtons && { flexDirection: 'column' }}>
                    {currentIndex > 0 && !isRadioButtons &&
                        <button id="right-arrow" onClick={prev}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO1ZS4sVVxA+jC/GOXWvJg7iY6MS9z4S8wsShjEbUcnGxyq7LESMp2qMvVGTjaCoGbqqB82ICKNCUHCrkl+giCGaCCYhPsetMZtIdY9zz713Mrdft0fhfnCgoalzqvrU46tqY3rooYfiCII+YPrUMhIwXQHBu1boJQj9qyt5xrsgeNkKIYRui8qYuUY/f7MamL4Dwb9A6L+M609gPNY/SqsqVxx+dB+C4Cgwvs6heOv6BwTP1CT4oBLlB0L80jK9aFcE/wahCCK3qx7SRjXShF8t0GXDYFld3CZg2m0Zx4Dp8QzyzwcYd3ZP8yCYH3/11oMZb0BEw2Zix7xMe7HbCkI3Z7iR0/q+XOWP7+u3Qtf8g6zg/VrkPiu6NYQ0ZJkeNO3NeFXPLEf5IJjfpjzTueXj+wfKOcCYwdOBtUzjbUaUcROtbmOFvjVdghU83GLEqcIBW5Xysxix3eSBZhE/26jbmIpgmc43kgQ9q//glhZyHQ3YMn0+VUwI/pbblZIK2yhSNabPTcWAkIb8YtcfHViZXjimB408X0gRduuB6UCdR9Zkl8VbnhFH00lN7JjXxG20SBWAFXw45QaTi6ODG7LIQlLs3iaQR6kIoLJKnx4UzcUaP54vZzMi0IpNT6ZdWeiTzgcqJW5cW2QKQhVWxfMaYQXPepnwYEeBhM+/dR+3y5SAIkaAuD3eB72UQkAbj0RAWaUpCXmNqEW02XPpOx0P8g+JKfFsm4cj60Bwv15tmgVCF1uq7GQnI+wYDvqUu6MBfv43E8HCWTf3ik3eZQXvz6rQya8X+fXgHTSAfi3VgCwuVB9za63QCAh+n2ZZwevddyHxgljcJtPFIK6nSBK10H2cKYib0ijT7rlUXgFMezOl0Xhu0zhozMyh8gql8dkKWei2eDfwuCiVAMZ7eZU3ySDh6TSViGhzGqG+eOhUEpkDoV9yKW9i2S8yk7lYkPGY53c3TQFoptJiB6OHPsoqC4I/e7T+SGpBHfclE7Mp4ZCGTMWAiIY95V9lamjiDQTPeMHzQNs8UxEGkzHL717snMw7/3zuGTFuKoJluuDl/qe5mnqFzipbeMth02VYpqDlzG2FNtRZZVVG2Dbl6UQ5o0XGq80chs6XGRODic97bhO7zk+ZBsYdh7utRigTLSE7QUTDfsBOK1/acLf5Jk61UWIdfbDbmqlixxVWixQ28ryfcUr78jNAZ5V+efdox5OkAXd7tOTrT424n5gIFupz3Boy7U24zf/KbzNVQNPa1G00il3exfhKv3r9bLDEVA2tjjoxA8Y/cnRij5QeLA5phZlzBEGfDp2soFPOro1HTKG1PWV8nTzTbX2nlFiblHfiN2sPPZj3H28An2hulMeO4ZwAAAAASUVORK5CYII=" />
                        </button>
                    }
                    <div id="content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                        <div id="content" style={{ transform: `translateX(${currentIndex * 100 / show}%)` }}>
                            {children &&
                                children.map((value, index) => {
                                    return (
                                        <div className='picture' style={{ width: `calc(100% / ${show})` }} key={index}>
                                            {value}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {(currentIndex < (length - show) && !isRadioButtons) &&
                        <button id="left-arrow" onClick={next}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+ElEQVR4nO1ZS2sUQRBuokZiurK+gvi4KPgDfPsLlJB4ERUvak7ePEjQTJWaufi6CIqJYaonqBERooIoeFXxFyhB8XWIim+9+rgoNZNke2djdl47UdgPGgZmq/ur6eqqr2uVaqCBBrLDdZuAabNmJGC6CQZHtaFvYOiXjPAZR8HgDW0IwXM2iY2aabTw4RXAdAoMvgVDvxOON8B4smWQlhdOHC47i8DgIDD+TEE8On6AwYE24y4shHyrh7s105dqIvgODPngO3tKHq0VJ5W3f44M7bmLS8ZZB0x7NeMQML2fwv5zK+Ou+jF33dnBV48uzHgPfOpUIztnJZqLnS4wdH+KHemX9/mSP3OwRRu6Yy+kDT5v850tWacGjzo004uKuRlvy5r5kHfd2VXkmS4tGe5pzWcBpdr7Xa2ZhqucyGMnomGjDR1TdYI22Bdx4nzmA1sU+Wmc2KHSQLKInW0kbFRB0ExXykmCPpUuOAsyhY4c2DxjPtaZMPgydSiFFbZcpNqYtqqCAR512MWuxT+0LL5xIA/KeT7x4oNHV4PBntKQsyqprQ1gfGA5cULFwsjOWRXaRopUAkgV1oxfx+2fqgyAsNhNJJCxWAJQVKUtD5Lk4gh52b0nWRxQQcWmD5OhbGhjTZtAEpe3zU9LXp7n+b1rckirF61M2FvTINTzE+Hj7JlJ8gIwzj7rg15XtRBePEIDITaT5AVtPq23QvqxqoWKGBZJPA2EaMXvw3FNtjrOgBiZSg9huy25azpg53814jZPO7lVbNIObfDltITOHZhr14N8HYjI4H/CAZ0xhLTBu2DwdJyhDR3JP4TsQ2ycdbV+H3Ui90PsORsSHeKKNMq0N84i9XQCmLoTpdGgb1MmMhR3oXo5oZkuJStknrPJ2oH3SaRElROGnuXQSPg4KSV8Wh/HqCloOqUUc7YTmulVBvoKDG1LLOYCQ8aTVtzdT7pwiY+sBKZDIqvTEJ8AGHxoCcPjKi6k3Rd2zMaNPepQBQN86rTIf090oQkmMDhgHZ4Xcs1TBaE9bLO8shLCubT9z8+WE8OqIGimq1bu/5jqUi+QXmWkyvapOkMzuZE1t2eaUHqVRTmhq8jT2Xxai4y3KyZmupLnmWgPY94KmyB0biVqGNds7kadECmdQ3YCnzrtAztJPrfmbuVOnK+SxNL6YKcrUSM2qLBSpLCc5+2Mk9uXnwLSq7TLuyU7PoQXcGeflHz5UyO4T4y4zfIcXA2ZukNt81f77aoISFob341ysUs7GL/LVy9ddOeroiHVUTpmwPg6+U2MxkQezPNoqZpxuG6TNJ20QUc0u1w8AkEn11PGn+EzPZJ3IonlkvJP/M3aQAPq/8cf+2hulz+qNGkAAAAASUVORK5CYII=" />
                        </button>
                    }
                    {children && isRadioButtons &&
                        <div id='radio-buttons-container'>
                            {children.slice(0, children.length - show + 1).map((value, index) => {
                                return (
                                    <div className='container'>
                                        <input type="radio" defaultChecked={index === 0} name='image-select' onChange={() => setCurrentIndex(index)} />
                                        <span className="checkmark"></span>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Carousel;