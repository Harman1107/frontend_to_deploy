import { ClipboardHeart, ListTask, Image, SortDownAlt, GeoAltFill, BookmarkHeartFill, BookmarkHeart, CardList, ClipboardHeartFill } from 'react-bootstrap-icons'
import styled from 'styled-components'

export const MenuItem = ({label, icon, mainData, setMainData, sorted, setSorted, data}) => {

    const handleFilter = (label,) => {
        
        const newFilteredData = []
        if(label==="Shortlisted"){
            setSorted(!sorted);
            if(sorted===false){
                mainData.map((data) => {
                    if(data.shortlisted===true){
                        newFilteredData.push(data);
                    }
                })
                setMainData(newFilteredData);
            }
            else{
                setMainData(data);
            }
        }
        console.log(newFilteredData);  
    }

    return (
        <>
            <Wrapper onClick = {() => {
                handleFilter(label, sorted)
            }}>
                <MenuIcon>
                    {label==='Contacts'? <CardList size={20} color='#E0A64E' /> : label==='Gallery' ? <Image size={20}/> : label==='Sort' ?
                    <SortDownAlt size={20}/> : label==='Shortlisted' ? (sorted ? <ClipboardHeartFill size={20}/> : <ClipboardHeart size={20}/>) : label==='Map' ? <GeoAltFill size={20} color='#D7D7D7'/> : null}
                </MenuIcon>
                <MenuLabel>
                    {label==='Map' ?<Map>Map</Map> : label == "Contacts" ? <Contact>Contacts</Contact>  :label}
                </MenuLabel>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    flex-direction:column;
`

const Map = styled.span`
    color:#D7D7D7;
`

const Contact = styled.span`
    color:#E0A64E;
`

const MenuIcon = styled.div`

`

const MenuLabel = styled.div`
// color: #E0A64E;
font-family: Chivo;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
`