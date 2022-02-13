import PropTypes from "prop-types";
// import { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from './ImageGallery.module.css'

export default function ImageGallery({newFetch}) {
    return (
      <SRLWrapper >
        <ul className={s["ImageGallery"]}>
            {newFetch.map(({ webformatURL,id, tags }) => (
              <ImageGalleryItem webformatURL={webformatURL} key={id} tags={tags} />
            ))}
        </ul>
      </SRLWrapper> 
    );

  
 };
 
 ImageGallery.propTypes = {
   newFetch: PropTypes.array,
 };

  