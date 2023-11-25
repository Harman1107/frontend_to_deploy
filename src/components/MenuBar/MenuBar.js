import styled from 'styled-components'
import { MenuItem } from './MenuItem'
export const MenuBar = ({mainData, setMainData, sorted, setSorted, data}) => {

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
            <Wrapper>
                <MenuItem label='Contacts' />
                <MenuItem label='Gallery'/>
                <MenuItem label = 'Map'/>
                <MenuItem/>
                <MenuItem data = {data} label='Shortlisted' mainData = {mainData} setMainData={setMainData} sorted={sorted} setSorted={setSorted}/>
                <MenuItem label='Sort'/>
            </Wrapper>
            
        </>
    )
}

const Wrapper = styled.div`
    display:flex;
    padding:5px;
    justify-content:space-between;
    border-bottom:0.1px solid #D0D0D0;
`