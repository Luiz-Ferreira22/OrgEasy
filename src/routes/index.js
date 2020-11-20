import React from 'react';
import {useSelector} from 'react-redux';

import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes'
import ProviderRoutes from './provider.routes';

const Routes = () => {

  const { signed, provider } = useSelector((state) => state.auth);

  if(!signed) {
    return <AuthRoutes />;
  }

  return signed && provider ? <ProviderRoutes /> : <UserRoutes />;
}

export default Routes;
