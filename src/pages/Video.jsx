import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import VideoDescription from '../components/description/VideoDescription'
import VideoPlayer from '../components/description/VideoPlayer'
import RelatedVideoList from '../components/list/RelatedVideoList'
import Loading from '../components/ui/Loading'
import { fetchVideoInfo } from '../features/video/videoSlice'


export default function Video() {
    const { videoId } = useParams();
    const { video, isLoading, isError, error } = useSelector(state => state.video);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideoInfo(videoId));
    }, [videoId])

    // what will be render
    const { id, link, title, description, date, tags } = video || {};
    let content = null;

    if (isLoading) content = <Loading />;
    if (!isLoading && isError)
        content = <p>{error}</p>;
    if (!isLoading && !isError && !(video?.id))
        content = <p>No video found.</p>;
    if (!isLoading && !isError && video?.id) {
        content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                {/* <!-- video player --> */}
                <VideoPlayer link={link} title={title} />

                {/* <!-- video description --> */}
                <VideoDescription title={title} description={description} date={date} />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideoList currentVideoId={id} tags={tags} />

        </div>
    }

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    )
}
