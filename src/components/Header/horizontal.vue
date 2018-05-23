<template>
<!-- BEGIN: Horizontal Menu -->
<div id="m_header_menu" class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
    <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
        <li class="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1"
            aria-haspopup="true">
            <a href="#" class="m-menu__link m-menu__toggle">
                <i class="m-menu__link-icon flaticon-add"></i>
                <span class="m-menu__link-text">
                    Actions
                </span>
                <i class="m-menu__hor-arrow la la-angle-down"></i>
                <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                <ul class="m-menu__subnav">
                    <li class="m-menu__item " aria-haspopup="true">
                        <a href="header/actions.html" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-file"></i>
                            <span class="m-menu__link-text">
                                Create New Post
                            </span>
                        </a>
                    </li>
                    <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                        <a href="#" class="m-menu__link m-menu__toggle">
                            <i class="m-menu__link-icon flaticon-business"></i>
                            <span class="m-menu__link-text">
                                Manage Orders
                            </span>
                            <i class="m-menu__hor-arrow la la-angle-right"></i>
                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                        </a>
                        <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                            <span class="m-menu__arrow "></span>
                            <ul class="m-menu__subnav">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <span class="m-menu__link-text">
                                            Latest Orders
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1"
            aria-haspopup="true">
            <a href="#" class="m-menu__link m-menu__toggle">
                <i class="m-menu__link-icon flaticon-line-graph"></i>
                <span class="m-menu__link-text">
                    Reports
                </span>
                <i class="m-menu__hor-arrow la la-angle-down"></i>
                <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left" style="width:1000px">
                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                <div class="m-menu__subnav">
                    <ul class="m-menu__content">
                        <li class="m-menu__item">
                            <h3 class="m-menu__heading m-menu__toggle">
                                <span class="m-menu__link-text">
                                    Finance Reports
                                </span>
                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                            </h3>
                            <ul class="m-menu__inner">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <i class="m-menu__link-icon flaticon-map"></i>
                                        <span class="m-menu__link-text">
                                            Annual Reports
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="m-menu__item">
                            <h3 class="m-menu__heading m-menu__toggle">
                                <span class="m-menu__link-text">
                                    Project Reports
                                </span>
                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                            </h3>
                            <ul class="m-menu__inner">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <i class="m-menu__link-icon flaticon-map"></i>
                                        <span class="m-menu__link-text">
                                            Annual Reports
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="m-menu__item">
                            <h3 class="m-menu__heading m-menu__toggle">
                                <span class="m-menu__link-text">
                                    HR Reports
                                </span>
                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                            </h3>
                            <ul class="m-menu__inner">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <i class="m-menu__link-icon flaticon-map"></i>
                                        <span class="m-menu__link-text">
                                            Annual Reports
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="m-menu__item">
                            <h3 class="m-menu__heading m-menu__toggle">
                                <span class="m-menu__link-text">
                                    Reporting Apps
                                </span>
                                <i class="m-menu__ver-arrow la la-angle-right"></i>
                            </h3>
                            <ul class="m-menu__inner">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <i class="m-menu__link-icon flaticon-map"></i>
                                        <span class="m-menu__link-text">
                                            Annual Reports
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li class="m-menu__item  m-menu__item--submenu m-menu__item--rel" m-menu-submenu-toggle="click" m-menu-link-redirect="1"
            aria-haspopup="true">
            <a href="#" class="m-menu__link m-menu__toggle">
                <i class="m-menu__link-icon flaticon-paper-plane"></i>
                <span class="m-menu__link-title">
                    <span class="m-menu__link-wrap">
                        <span class="m-menu__link-text">
                            Apps
                        </span>
                        <span class="m-menu__link-badge">
                            <span class="m-badge m-badge--brand m-badge--wide">
                                new
                            </span>
                        </span>
                    </span>
                </span>
                <i class="m-menu__hor-arrow la la-angle-down"></i>
                <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left">
                <span class="m-menu__arrow m-menu__arrow--adjust"></span>
                <ul class="m-menu__subnav">
                    <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                        <a href="header/actions.html" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-business"></i>
                            <span class="m-menu__link-text">
                                eCommerce
                            </span>
                        </a>
                    </li>
                    <li class="m-menu__item  m-menu__item--submenu" m-menu-submenu-toggle="hover" m-menu-link-redirect="1" aria-haspopup="true">
                        <a href="crud/datatable_v1.html" class="m-menu__link m-menu__toggle">
                            <i class="m-menu__link-icon flaticon-computer"></i>
                            <span class="m-menu__link-text">
                                Audience
                            </span>
                            <i class="m-menu__hor-arrow la la-angle-right"></i>
                            <i class="m-menu__ver-arrow la la-angle-right"></i>
                        </a>
                        <div class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--right">
                            <span class="m-menu__arrow "></span>
                            <ul class="m-menu__subnav">
                                <li class="m-menu__item " m-menu-link-redirect="1" aria-haspopup="true">
                                    <a href="header/actions.html" class="m-menu__link ">
                                        <i class="m-menu__link-icon flaticon-users"></i>
                                        <span class="m-menu__link-text">
                                            Active Users
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
<!-- END: Horizontal Menu -->
</template>

<script>
export default {
    name: 'c-horizontal'
}
</script>