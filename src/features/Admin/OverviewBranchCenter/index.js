import React, { useEffect, useMemo, useState } from "react";
import classes from "./styles.module.scss";
import Summarize from "./Summarize/summarize";
import QuickAccess from "./QuickAccess/QuickAccess";
// import logo from "../../../assets/images/image 48.png";
import logo from "../../../assets/images/banner/logo11.png";
import logo1 from "../../../assets/images/banner/logo12.png";
import logo2 from "../../../assets/images/banner/logo13.png";

import Notifications from "./Notifications/notifications";
import AreaChart from "./Reservation/areaChart";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import {
  Calendar,
  Smiley,
  Package,
  Users,
  Gear,
  Sword,
  UserCircleGear,
  Infinity,
} from "phosphor-react";
import { useSelector } from "react-redux";
import { getAllCustomerOfCenter } from "../GymCenter/Customers/CusAPI";
import { message } from "antd";
import { getAllStaffOfCenter } from "../GymCenter/Staffs/StaffAPI";
import { handleGet5ReviewNew, handleGetBookingOfCenter } from "./CenterAPI";

const DashboardBranchCenter = (props) => {
  //const salonId = useAppSelector(state => state.currentSalon);

  // const dispatch = useAppDispatch();
  const [summary, setSummary] = useState({
    customer: 0,
    staff: 0,
  });

  // useEffect(() => {
  //     let cancel = false;
  //     // getSumDetail(salonId.salonId.toString()).then(res => {
  //     //     if (cancel) return;
  //     //     const data = res.data.data;
  //     //     setSummary({
  //     //         customer: data.customer,
  //     //         staff: data.staff
  //     //     })
  //     // })
  //     // return () => {
  //     //     cancel = true;
  //     // }

  // }, [salonId]);
  const testLanguage = useSelector((state) => state.app.language);
  console.log("check la in dashboard: ", testLanguage);
  const [customerTotal, setCustomerTotal] = useState();
  const [staffTotal, setStaffTotal] = useState();
  const [bookingTotal, setBookingTotal] = useState();
  const [fiveReview, setFiveReview] = useState();
  const roleId = useSelector((state) => state.user.userInfo.roleId);

  let arr = useMemo(
    () => [
      {
        image: (
          <span className="icon-QuickAcces_1">
            <Calendar size={24} color="#1fa836" weight="fill" />
          </span>
        ),
        title: "Reservation",
        description: "Management",
        link: "/admin/merchant/reservation",
      },
      {
        image: (
          <span className="icon-QuickAcces_2">
            <Smiley size={24} color="#e9b807" weight="fill" />
          </span>
        ),
        title: "Customer",
        description: "Swap",
        link: `/admin/merchant/:branchId/customers`,
      },

      {
        image: (
          <span className="icon-QuickAcces_4">
            <Users size={24} color="#76e21d" weight="light" />
          </span>
        ),
        title: "Staff",
        description: "Swap",
        link: "/admin/merchant/:branchId/staffs",
      },
      {
        image: (
          <span className="icon-QuickAcces_5">
            <Gear size={24} color="#828580" weight="fill" />
          </span>
        ),
        title: "Gym",
        description: "Swap",
        link: "/admin/merchant/gym-config",
      },
      // {
      //   image: (
      //     <span className="icon-QuickAcces_6">
      //       <Sword size={24} color="#f2f4f1" weight="fill" />
      //     </span>
      //   ),
      //   title: "Work shiff",
      //   description: "Swap",
      //   link: "/customers",
      // },
      {
        image: (
          <span className="icon-QuickAcces_7">
            <Infinity size={24} color="#242423" weight="fill" />
          </span>
        ),
        title: "Service",
        description: "Swap",
        link: `/admin/merchant/:branchId/services`,
      },
    ],
    []
  );
  let arrForManager = useMemo(
    () => [
      {
        image: (
          <span className="icon-QuickAcces_1">
            <Calendar size={24} color="#1fa836" weight="fill" />
          </span>
        ),
        title: "Reservation",
        description: "Management",
        link: "/admin/merchant/reservation",
      },
      {
        image: (
          <span className="icon-QuickAcces_2">
            <Smiley size={24} color="#e9b807" weight="fill" />
          </span>
        ),
        title: "Customer",
        description: "Swap",
        link: `/admin/merchant/:branchId/customers`,
      },

      {
        image: (
          <span className="icon-QuickAcces_4">
            <Users size={24} color="#76e21d" weight="light" />
          </span>
        ),
        title: "Staff",
        description: "Swap",
        link: "/admin/merchant/:branchId/staffs",
      },
      {
        image: (
          <span className="icon-QuickAcces_5">
            <Gear size={24} color="#828580" weight="fill" />
          </span>
        ),
        title: "Gym",
        description: "Swap",
        link: "/admin/merchant/gym-config",
      },
      // {
      //   image: (
      //     <span className="icon-QuickAcces_6">
      //       <Sword size={24} color="#f2f4f1" weight="fill" />
      //     </span>
      //   ),
      //   title: "Work shiff",
      //   description: "Swap",
      //   link: "/customers",
      // },
      {
        image: (
          <span className="icon-QuickAcces_7">
            <Infinity size={24} color="#242423" weight="fill" />
          </span>
        ),
        title: "Service",
        description: "Swap",
        link: `/admin/merchant/:branchId/services`,
      },
      {
        image: (
          <span className="icon-QuickAcces_7">
            <UserCircleGear size={24} color="#242423" weight="fill" />
          </span>
        ),
        title: "Account",
        description: "Swap",
        link: "/admin/setting-account",
      },
    ],
    []
  );

  let nfs = useMemo(
    () => [
      {
        date: "FRIDAY, 20 MARCH, 05:00 PM",
        title: "New Reservation",
        text: "Richard Rogers has booked for [X] service at 09.00 am with Lozy as staff.",
      },
      {
        date: "FRIDAY, 20 MARCH, 05:00 PM",
        title: "New Reservation",
        text: "Richard Rogers has booked for [X] service at 09.00 am with Lozy as staff.",
      },
      {
        date: "FRIDAY, 20 MARCH, 05:00 PM",
        title: "New Reservation",
        text: "Richard Rogers has booked for [X] service at 09.00 am with Lozy as staff.",
      },
    ],
    []
  );
  const CenterId = localStorage.getItem("CenterId");
  useEffect(() => {
    try {
      getAllStaffOfCenter(parseInt(CenterId), "", 1)
        .then((res) => {
          // console.log("check res staff: ", res.staffOfCenter);
          if (res.staffOfCenter) {
            setSummary({
              staff: res.staffOfCenter.count ? res.staffOfCenter.count : 0,
            });
            setStaffTotal(res.staffOfCenter.count);
          }
        })
        .catch(() => {
          message.error("get staff fail");
        });
    } catch (error) {
      console.log(error);
    }
  }, [CenterId]);
  useEffect(() => {
    try {
      getAllCustomerOfCenter(parseInt(CenterId), "", 1)
        .then((res) => {
          // console.log("check res: ", res);
          if (res.customerOfCenter) {
            setSummary({
              customer: res.customerOfCenter.count
                ? res.customerOfCenter.count
                : 0,
            });
            setCustomerTotal(res.customerOfCenter.count);
          }
        })
        .catch(() => {
          message.error("get customer fail");
        });
      handleGetBookingOfCenter(CenterId, "", 1)
        .then((res) => {
          if (res) {
            setBookingTotal(res.bookingOfCenter.count);
          }
        })
        .catch((error) => console.log(error));
      handleGet5ReviewNew(CenterId)
        .then((res) => {
          // console.log("check 5 review: ", res);
          if (res) {
            setFiveReview(res.fiveReviewOfCenter.rows);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [CenterId]);
  // const handleLogout = () => {
  //     dispatch(loginActions.doLogout());
  // };

  //GET SUMMARIZE CUSTOMER AND STAFF

  return (
    <div className={classes.dashboardBackground}>
      <div className={classes.container}>
        <div className={classes.dashboard}>
          {/* <button onClick={handleLogout} ref={buttonRef}>
                Logout
            </button> */}
          <div className={classes.rowDashboard}>
            <div className={classes.colLeft}>
              <div
                className={`${classes.leftItem} ${classes.leftItemSummarize}`}
              >
                <div className={`${classes.title} ${classes.titleSummarize}`}>
                  <FormattedMessage id="admin.sumarize" />
                </div>
                <div className={classes.summarizeDashboard}>
                  <div className={classes.summarizeItem}>
                    <Summarize
                      image={logo}
                      title="Customer"
                      total={customerTotal}
                    />
                  </div>
                  <div className={classes.summarizeItem}>
                    <Summarize image={logo1} title="Staff" total={staffTotal} />
                  </div>
                  <div className={classes.summarizeItem}>
                    <Summarize
                      image={logo2}
                      title="Booking"
                      total={bookingTotal}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${classes.leftItem} ${classes.leftItemQuickAccess}`}
              >
                <div className={`${classes.title} ${classes.titleQuickAccess}`}>
                  <FormattedMessage id="admin.quick-access" />
                </div>
                {roleId && roleId === 1 ? (
                  <div className={classes.quickAccessDashboard}>
                    {arr.map(function (item, idx) {
                      return (
                        <div key={idx} className={classes.quickAccessItem}>
                          <Link to={item.link}>
                            <QuickAccess
                              image={item.image}
                              title={item.title}
                              description={item.description}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className={classes.quickAccessDashboard}>
                    {arrForManager.map(function (item, idx) {
                      return (
                        <div key={idx} className={classes.quickAccessItem}>
                          <Link to={item.link}>
                            <QuickAccess
                              image={item.image}
                              title={item.title}
                              description={item.description}
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className={classes.colRight}>
              <div
                className={`${classes.rightItem} ${classes.rightItemReservation}`}
              >
                <div className={`${classes.title} ${classes.titleReservation}`}>
                  <FormattedMessage id="admin.reservation" />
                </div>
                <div className={classes.reservationDashboard}>
                  <AreaChart />
                </div>
              </div>
              <div className={` ${classes.rightItemNotifications}`}>
                <div
                  className={`${classes.title} ${classes.titleNotifications}`}
                >
                  <FormattedMessage id="admin.notification" />
                </div>
                <div
                  className={classes.notificationsDashboard}
                  style={{ height: "290px", overflow: "auto" }}
                >
                  {fiveReview &&
                    fiveReview.map(function (item, index) {
                      return (
                        <Notifications
                          key={index}
                          date={item.createdAt}
                          title={item.ratingPoint}
                          text={item.reviewContent}
                          data={item}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardBranchCenter;
