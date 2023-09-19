import React from "react";
import PropTypes from 'prop-types'

export const FirstApp = ({ title ,subTitle,name}) => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

// Le agrega un valor por defecto a mis props
FirstApp.defaultProps = {
  title:'No ahí título',
  subTitle:'No ahí numero de sub título',
  name:'Manuel Walter'
}
