import React from "react";
import { Link } from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
       return (
        <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
                        class="logo-name">Salom-tv</span>
                    </a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Main</li>
                    <li class="dropdown">
                    <Link to="/dashboard" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/user" class="nav-link"><i data-feather="briefcase"></i><span>Users</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/post" class="nav-link"><i data-feather="command"></i><span>Post</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/addmovies" class="nav-link"><i data--="mail"></i><span>Movies</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/subscription" class="nav-link"><i data-feather="copy"></i><span>Subscriptions</span></Link>    
                    </li>
                    <li class="dropdown">
                    <Link to="/notification" class="nav-link"><i data-feather="shopping-bag"></i><span>Notification</span></Link>
                    </li>
                    <li><a class="nav-link" href="blank.html"><i data-feather="file"></i><span>Blank Page</span></a></li>
                    <li class="menu-header">Otika</li>
                    <li class="dropdown">
                    <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="layout"></i><span>Forms</span></a>
                    <ul class="dropdown-menu">
                        <li><a class="nav-link" href="basic-form.html">Basic Form</a></li>
                        <li><a class="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                        <li><a class="nav-link" href="forms-editor.html">Editor</a></li>
                        <li><a class="nav-link" href="forms-validation.html">Validation</a></li>
                        <li><a class="nav-link" href="form-wizard.html">Form Wizard</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                    <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="grid"></i><span>Tables</span></a>
                    <ul class="dropdown-menu">
                        <li><a class="nav-link" href="basic-table.html">Basic Tables</a></li>
                        <li><a class="nav-link" href="advance-table.html">Advanced Table</a></li>
                        <li><a class="nav-link" href="datatables.html">Datatable</a></li>
                        <li><a class="nav-link" href="export-table.html">Export Table</a></li>
                        <li><a class="nav-link" href="editable-table.html">Editable Table</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                    <a href="#" class="menu-toggle nav-link has-dropdown"><i
                        data-feather="pie-chart"></i><span>Charts</span></a>
                    <ul class="dropdown-menu">
                        <li><a class="nav-link" href="chart-amchart.html">amChart</a></li>
                        <li><a class="nav-link" href="chart-apexchart.html">apexchart</a></li>
                        <li><a class="nav-link" href="chart-echart.html">eChart</a></li>
                        <li><a class="nav-link" href="chart-chartjs.html">Chartjs</a></li>
                        <li><a class="nav-link" href="chart-sparkline.html">Sparkline</a></li>
                        <li><a class="nav-link" href="chart-morris.html">Morris</a></li>
                    </ul>
                    </li>
                    
                </ul>
                </aside>
            </div>
       );
    }
}

export default Sidebar;