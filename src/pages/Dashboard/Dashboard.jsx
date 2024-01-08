import Header from "../../components/Header";
import MainBody from "../../components/MainBody";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <section className="header-section">
        <Header />
      </section>
      <section className="main-body">
        <MainBody />
      </section>
    </section>
  );
};

export default Dashboard;
