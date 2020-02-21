import "./style/index.scss";
import logoOnBlack from "./assets/logo-WoB.svg";
import logoOnWhite from "./assets/logo-BoW.svg";
import userImage from "./assets/user.jpg";
import "./components/list-link";
import "./components/navigation-link";
import "./components/glyph-icon";

const list = (array, element = "list-link") => {
    const listItem = ({ url = "#", name, ...fields }) => {
        const field = (key, value) => `${value ? `${key}="${value}"` : ""}`;
        const inject = data => Object.keys(data)
            .map(key => field(key, data[key]))
            .join(" ");

        return `
            <li is=${element} url="${url}" ${inject(fields)}>
                ${name}
            </li>
        `;
    };

    return array
        .map(item => listItem(item))
        .join("\n");
};

const navigation = [
    {
        name: "Home",
        icon: "home",
    },
    {
        name: "Employees",
        icon: "user",
        active: true,
    },
    {
        name: "Documents",
        icon: "file",
    },
    {
        name: "Distributions",
        icon: "send",
    },
    {
        name: "Signatures",
        icon: "pencil",
        todo: 12,
    },
    {
        name: "Admin",
        icon: "cog",
    },
];

const tabs = [
    {
        name: "Profile",
        active: true,
    },
    {
        name: "Documents",
    },
    {
        name: "Requests",
    },
];

const currentEmployee = {
    firstName: "Carol",
    lastName: "Jenkins",
    techID: "573920-DX",
    dateOfBirth: new Date("May 28, 1979").toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
    }),
    email: "carol.jenkins@company.com",
    language: "English",
};

const breadcrumbs = [
    {
        name: "Employee",
    },
    // Employee name should be here, but Bootstrap behave differently for breadcrumb and underline link without href
];

const actions = [
    {
        name: "Edit profile",
    },
    {
        name: "Contact employee",
    },
    {
        name: "Delete profile",
    },
];

const fields = {
    firstName: "First name",
    lastName: "Last name",
    techID: "Tech ID",
    dateOfBirth: "Date of birth",
    email: "Contact email",
    language: "Language",
};

const siteMap = [
    {
        name: "Sitemap",
    },
    {
        name: "Support",
    },
    {
        name: "Legal",
    },
];

const html = `
<div class="row">

    <aside class="panel panel-default col-sm-3 col-lg-2">
        <a class="panel-heading" href="#">
            <img src="${logoOnBlack}" alt="Logo" class="logo img-responsive center-block" />
        </a>
        <div class="panel-body">
        <nav class="navbar">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                    <i is="glyph-icon">menu-hamburger</i>
                </button>
            </div>
            <ul class="nav nav-pills nav-stacked collapsed navbar-collapse" id="navigation">
                <li>
                    <a href="#">
                        <img src="${userImage}" alt="User image" class="user-image img-circle" />
                        My account
                    </a>
                </li>
                ${list(navigation, "navigation-link")}
            </ul>
        </nav>
        </div>
    </aside>

    <section class="panel panel-default col-sm-9 col-lg-10">
        <header class="panel-heading">
            <ul class="nav breadcrumb">
                ${list(breadcrumbs)}
                <li class="active">${currentEmployee.firstName} ${currentEmployee.lastName}</li>
            </ul>
            <div class="actions">
                <select class="form-control">
                    ${actions.map(action => `
                        <option>${action.name}</option>
                    `).join("\n")}
                </select>
            </div>
        </header>
        <ul class="nav nav-tabs">
            ${list(tabs)}
        </ul>
        <main class="panel-body">
            ${Object.keys(fields).map(key => `
                <dl>
                    <dt>${fields[key]}</dt>
                    <dd>${currentEmployee[key]}</dd>
                </dl>
            `).join("\n")}
        </main>
        <footer class="panel-footer">
            <span class="copyright">
                @ 2020 PeopleDoc Inc. All Rights Reserved
            </span>
            <div class="pull-right">
                <ul class="nav">
                     ${list(siteMap)}
                </ul>
                <img src="${logoOnWhite}" alt="Logo" />
            </div>
        </footer>
    </section>

</div>
`;

document.body.innerHTML = html;

{
    const navToggle = document.querySelector(".navbar-toggle");
    const target = document.querySelector(navToggle.dataset.target);

    const collapsedClassName = "collapsed";
    target.classList.remove(collapsedClassName);
    const { height } = target.getBoundingClientRect();
    target.style.height = `${height}px`;
    target.classList.add(collapsedClassName);

    navToggle.addEventListener("click", () => {
        target.classList.toggle(collapsedClassName);
    });
}
