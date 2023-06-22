import React from "react";

class NavItem {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }
}

const navigation = [
  new NavItem(1, "Home"),
  new NavItem(2, "About"),
  new NavItem(3, "Services"),
];

const MyNav = () => {
  return (
    <nav>
      {navigation.map((x, k) => (
        <ul key={k}>
          <li>
            <a href="#">{x.item}</a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default MyNav;
