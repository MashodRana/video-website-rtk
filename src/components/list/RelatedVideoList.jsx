import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRelatedVideos } from '../../features/realtedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';
import RelatedVideoItem from './RelatedVideoItem'

export default function RelatedVideoList({currentVideoId, tags}) {
    const dispatch = useDispatch();
    const {isLoading, isError, error, relatedVideos} = useSelector(state=>state.relatedVideos);
    useEffect(()=>{
        dispatch(fetchRelatedVideos({currentVideoId, tags}))
    },[dispatch])

    // what will be render
    let content = null;
    if(isLoading) content=<Loading/>
    if(!isLoading && isError) content= <p>{error}</p>
    if(!isLoading && !isError && relatedVideos?.length===0) content=<p>No related videos found.</p>
    if(!isLoading && !isError && relatedVideos?.length>0){
        content=relatedVideos.map(video=><RelatedVideoItem key={video.id} video={video} />)
    }
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}
        </div>
    )
}
