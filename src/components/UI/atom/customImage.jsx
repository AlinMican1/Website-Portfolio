import React from 'react';
import './button.css';
import PropTypes, { any } from 'prop-types';


export const CustomImage = ({image}) => {
  return ( <div className ="wrapper">
                <div className="container">
                    <div className="box">
                        <div className="spin-container">
                            <div className="shape">
                                <div className="bd"></div>
                                    <img src={image} />
                </div>
            </div>
        </div>
    </div>
</div>)
};

CustomImage.propTypes = {
  image: PropTypes.string,
};

CustomImage.defaultProps = {
  image: null,
};


export default CustomImage;