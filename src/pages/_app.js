import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "../redux/store";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/styles.chunk.css";
import "../../public/assets/css/27fcbbbc.8bceb2f5.chunk.css";
import "../../public/assets/css/_app.12e88414.chunk.css";
import "../../public/assets/css/_app.chunk.css";
import "../../public/assets/css/styles.3225af4a.chunk.css";


import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";

const App = ({ Component, pageProps, reduxStore }) => {
  
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default withReduxStore(App);
