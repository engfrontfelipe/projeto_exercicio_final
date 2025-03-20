import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";

const Home = () => (
  <>
    <Header modelHeader="HeaderMax" />
    <RestaurantList />;
    <Footer />
  </>
);

export default Home;
