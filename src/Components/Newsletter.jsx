import Banner from "../shared/Banner";
import BannerImg from "../assets/Newsletter.png"

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2x1 mx-auto my-12">
            <Banner banner={BannerImg} heading={"Each student an share their discount code for friends"} subheading={"A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence."} btn1={"I have a code"}/>
        </div>
    );
};

export default Newsletter;