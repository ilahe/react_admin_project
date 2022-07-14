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
        name: "Qeydiyyatdan keç",
        breadcrumb:"",
        icon: <DashboardFilled/>,
        display: "none",
        element: <Register/>
    },
    {
        path: "/",
        name: "Əsas səhifə",
        breadcrumb:"",
        icon: <DashboardFilled/>,
        display: "block",
        element: <Main/>
    },
    {
        path: "/users",
        name: "İstifadəçilər",
        breadcrumb:"İstifadəçilər",
        icon: <UserOutlined/>,
        display: "block",
        element: <Users/>
    },
    {
        path: "/users/create",
        name: "İstifadəçiləri yarat",
        breadcrumb: "İstifadəçiləri yarat",
        icon: "",
        display: "none",
        element: <AddUser/>
    },
    // {
    //     path: "/users/:id",
    //     name: "İstifadəçiləri redaktə et",
    //     breadcrumb: "İstifadəçiləri redaktə et",
    //     icon: "",
    //     display: "none",
    //     element: <UserCrud/>
    // },
    {
        path: "/authors",
        name: "Müəlliflər",
        breadcrumb: "Müəlliflər",
        icon: <UserSwitchOutlined/>,
        display: "block",
        element: <Authors/>
    },
    {
        path: "/authors/create",
        name: "Müəllifləri yarat",
        breadcrumb: "Müəllifləri yarat",
        icon: "",
        display: "none",
        element: <AddAuthor/>
    },
    {
        path: "/authors/:id",
        name: "Müəllifləri redaktə et",
        breadcrumb: "Müəllifləri redaktə et",
        icon: "",
        display: "none",
        element: <EditAuthor/>
    },
    {
        path: "/category-links",
        name: "Kateqoriya linkləri",
        breadcrumb: "Kateqoriya linkləri",
        icon: <BranchesOutlined />,
        display: "block",
        element: <CategoryLinks/>
    },
    {
        path: "/category-links/create",
        name: "Kateqoriya linkləri yarat",
        breadcrumb: "Kateqoriya linkləri yarat",
        icon: <BranchesOutlined />,
        display: "none",
        element: <AddCategoryLinks/>
    },
    {
        path: "/category-links/:id",
        name: "Kateqoriya linkləri redaktə et",
        breadcrumb: "Kateqoriya linkləri redaktə et",
        icon: <BranchesOutlined />,
        display: "none",
        element: <EditCategoryLinks/>
    },
    {
        path: "/categories",
        name: "Bölmələr",
        breadcrumb: "Bölmələr",
        icon: <ApartmentOutlined />,
        display: "block",
        element: <Categories/>
    },
    {
        path: "/categories/create",
        name: "Bölmələri yarat",
        breadcrumb: "Bölmələri yarat",
        icon: "",
        display: "none",
        element: <AddCategories/>
    },
    {
        path: "/categories/:id",
        name: "Bölmələri redaktə et",
        breadcrumb: "Bölmələri redaktə et",
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
        name: "Xəbərlər",
        breadcrumb: "Bütün xəbərlər",
        icon: <FileDoneOutlined />,
        display: "block",
        element: <News/>
    },
    {
        path: "/news",
        name: "Xəbərlər",
        breadcrumb: "Bütün xəbərlər",
        icon: <FileDoneOutlined />,
        display: "none",
        element: <NewsList/>
    },
    {
        path: "/contacts",
        name: "Bizə yazanlar",
        breadcrumb: "Bizə yazanlar",
        icon: <MessageOutlined />,
        display: "block",
        element: <Contacts/>
    },
    {
        path: "/contacts/:id",
        name: "Bizə yazanların mesajını ətraflı oxu",
        breadcrumb: "Bizə yazanların mesajını ətraflı oxu",
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
        name: "Bürclər",
        breadcrumb: "Bürclər",
        icon: <GlobalOutlined />,
        display: "block",
        element: <Horoscope/>
    },
    {
        path: "/horoscope",
        name: "Bürclər",
        breadcrumb: "Bürclər",
        icon: "",
        display: "none",
        element: <HoroscopeList/>
    },
    {
        path: "/horoscope/create",
        name: "Gələn bürcləri yarat",
        breadcrumb: "Gələn bürcləri yarat",
        icon: "",
        display: "none",
        element: <AddHoroscope/>
    },
    {
        path: "/horoscope/:id",
        name: "Gələn bürcləri redaktə et",
        breadcrumb: "Gələn bürcləri redaktə et",
        icon: "",
        display: "none",
        element: <EditHoroscope/>
    },
    {
        path: "/horoscope-love",
        name: "Sevgi bürcləri",
        breadcrumb: "Sevgi bürcləri",
        icon: "",
        display: "none",
        element: <HoroscopeLove/>
    },
    {
        path: "/horoscope-love/:id",
        name: "Sevgi bürcləri redaktə et",
        breadcrumb: "Sevgi bürcləri redaktə et",
        icon: "",
        display: "none",
        element: <EditHoroscopeLove/>
    },
    {
        path: "/horoscope-properties",
        name: "Uyğun bürclər",
        breadcrumb: "Uyğun bürclər",
        icon: "",
        display: "none",
        element: <HoroscopeProperty/>
    },
    {
        path: "/horoscope-properties/create",
        name: "Uyğun bürclər əlavə et",
        breadcrumb: "Uyğun bürclər əlavə et",
        icon: "",
        display: "none",
        element: <AddHoroscopeProperty/>
    },
    {
        path: "/horoscope-properties/:id",
        name: "Uyğun bürcləri redaktə et",
        breadcrumb: "Uyğun bürcləri redaktə et",
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
        name: "SEO Xəbərlər",
        breadcrumb: "SEO Xəbərlər",
        icon: <AimOutlined />,
        display: "none",
        element: <SeoNews/>
    },
    {
        path: "/seo-news/:id",
        name: "SEO Xəbərləri redaktə et",
        breadcrumb: "SEO Xəbərləri redaktə et",
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
        name: "SEO Sitemap redaktə et",
        breadcrumb: "SEO Sitemap redaktə et",
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
        name: "Musiqilər",
        breadcrumb: "Musiqilər",
        icon: <PlayCircleOutlined />,
        display: "block",
        element: <MainMusic/>
    },
    {
        path: "/mp3/:id",
        name: "Musiqi redaktə et",
        breadcrumb: "Musiqi redaktə et",
        icon: <PlayCircleOutlined />,
        display: "none",
        element: <EditMp3/>
    },
    {
        path: "/all-mp3",
        name: "Bütün musiqilər",
        breadcrumb: "Bütün musiqilər",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/coming-mp3",
        name: "Gələn musiqilər",
        breadcrumb: "Gələn musiqilər",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/deleted-mp3",
        name: "Silinən musiqilər",
        breadcrumb: "Silinən musiqilər",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3/>
    },
    {
        path: "/mp3-users-all",
        name: "MP3 İstifadəçilər",
        breadcrumb: "MP3 İstifadəçilər",
        icon: <UsergroupAddOutlined />,
        display: "block",
        element: <MainMp3Users/>
    },
    {
        path: "/mp3-users",
        name: "MP3 İstifadəçilər",
        breadcrumb: "MP3 İstifadəçilər",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3users/>
    },
    {
        path: "/blocked-users",
        name: "Blok olunan İstifadəçilər",
        breadcrumb: "Blok olunan İstifadəçilər",
        icon: <GlobalOutlined />,
        display: "none",
        element: <Mp3users/>
    },


];

export default routesMy;

