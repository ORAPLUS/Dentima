<template> 
    <div class="m-grid m-grid--hor m-grid--root m-page">
      <!--Begin: Header-->
        <AppHeader/>
      <!--Fin: Header-->
      <!--Begin: SideBar-->
      <!-- BEGIN::Body -->
      <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
        <!-- BEGIN: Left Aside -->
        <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
            <i class="la la-close"></i>
        </button>
        <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
            <!-- BEGIN: Aside Menu -->
            <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="0"
                m-menu-dropdown-timeout="500">
                <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                    <li class="m-menu__item m-menu__item--active" aria-haspopup="true">
                        <router-link to="/" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-line-graph"></i>
                            <span class="m-menu__link-title">
                                <span class="m-menu__link-wrap">
                                    <span class="m-menu__link-text">
                                        Accueil
                                    </span>
                                </span>
                            </span>
                        </router-link>
                    </li>
                    <li class="m-menu__item m-menu__item" aria-haspopup="true">
                        <router-link to="/patient" class="m-menu__link ">
                            <i class="m-menu__link-icon flaticon-line-graph"></i>
                            <span class="m-menu__link-title">
                                <span class="m-menu__link-wrap">
                                    <span class="m-menu__link-text">
                                        Patient
                                    </span>
                                </span>
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- END: Aside Menu -->
        </div>
        <!-- END: Left Aside -->
        <!-- Begin: Body -->
        <router-view></router-view>
        <!-- End: Body -->
      </div>
      <!-- END:: Body -->
      <!--Fin: SideBar-->
      <!--Begin: Footer-->
        <AppFooter/>
      <!--Fin: Footer-->
    </div>
</template>
<script>
import { Header as AppHeader,  Footer as AppFooter} from '../components/'
export default {
  name: 'Master',
  components: {
    AppHeader,
    AppFooter
  } 
}
</script>