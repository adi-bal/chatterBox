import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt = "hospital" width="30" /> 
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon2__inner'>
                <img src={LogoutIcon} alt = "Log out" width="30" /> 
            </div>
        </div>
    </div>
)

const ChatHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>Chatterbox</p>
    </div>
)
const ChannelListContainer = () => {
  return (
    <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <ChatHeader/>
            <ChannelSearch/>
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps) =>(
                    <TeamChannelPreview
                        {...previewProps}
                        type="team"
                    />
                )}
            />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type="Messaging"
                    />
                )}
                Preview={(previewProps) =>(
                    <TeamChannelPreview
                        {...previewProps}
                        type="Messaging"
                    />
                )}
            />
            
        </div>
    </>
  )
}

export default ChannelListContainer