import React from "react";
import {
    FileDoneOutlined,
    GlobalOutlined,
    HistoryOutlined,
    MessageOutlined,
    DashboardFilled,
    UserOutlined,
    UserSwitchOutlined,
    ApartmentOutlined,
    VideoCameraOutlined,
    AreaChartOutlined,
    AimOutlined,
    BranchesOutlined,
    PlayCircleOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Main from "../components/main";
import Users from "../components/users";
import Authors from "../components/authors";
import News from "../components/news";
import Contacts from "../components/contacts";
import Logs from "../components/logs";
import Horoscope from "../components/horoscope";
import Categories from "../components/categories";
import Mp3 from "../components/mp3/Musics";
import HoroscopeList from "../components/horoscope/Horoscope";
import NewsList from "../components/news/News";
import HoroscopeLove from "../components/horoscope/HoroscopeLove";
import HoroscopeProperty from "../components/horoscope/HoroscopeProperty";
import MainMusic from "../components/mp3";
import CategoryLinks from "../components/categorylinks";
import MainMp3Users from "../components/mp3users";
import Mp3users from "../components/mp3users/Mp3Users";
import Statistics from "../components/statistics";
import Videos from "../components/videos";
import Seo from "../components/seo";
import SeoNews from "../components/seo/SeoNews";
import SeoSitemap from "../components/seo/SeoSitemap";
import SeoGoogleIndex from "../components/seo/SeoGoogleIndex";
import ContactsCrud from "../components/contacts/crud";
import AddHoroscope from "../components/horoscope/crud/AddHoroscope";
import EditHoroscope from "../components/horoscope/crud/EditHoroscope";
import AddCategories from "../components/categories/crud/Add";
import EditCategories from "../components/categories/crud/Edit";
import EditSeoNews from "../components/seo/crud/EditSeoNews";
import EditSeoSitemap from "../components/seo/crud/EditSeoSitemap";
import AddCategoryLinks from "../components/categorylinks/crud/Add";
import EditCategoryLinks from "../components/categorylinks/crud/Edit";
import EditMp3 from "../components/mp3/crud/Edit";
import EditHoroscopeLove from "../components/horoscope/crud/EditHoroscopeLove";
import AddHoroscopeProperty from "../components/horoscope/crud/AddHoroscopeProperty";
import EditHoroscopeProperty from "../components/horoscope/crud/EditHoroscopeProperty";
import AddVideo from "../components/videos/crud/Add";
import AddAuthor from "../components/authors/crud/Add";
import EditAuthor from "../components/authors/crud/Edit";
import AddRole from "../components/role/crud/Add";
import AddUser from "../components/users/crud/Add";

const routesMy = [
    {
        path: "/login",
        name: "Daxil ol",
        breadcrumb:"",
        icon: <DashboardFilled/>,
        display: "none",
        element: <Login/>
    },
    {
        path: "/register",
        name: "Qeydiyyatdan ke??",
        breadcrumb:"",
        icon: <DashboardFilled/>,
        display: "none",
        element: <Register/>
    },
    {
        path: "/",
        name: "??sas s??hif??",
        breadcrumb:"",
        icon: <DashboardFilled/>,
        display: "block",
        element: <Main/>
    },
    {
        path: "/users",
        name: "??stifad????il??r",
        breadcrumb:"??stifad????il??r",
        icon: <UserOutlined/>,
        display: "block",
        element: <Users/>
    },
    {
        path: "/users/create",
        name: "??stifad????il??ri yarat",
        breadcrumb: "??stifad????il??ri yarat",
        icon: "",
        display: "none",
        element: <AddUser/>
    },
    // {
    //     path: "/users/:id",
    //     name: "??stifad????il??ri redakt?? et",
    //     breadcrumb: "??stifad????il??ri redakt?? et",
    //     icon: "",
    //     display: "none",
    //     element: <UserCrud/>
    // },
    {
        path: "/authors",
        name: "M????llifl??r",
        breadcrumb: "M????llifl??r",
        icon: <UserSwitchOutlined/>,
        display: "block",
        element: <Authors/>
    },
    {
        path: "/authors/create",
        name: "M????llifl??ri yarat",
        breadcrumb: "M????llifl??ri yarat",
        icon: "",
        display: "none",
        element: <AddAuthor/>
    },
    {
        path: "/authors/:id",
        name: "M????llifl??ri redakt?? et",
        breadcrumb: "M????llifl??ri redakt?? et",
        icon: "",
        display: "none",
        element: <EditAuthor/>
    },
    {
        path: "/category-links",
        name: "Kateqoriya linkl??ri",
        breadcrumb: "Kateqoriya linkl??ri",
        icon: <BranchesOutlined />,
        display: "block",
        element: <CategoryLinks/>
    },
    {
        path: "/category-links/create",
        name: "Kateqoriya linkl??ri yarat",
        breadcrumb: "Kateqoriya linkl??ri yarat",
        icon: <BranchesOutlined />,
        display: "none",
        element: <AddCategoryLinks/>
    },
    {
        path: "/category-links/:id",
        name: "Kateqoriya linkl??ri redakt?? et",
        breadcrumb: "Kateqoriya linkl??ri redakt?? et",
        icon: <BranchesOutlined />,
        display: "none",
        element: <EditCategoryLinks/>
    },
    {
        path: "/categories",
        name: "B??lm??l??r",
        breadcrumb: "B??lm??l??r",
        icon: <ApartmentOutlined />,
        display: "block",
        element: <Categories/>
    },
    {
        path: "/categories/create",
        name: "B??lm??l??ri yarat",
        breadcrumb: "B??lm??l??ri yarat",
        icon: "",
        display: "none",
        element: <AddCategories/>
    },
    {
        path: "/categories/:id",
        name: "B??lm??l??ri redakt?? et",
        breadcrumb: "B??lm??l??ri redakt?? et",
        icon: "",
        display: "none",
        element: <EditCategories/>
    },
    {
        path: "/roles/create",
        name: "Role yarat",
        breadcrumb: "Role yarat",
        icon: "",
        display: "none",
        element: <AddRole/>
    },
    {
        path: "/news/main",
        name: "X??b??rl??r",
        breadcrumb: "B??t??n x??b??rl??r",
        icon: <FileDoneOutlined />,
        display: "block",
        element: <News/>
    },
    {
        path: "/news",
        name: "X??b??rl??r",
        breadcrumb: "B??t??n x??b??rl??r",
        icon: <FileDoneOutlined />,
        display: "none",
        element: <NewsList/>
    },
    {
        path: "/contacts",
        name: "Biz?? yazanlar",
        breadcrumb: "Biz?? yazanlar",
        icon: <MessageOutlined />,
        display: "block",
        element: <Contacts/>
    },
    {
        path: "/contacts/:id",
        name: "Biz?? yazanlar??n mesaj??n?? ??trafl?? oxu",
        breadcrumb: "Biz?? yazanlar??n mesaj??n?? ??trafl?? oxu",
        icon: "",
        display: "none",
        element: <ContactsCrud/>
    },
    {
        path: "/logs",
        name: "Loqlar",
        breadcrumb: "Loqlar",
        icon: <HistoryOutlined />,
        display: "block",
        element: <Logs/>
    },
    {
        path: "/horoscope/main",
        name: "B??rcl??r",
        breadcrumb: "B??rcl??r",
        icon: <GlobalOutlined />,
        display: "block",
        element: <Horoscope/>
    },
    {
        path: "/horoscope",
        name: "B??rcl??r",
        breadcrumb: "B??rcl??r",
        icon: "",
        display: "none",
        element: <HoroscopeList/>
    },
    {
        path: "/horoscope/create",
        name: "G??l??n b??rcl??ri yarat",
        breadcrumb: "G??l??n b??rcl??ri yarat",
        icon: "",
        display: "none",
        element: <AddHoroscope/>
    },
    {
        path: "/horoscope/:id",
        name: "G??l??n b??rcl??ri redakt?? et",
        breadcrumb: "G??l??n b??rcl??ri redakt?? et",
        icon: "",
        display: "none",
        element: <EditHoroscope/>
    },
    {
        path: "/horoscope-love",
        name: "Sevgi b??rcl??ri",
        breadcrumb: "Sevgi b??rcl??ri",
        icon: "",
        display: "none",
        element: <HoroscopeLove/>
    },
    {
        path: "/horoscope-love/:id",
        name: "Sevgi b??rcl??ri redakt?? et",
        breadcrumb: "Sevgi b??rcl??ri redakt?? et",
        icon: "",
        display: "none",
        element: <EditHoroscopeLove/>
    },
    {
        path: "/horoscope-properties",
        name: "Uy??un b??rcl??r",
        breadcrumb: "Uy??un b??rcl??r",
        icon: "",
        display: "none",
        element: <HoroscopeProperty/>
    },
    {
        path: "/horoscope-properties/create",
        name: "Uy??un b??rcl??r ??lav?? et",
        breadcrumb: "Uy??un b??rcl??r ??lav?? et",
        icon: "",
        display: "none",
        element: <AddHoroscopeProperty/>
    },
    {
        path: "/horoscope-properties/:id",
        name: "Uy??un b??rcl??ri redakt?? et",
        breadcrumb: "Uy??un b??rcl??ri redakt?? et",
        icon: "",
        display: "none",
        element: <EditHoroscopeProperty/>
    },
    {
        path: "/videos",
        name: "Video",
        breadcrumb: "Video",
        icon: <VideoCameraOutlined />,
        display: "block",
        element: <Videos/>
    },
    {
        path: "/videos/create",
        name: "Video yarat",
        breadcrumb: "Video yarat",
        icon: <VideoCameraOutlined />,
        display: "none",
        element: <AddVideo/>
    },
    {
        path: "/seo",
        name: "SEO",
        breadcrumb: "SEO",
        icon: <AimOutlined />,
        display: "block",
        element: <Seo/>
    },
    {
        path: "/seo-news",
        name: "SEO X??b??rl??r",
        breadcrumb: "SEO X??b??rl??r",
        icon: <AimOutlined />,
        display: "none",
        element: <SeoNews/>
    },
    {
        path: "/seo-news/:id",
        name: "SEO X??b??rl??ri redakt?? et",
        breadcrumb: "SEO X??b??rl??ri redakt?? et",
        icon: <AimOutlined />,
        display: "none",
        element: <EditSeoNews/>
    },
    {
        path: "/seo-sitemap",
        name: "SEO Sitemap",
        breadcrumb: "SEO Sitemap",
        icon: <AimOutlined />,
        display: "none",
        element: <SeoSitemap/>
    },
    {
        path: "/seo-sitemap/:id",
        name: "SEO Sitemap redakt?? et",
        breadcrumb: "SEO Sitemap redakt?? et",
        icon: <AimOutlined />,
        display: "none",
        element: <EditSeoSitemap/>
    },
    {
        path: "/seo-google",
        name: "SEO Google Index",
        breadcrumb: "SEO Google Index",
        icon: <AimOutlined />,
        display: "none",
        element: <SeoGoogleIndex/>
    },
    {
        path: "/statistics",
        name: "Statistika",
        breadcrumb: "Statistika",
        icon: <AreaChartOutlined />,
        display: "block",
        element: <Statistics/>
    },
    {
        path: "/mp3",
        name: "Musiqil??r",
        breadcrumb: "Musiqil??r",
        icon: <PlayCircleOutlined />,
        display: "block",
        element: <MainMusic/>
    },
    {
        path: "/mp3/:id",
        name: "Musiqi redakt?? et",
        breadcrumb: "Musiqi redakt?? et",
        icon: <PlayCircleOutlined />,
        display: "none",
        element: <EditMp3/>
    },
    {
        path: "/all-mp3",
        name: "B??t??n musiqil??r",
        breadcrumb: "B??t??n musiqil??r",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/coming-mp3",
        name: "G??l??n musiqil??r",
        breadcrumb: "G??l??n musiqil??r",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/deleted-mp3",
        name: "Silin??n musiqil??r",
        breadcrumb: "Silin??n musiqil??r",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/mp3-users-all",
        name: "MP3 ??stifad????il??r",
        breadcrumb: "MP3 ??stifad????il??r",
        icon: <UsergroupAddOutlined />,
        display: "block",
        element: <MainMp3Users/>
    },
    {
        path: "/mp3-users",
        name: "MP3 ??stifad????il??r",
        breadcrumb: "MP3 ??stifad????il??r",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3users/>
    },
    {
        path: "/blocked-users",
        name: "Blok olunan ??stifad????il??r",
        breadcrumb: "Blok olunan ??stifad????il??r",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3users/>
    },


];

export default routesMy;

