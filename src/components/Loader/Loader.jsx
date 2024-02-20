import React from 'react';
import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrapper>
  );
};

export default Loader;
