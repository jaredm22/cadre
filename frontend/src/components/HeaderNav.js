import { SideNav } from "carbon-components-react";

function HeaderNav() {
  return (
    <div className="App">
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      ></SideNav>
    </div>
  );
}

export default HeaderNav;
