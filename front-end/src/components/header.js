import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledHeader = styled.header`

`

const Header = (props) => {
    return (
        <StyledHeader>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/reaction-speed'>Reaction Speed</Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;