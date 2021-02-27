import { 
    Header, 
    HeaderName, 
    SideNav,
} from 'carbon-components-react';

function HeaderNav() {

    return (
        <div className="App">
            <Header aria-label="Cadre home">
            <HeaderName href="#" prefix="Cadre">[hello]</HeaderName>
            <SideNav isFixedNav
            expanded={false}
            isChildOfHeader={true}>
            </SideNav>

            </Header>
            
            
        </div>
    );
}

export default HeaderNav;