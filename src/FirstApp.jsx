import React from "react";
import PropTypes from 'prop-types'

const mensage = () => "Hola Mundo React";

export const FirstApp = ({ title ,subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{mensage()}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtítulo</p>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

// Le agrega un valor por defecto a mis props
FirstApp.defaultProps = {
  title:'No ahí título',
  subTitle:'No ahí numero de sub título',
  name:'Manuel Walter'
}
