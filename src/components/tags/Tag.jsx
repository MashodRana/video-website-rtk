import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTag, selectTag } from '../../features/filter/filterSlice';

export default function Tag({ tag = {} }) {
    const { id, title } = tag;
    const dispatch = useDispatch();
    const { tags: selectedTags } = useSelector(state => state.filter)
    const isSelected = selectedTags.includes(title) ? true : false;
    const handleOnClick = () => {
        if (isSelected) {
            dispatch(removeTag(title));
        }
        else {
            dispatch(selectTag(title));
        }
    }

    const tagStyleClasses = isSelected
        ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"

    return (

        <div
            className={tagStyleClasses}
            onClick={handleOnClick}
        >
            {title}
        </div>


    )
}
