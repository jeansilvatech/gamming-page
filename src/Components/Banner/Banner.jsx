import React from "react";
import * as J from './styles'
export const Banner = (props)=>{
    // const bgBanner = {
    //     backgroundImage: `url(${props.banner})`
    // }
    return(
        <J.BannerBg >
            <J.ContentGame>
                <J.NameGame>League of Legends</J.NameGame>
                <J.TagGroup>
                    <J.Tag>rpg</J.Tag>
                    <J.Tag>moba</J.Tag>
                    <J.Tag>ação</J.Tag>
                </J.TagGroup>
            </J.ContentGame>
        </J.BannerBg>
    )
}