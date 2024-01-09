import Search from "../assets/icons/Search.svg";
import Sort from "../assets/icons/Sort.svg";
import Download from "../assets/icons/Download.svg";
import triangleIcon from "../assets/icons/TriangleIcon.svg";
import { orderData } from "../constants/data";
import chevronRight from "../assets/icons/ChevronRight.svg";
import helpIcon from "../assets/icons/Help.svg";

const MainBody = () => {
  return (
    <>
      <div className="first-outer-div">
        <div className="overview-div">
          <span>Overview</span>
          <select name="months" id="months">
            <option value="Last-Month" defaultValue={true}>
              Last Month
            </option>
            <option value="Last-6-month">Last 6 Month</option>
            <option value="Last-12-month">Last 12 Month</option>
          </select>
        </div>
        <div className="total-data">
          <div className="online-orders">
            <span className="text">Online orders</span>
            <span className="actual-data">231</span>
          </div>
          <div className="amount-received">
            <span className="text">Amount Received</span>
            <span className="actual-data">₹23,92,312.19</span>
          </div>
        </div>
      </div>
      <div className="main-data-table">
        <div className="heading">
          <span>Transactions | This Month</span>
        </div>
        <div className="data-table-outer">
          <div className="search-sorting">
            <div className="search">
              <img src={Search} alt="search" />
              <input type="text" placeholder="Search by order ID..." />
            </div>
            <div className="sort-outer">
              <div className="sort">
                <span>Sort</span>
                <span>
                  <img src={Sort} alt="sort" />
                </span>
              </div>
              <div className="download">
                <img src={Download} alt="download" />
              </div>
            </div>
          </div>
          <div className="main-table">
            <table>
              <thead>
                <tr>
                  <th className="first-half">Order Id</th>
                  <th className="first-half">
                    Order Date{" "}
                    <span>
                      <img src={triangleIcon} alt="triangle Icon" />
                    </span>
                  </th>
                  <th className="other-half">Order Amount</th>
                  <th className="other-half" title="Transaction fee">
                    Transaction fees{" "}
                    <span>
                      <img src={helpIcon} alt="help Icon" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((item, index) => (
                  <tr key={index}>
                    <td className="first-half">
                      <a href={`/${item.orderId}`}>#{item.orderId}</a>
                    </td>
                    <td className="first-half">{item.orderDate}</td>
                    <td className="other-half">₹{item.orderAmount}</td>
                    <td className="other-half">₹{item.transactionFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className="control-button">
              {" "}
              <img src={chevronRight} className="rotate-left" alt="" />
              Previous
            </button>
            <div className="pages">
              <a href="#">1</a>
              <a href="#">...</a>
              <a href="#" className="currPage">
                10
              </a>
              <a href="#">11</a>
              <a href="#">12</a>
              <a href="#">13</a>
              <a href="#">14</a>
              <a href="#">15</a>
              <a href="#">16</a>
              <a href="#">17</a>
              <a href="#">18</a>
            </div>
            <button className="control-button">
              Next <img src={chevronRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
