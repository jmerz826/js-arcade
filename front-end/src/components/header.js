import styled from 'styled-components';
import {Link} from 'react-router-dom'

const StyledHeader = styled.header`
    padding: 1.5%;
    background-color: #fffa8f;
    a{
        background-color: #ff7979;
        text-decoration: none;
        color: black;
        padding: 1%;
        border-radius: 9999px;
        border: 2px solid black;
        box-shadow: 6px 5px 10px black;
        transition: transform .2s;
        :hover{
            background-color: #f05050;
            transform: scale(1.1);
        }
        :active{
            border: 2px dashed black;
        }
    }
    nav{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }

`

const Header = (props) => {
    return (
        <StyledHeader>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/reaction-speed'>Reaction Speed</Link>
                <Link to='/prime-numbers'>Prime Numbers</Link>
                <Link to='#'>Leaderboards</Link>
                <Link to='#'>Contact</Link>
            </nav>
        </StyledHeader>
    );
};

export default Header;