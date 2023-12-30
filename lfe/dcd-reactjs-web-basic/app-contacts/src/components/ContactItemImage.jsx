import React from 'react';
import PropTypes from 'prop-types';
 
function ContactItemImage({ imageUrl, name }) {
 return (
   <div className="contact-item__image">
     <img src={imageUrl} alt={name}/>
   </div>
 );
}

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
 
export default ContactItemImage;