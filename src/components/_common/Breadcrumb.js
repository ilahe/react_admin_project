import React from "react";
import {Breadcrumb} from "antd";

function BreadcrumbC({routesMy}) {

    // console.log("in breadcrumb", routesMy, window.location.pathname)
    return(
        <Breadcrumb className="breadcrumb_container">
            <Breadcrumb.Item>Ana səhifə</Breadcrumb.Item>
            <Breadcrumb.Item>Xəbərlər</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbC;