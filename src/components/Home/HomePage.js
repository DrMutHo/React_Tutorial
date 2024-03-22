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
        </div>
    );
}

export default HomePage;