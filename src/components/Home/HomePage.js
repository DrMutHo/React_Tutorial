import vidHomePage from "../../assets/hero.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video loop autoPlay muted >
                <source
                    src={vidHomePage}
                    type="video/mp4"
                />
            </video>

            <div className="homepage-content">
                <div className="title-1">
                    Make forms
                    <br />
                    worth filling out
                </div>
                <div className="title-2">
                    <span>
                        "Get more data—like signups, feedback, and anything else—with forms designed to be "
                        <strong>refreshingly different.</strong>
                    </span>

                </div>
                <div className="title-3">
                    <button className="btn-getstart">Get started-it's free</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;