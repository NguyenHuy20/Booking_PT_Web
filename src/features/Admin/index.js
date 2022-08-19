import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./admin.scss";
import { useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import avatar from "../../assets/images/logo/logoGHGym.png";
import logo from "../../assets/images/logo/GHGYMLogo.png";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  RightCircleOutlined,
  UserSwitchOutline,
  AppstoreOutlined,
  BankOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Layout, Menu } from "antd";
import {
  BellRinging,
  Books,
  Buildings,
  ClockClockwise,
  Coins,
  Gear,
  GearSix,
  MapPinLine,
  Repeat,
  SignOut,
  Translate,
  User,
  UserCircle,
  UsersFour,
  UsersThree,
  UserSwitch,
  Planet,
  CalendarCheck,
  Book,
  ListNumbers,
  IdentificationBadge,
  AlignCenterHorizontal,
  Ticket,
} from "phosphor-react";
import DashboardAdmin from "./Dashboard";
import { Link, NavLink, Outlet, Route, Router, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageApp } from "../../store/actions";
import { LANGUAGES } from "../../utils/constant";
import { FormattedMessage } from "react-intl";
import flagVie from "../../assets/images/region/vietnam.png";
import flagEng from "../../assets/images/region/united-states.png";
import { getAllCenter, getAllCenterActive } from "./AdminAPI";

