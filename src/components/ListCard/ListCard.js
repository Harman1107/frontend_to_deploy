import styled from "styled-components"
import ReactStars from "react-rating-stars-component";
import { Rating } from "./Rating";
import { Arrow90degRight, ArrowRight, ArrowRightShort, BookmarkHeart, BookmarkHeartFill, ExclamationCircle, EyeSlash, Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios"

export const ListCard = ({details, colorIdx, sorted, mainData, setMainData}) => {
    let bgColor = colorIdx%2 ? "#FFFFFF" : "#FFFCF2";
    const [shortlisted, setShortlisted] = useState(details?.shorlisted);
    const backendURL = "https://backendemptycup-production.up.railway.app"

    const handleClick = async () => {
        details.shortlisted = !details.shortlisted
        axios.put(`${backendURL}/api/v1/users/toggleShortList/${details._id}`);
        setShortlisted(details.shortlisted)
        if(sorted){
            const newFilteredData = []
                mainData.map((data) => {
                    if(data.shortlisted===true){
                        newFilteredData.push(data);
                    }
                })
                setMainData(newFilteredData);
        }
    }

    return (
        <>
            <Wrapper bgcolor={bgColor}>
                <FlexColLeft>
                    <DesignerName>{details.designerName}</DesignerName>
                    <FlexRow><Rating designerRating = {details.designerRating}/></FlexRow>
                    
                    <DesignerDesc>
                    {details.designerDescription}
                    </DesignerDesc>
                    <TagsWrapper>
                        <Tags>
                            <span>{details.projects}</span>
                            <Projects>Projects</Projects>
                        </Tags>
                        <Tags>
                            <span>{details.experience}</span>
                            <Projects>Years</Projects>
                        </Tags>
                        <Tags>
                            <span>$$</span>
                            <Projects>Price</Projects>
                        </Tags>
                    </TagsWrapper>
                    <FlexCol>
                    {details?.contacts.map(contact => {
                            return (
                                <Contacts>{contact}</Contacts>
                            )
                        })}
                    </FlexCol>
                </FlexColLeft>
                <FlexColRight>
                    <FeatureWrapper>
                        <ArrowRightShort size={20} color='#8D4337'/>
                        <FeatureLabel>
                            Details
                        </FeatureLabel>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <EyeSlash size={20} color='#8D4337'/>
                        <FeatureLabel>
                            Hide
                        </FeatureLabel>
                    </FeatureWrapper>
                    <FeatureWrapper onClick={()=> handleClick()}>
                        {details.shortlisted ? <BookmarkHeartFill size={20} color='#8D4337'/> : <BookmarkHeart size={20} color='#8D4337'/>}
                        <FeatureLabel>
                            Shortlist
                        </FeatureLabel>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <ExclamationCircle size={20} color='#8D4337'/>
                        <FeatureLabel>
                            Report
                        </FeatureLabel>
                    </FeatureWrapper>
                </FlexColRight>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display : flex;
    padding:5px;
    flex-direction:row;
    background-color:${props=> props.bgcolor};
`
const TagsWrapper = styled.div`
    display : flex;
    padding:10px 0px;
    flex-direction:row;
`

const FlexRow = styled.div`
    display:flex;
    padding:0px 0px 10px 5px;
`

const FeatureWrapper = styled.div`
    display:flex;   
    align-items:center;
    flex-direction:column;
`

const FeatureLabel = styled.div`
color: #8D4337;
font-family: Chivo;
padding-top:4px;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const FlexCol = styled.div`
    display:flex;
    flex-direction:column;
`

const Contacts = styled.span`
color: #000;
padding:5px;
font-family: Chivo;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const DesignerName = styled.span`
    color: #000;
    padding:0px 0px 0px 5px;
    font-family: Chivo;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

const Projects = styled.span`
color: #000;
font-family: Chivo;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const Tags = styled.div`
    display:flex;
    padding:5px;
    justify-content:space-around;
    flex-direction:column;
    color: #000;
    text-align: center;
    font-family: Chivo;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const DesignerDesc = styled.span`
color: #000;
padding:5px 0px 5px 5px;
font-family: Chivo;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const FlexColLeft = styled.div`
    width:80%;
    margin:15px;
    display:flex;
    align-items:left;
    flex-direction:column;
    padding-right:10px;
    border-right:0.1px solid #D0D0D0;
`
const FlexColRight = styled.div`
    width:20%;
    display:flex;
    padding:20px 10px 20px 0px;
    justify-content:space-between;
    flex-direction:column;
`