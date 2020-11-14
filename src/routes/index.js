import React from 'react';
import {useSelector} from 'react-redux';

import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes'

const Routes = () => {

  const {signed} = useSelector((state) => state.auth.signed);

  return signed ? <AuthRoutes /> : <UserRoutes />;

}

export default Routes;
