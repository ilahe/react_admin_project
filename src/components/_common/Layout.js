import React, {useEffect, useState} from "react";
import {Layout, Menu} from 'antd';
import Breadcrumb from "./Breadcrumb";
import HeaderC from "./Header";
import FooterC from "./Footer";
import SidebarC from "./Sidebar";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {clearMessage} from "../../redux/actions/messages";
import {useDispatch, useSelector} from "react-redux";
import routesMy from "../../helpers/routes"

const {Content} = Layout;

function LayoutC({children}) {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const [authPage, setAuthPage] = useState(0);
    const [indexPage, setIndexPage] = useState(0);

    useEffect(() => {
        if (window.location.pathname === "/login") {
            setAuthPage(1);
        } else if (window.location.pathname === "/horoscope") {
            setIndexPage(1);
        } else {
            setAuthPage(0);
            setIndexPage(0);
        }
    }, []);

    return (
        <div>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Router>
                    {(authPage == 1) ? <></> : <SidebarC routesMy={routesMy}/>}
                    <Layout className="site-layout">
                        <HeaderC user={currentUser}/>
                        <Content className="layout-content">
                            <Breadcrumb routesMy={routesMy}/>

                            <div className="site-layout-background main-layout layout-transparent">
                                <Routes>
                                    {routesMy.map((route, index) => (
                                        // Render more <Route>s with the same paths as
                                        // above, but different components this time.
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    ))}
                                </Routes>
                            </div>

                            {/*{*/}
                            {/*    (indexPage == 1) ?*/}
                            {/*        <div className="site-layout-background main-layout layout-transparent">*/}
                            {/*            <Routes>*/}
                            {/*                {routesMy.map((route, index) => (*/}
                            {/*                    // Render more <Route>s with the same paths as*/}
                            {/*                    // above, but different components this time.*/}
                            {/*                    <Route*/}
                            {/*                        key={index}*/}
                            {/*                        path={route.path}*/}
                            {/*                        element={route.element}*/}
                            {/*                    />*/}
                            {/*                ))}*/}
                            {/*            </Routes>*/}
                            {/*        </div>*/}
                            {/*    :*/}
                            {/*  */}
                            {/*}*/}


                        </Content>
                        <FooterC/>
                    </Layout>
                </Router>
            </Layout>
        </div>
    )
}

export default LayoutC;