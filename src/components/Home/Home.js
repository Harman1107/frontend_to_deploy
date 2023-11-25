import { useEffect, useState } from 'react';
import { ListCard } from '../ListCard/ListCard';
import { MenuBar } from '../MenuBar/MenuBar';
import styled from 'styled-components';

export const Home = ({data}) => {

    const [mainData, setMainData] = useState();
    const [sorted, setSorted] = useState(false);
    useEffect(() => {
        setMainData(data);
    },[data])

    return (
        <div>
            <MenuBar data = {data} mainData = {mainData} setMainData={setMainData} sorted={sorted} setSorted={setSorted}/>
            {mainData?.length!==0 ? mainData?.map((details, idx) => {
                return (
                <ListCard mainData={mainData} setMainData={setMainData} key = {idx} details={details} colorIdx = {idx} sorted = {sorted}/>
                )
            }) : <NoResultWrapper>No Results</NoResultWrapper>}
        </div>
    )
}

const NoResultWrapper = styled.div`
color: #000;
display:flex;
align-items:center;
justify-content:center;
padding:15px;
font-family: Chivo;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`