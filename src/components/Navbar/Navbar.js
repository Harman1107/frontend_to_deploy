import styled from 'styled-components'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import logo from './logo_company.svg'
export const Navbar = () => {
    return (
        <>
        <OuterNavbar>
            <Logo src={logo}></Logo>
            <CompanyName>EmptyCup</CompanyName>
            <Options>
                <ThreeDotsVertical size={25}/>
            </Options>
            
        </OuterNavbar>
        </>
    )
}

const Logo = styled.img`
    padding:10px 0px 10px 10px;
`
const Options = styled.div`
    padding:10px 10px 10px 0;
`
const CompanyName = styled.div`
color: #716966;
font-family: Chivo;
padding:10px;
font-size: 24px;
font-style: normal;
font-weight: 1000;
line-height: normal;
`
const OuterNavbar = styled.div`
    padding:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:0.1px solid #D0D0D0;
`