const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AdminPage = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

  const navigate = useNavigate();
  const roleId = useSelector((state) => state.user.userInfo.roleId);
  // console.log("check role: ", roleId);
  const [collapsed, setCollapsed] = useState(true);
  const [center, setCenter] = useState([]);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);
  const handleChangeListStaffs = () => {
    navigate("/admin/manage-staffs");
  };
  const handleChangeCenter = (CenterId, CenterName) => {
    navigate(`/admin/manage-center`);
    localStorage.setItem("CenterId", CenterId.toString());
    // console.log("check center id after change: ", CenterId);
  };
  const handleLogout = () => {
    dispatch(dispatch(actions.processLogout()));
    navigate("/admin-login");
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          icon: <User size={20} color="#171717" weight="fill" />,
          label: (
            <NavLink to="/admin/setting-account">
              <FormattedMessage id="admin.profile" />
            </NavLink>
          ),
        },

        {
          key: "3",
          icon: <SignOut size={20} color="#1d1b1b" weight="fill" />,
          label: <FormattedMessage id="admin.logout" />,
          onClick: handleLogout,
        },
      ]}
    />
  );
  const menuDrop = (
    <Menu
      items={[
        {
          key: "1",
          label: <p>uuuuuu</p>,
        },
        {
          key: "2",
          label: <p>Xong review</p>,
          // icon: <SmileOutlined />,
          // disabled: true,
        },
        {
          key: "3",
          label: <p>Nên có nhiều chương trình hơn</p>,
          // disabled: true,
        },
        {
          key: "4",
          label: <p>Test thử</p>,
          // disabled: true,
        },
        {
          key: "5",
          label: <p>Nên có thêm máy chạy bộ</p>,
          // disabled: true,
        },
      ]}
    />
  );
  const handleSettingAccount = () => {
    navigate("/admin/setting-account");
  };
  useEffect(() => {
    try {
      getAllCenterActive(1).then((res) => {
        // console.log("check res: ", res.centers);
        if (res && res.centers.rows.length > 0) {
          setCenter(res.centers.rows);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log("check center: ", center);
  const handleViewListAccount = () => {
    navigate("/admin/view-list-account");
  };
  const handleViewListService = () => {
    navigate("/admin/view-list-service");
  };
  const handleViewListManager = () => {
    navigate("/admin/view-list-manager");
  };
  const handleViewListOrder = () => {
    navigate("/admin/view-list-order");
  };

  const handleViewListSalary = () => {
    navigate("/admin/view-list-salary");
  };
  const handleViewListCenter = () => {
    navigate("/admin/view-list-center");
  };
  const handleViewListDiscount = () => {
    navigate("/admin/view-list-discount");
  };
  const handleViewListSchedule = () => {
    navigate("/admin/view-list-schedule");
  };
  const handleViewListBlog = () => {
    navigate("/admin/view-list-blog");
  };
  return (
    <Layout style={{ height: "100vh" }} className="bgAdmin">
      <Sider trigger={null} collapsible collapsed={collapsed} icon={logo}>
        <NavLink to="/admin" exact={true}>
          <div className="logo" />
        </NavLink>
        {roleId && roleId === 1 && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            itemIcon={<RightCircleOutlined />}

            //   getItem(
            //     <FormattedMessage id="admin.manage-gym.manage-account" />,
            //     "sub6",
            //     <UserCircle size={20} color="#f4f1f1" weight="fill" />,
            //     [
            //       getItem("Xem danh sách tài khoản", "8"),
            //       getItem("Tạo tài khoản", "10"),
            //       getItem("Cập nhật tài khoản", "11"),
            //     ]
            //   ),

            //   {
            //     key: "12",
            //     // icon: <BellRinging size={20} color="#f4f1f1" weight="fill" />,
            //     icon: <GearSix size={20} color="#f5f5f5" weight="fill" />,
            //     label: <FormattedMessage id="admin.manage-gym.setting" />,
            //   },
            //   getItem(
            //     <FormattedMessage id="admin.manage-gym.languages" />,
            //     "sub7",
            //     <Translate size={20} color="#f4f1f1" weight="fill" />,
            //     [
            //       {
            //         label: "Tiếng Việt",
            //         key: "13",
            //         onClick: () => {
            //           dispatch(changeLanguageApp(LANGUAGES.VI));
            //         },
            //       },
            //       {
            //         label: "English",
            //         key: "14",
            //         onClick: () => {
            //           dispatch(changeLanguageApp(LANGUAGES.EN));
            //         },
            //       },
            //     ]
            //   ),
            // ]}
          >
            <Menu.SubMenu
              icon={<Buildings size={20} weight="bold" color="#fff" />}
              // title={<FormattedMessage id="admin.manage-center" />}
              title="Centers"
            >
              <Menu.SubMenu title="Center">
                {center &&
                  center.length > 0 &&
                  center.map((item, index) => {
                    return (
                      <Menu.Item
                        key={index}
                        onClick={() =>
                          handleChangeCenter(item.id, item.CenterName)
                        }
                      >
                        {item.CenterName}
                      </Menu.Item>
                    );
                  })}
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<UserCircle size={20} weight="bold" color="#fff" />}
              title={<FormattedMessage id="admin.manage-account" />}
            >
              <Menu.Item onClick={handleViewListAccount}>
                <FormattedMessage id="admin.manage-account-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={
                <IdentificationBadge size={20} weight="bold" color="#fff" />
              }
              // title="Quản lý Manager of Center"
              title={<FormattedMessage id="admin.manage-manager" />}
            >
              <Menu.Item onClick={handleViewListManager}>
                <FormattedMessage id="admin.manage-manager-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<Planet size={20} weight="bold" color="#fff" />}
              // title="Quản lý Dịch vụ"
              title={<FormattedMessage id="admin.manage-service" />}
            >
              <Menu.Item onClick={handleViewListService}>
                <FormattedMessage id="admin.manage-service-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={
                <AlignCenterHorizontal size={20} weight="bold" color="#fff" />
              }
              // title="Quản lý Center"
              title={<FormattedMessage id="admin.manage-center" />}
            >
              <Menu.Item onClick={handleViewListCenter}>
                <FormattedMessage id="admin.manage-center-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<CalendarCheck size={20} weight="bold" color="#fff" />}
              // title="Quản lý Lịch làm việc"
              title={<FormattedMessage id="admin.manage-schedule" />}
            >
              <Menu.Item onClick={handleViewListSchedule}>
                <FormattedMessage id="admin.manage-schedule-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<ListNumbers size={20} weight="bold" color="#fff" />}
              title={<FormattedMessage id="admin.manage-order" />}
              // title="Quản lý Đơn hàng"
            >
              <Menu.Item onClick={handleViewListOrder}>
                <FormattedMessage id="admin.manage-order-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<Ticket size={20} weight="bold" color="#fff" />}
              // title="Quản lý Khuyến mãi"
              title={<FormattedMessage id="admin.manage-discount" />}
            >
              <Menu.Item onClick={handleViewListDiscount}>
                <FormattedMessage id="admin.manage-discount-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              icon={<Coins size={20} weight="bold" color="#fff" />}
              title={<FormattedMessage id="admin.manage-salary" />}
              // title="Quản lý Mức lương"
            >
              <Menu.Item onClick={handleViewListSalary}>
                <FormattedMessage id="admin.manage-salary-show" />
              </Menu.Item>
            </Menu.SubMenu>
            {/* <Menu.SubMenu
              icon={<Ticket size={20} weight="bold" color="#fff" />}
              title="Quản lý Khuyến mãi"
              // title={<FormattedMessage id="admin.manage-gym.manage-account" />}
            >
              <Menu.Item onClick={handleViewListDiscount}>
                Xem danh sách mức khuyến mãi
              </Menu.Item>
            </Menu.SubMenu> */}
            <Menu.SubMenu
              icon={<Book size={20} weight="bold" color="#fff" />}
              title={<FormattedMessage id="admin.manage-blog" />}
              // title="Quản lý Blog"
            >
              <Menu.Item onClick={handleViewListBlog}>
                <FormattedMessage id="admin.manage-blog-show" />
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              icon={<ClockClockwise size={20} weight="bold" color="#fff" />}
              onClick={handleSettingAccount}
            >
              <FormattedMessage id="admin.account-setting" />
            </Menu.Item>
            <Menu.SubMenu
              icon={<Translate size={20} weight="bold" color="#fff" />}
              title={<FormattedMessage id="admin.manage-languages" />}
            >
              <Menu.Item
                onClick={() => {
                  dispatch(changeLanguageApp(LANGUAGES.VI));
                }}
              >
                Tiếng việt
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  dispatch(changeLanguageApp(LANGUAGES.EN));
                }}
              >
                English
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        )}
        {roleId && roleId === 2 && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            itemIcon={<RightCircleOutlined />}
            items={[
              {
                label: "Center",
                key: "21",
                icon: <MapPinLine size={20} color="#eeeee7" weight="fill" />,
                // onClick: handleChangeCenter,
              },

              {
                key: "12",
                // icon: <BellRinging size={20} color="#f4f1f1" weight="fill" />,
                icon: <GearSix size={20} color="#f5f5f5" weight="fill" />,
                label: <FormattedMessage id="admin.account-setting" />,
              },
              getItem(
                <FormattedMessage id="admin.manage-languages" />,
                "sub7",
                <Translate size={20} color="#f4f1f1" weight="fill" />,
                [
                  {
                    label: "Tiếng Việt",
                    key: "13",
                    onClick: () => {
                      dispatch(changeLanguageApp(LANGUAGES.VI));
                    },
                  },
                  {
                    label: "English",
                    key: "14",
                    onClick: () => {
                      dispatch(changeLanguageApp(LANGUAGES.EN));
                    },
                  },
                ]
              ),
            ]}
          />
        )}
      </Sider>
      <Layout className="sitelayout">
        <Header
          className="sitelayoutbackground"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <span>
            {language === LANGUAGES.VI ? (
              <img
                src={flagVie}
                style={{ width: "40px", height: "40px", borderRadius: "6px" }}
              />
            ) : (
              <img
                src={flagEng}
                style={{ width: "40px", height: "40px", borderRadius: "6px" }}
              />
            )}
          </span>
          <span className="notificationAdmin">
            <Badge style={{ zIndex: "9999" }} count={5} size="default">
              <Dropdown overlay={menuDrop}>
                <BellRinging size={26} color="#ffea00" weight="fill" />
              </Dropdown>
            </Badge>
          </span>
          <span className="infoUser">
            <img
              src={userInfo && userInfo.avatar}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100px",
                paddingRight: "3px",
              }}
            />
            <span>{userInfo && userInfo.fullName}</span> &nbsp;
            <Dropdown overlay={menu} placement={"bottomLeft"} arrow>
              <Button
                style={{ outline: "none", border: "none" }}
                icon={
                  <Gear
                    size={20}
                    color="#c0c0c0"
                    weight="fill"
                    style={{ marginBottom: "8px" }}
                  />
                }
              ></Button>
            </Dropdown>
          </span>
        </Header>
        <Content
          className="sitelayoutbackground"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            maxHeight: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
