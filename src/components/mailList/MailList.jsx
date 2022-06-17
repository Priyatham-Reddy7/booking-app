import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">
                Sign up and we'll send the best deals to you
            </span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
                <div className="mailCheckbox">
                    <input type="checkbox" id="link" name="link" />
                    <label for="link">
                        Send me a link to get Free Booking.com app!
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MailList
