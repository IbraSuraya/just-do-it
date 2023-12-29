import React from 'react';
 
function ContactItemImage({ imageUrl, name }) {
 return (
   <div className="contact-item__image">
     <img src={imageUrl} alt={name}/>
   </div>
 );
}
 
export default ContactItemImage;