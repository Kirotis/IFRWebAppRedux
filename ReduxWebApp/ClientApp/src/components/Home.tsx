import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Hi , App!</h1>
    <h3>Сервис призван ускорить работу между пользователем и работником для скорейшего выполнения описанной задачи с посредником в виде администратора, который обрабатывает заказы пользователя, а также назначает на них подходящих работников.</h3>
  </div>
);

export default connect()(Home);
