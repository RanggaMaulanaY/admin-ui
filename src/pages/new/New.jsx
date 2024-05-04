import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/datatable/Datatable";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
        <h1 className="title">New</h1>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="item">
                <img
                    src="https://i.pinimg.com/564x/04/b3/81/04b3814f97932156f769a9996643f3df.jpg"
                    alt=""
                    className="itemImg"/>
                </div>
            </div>
            <div className="right">
                <List/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default New;