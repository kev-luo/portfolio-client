import ReactDOM from "react-dom";
import "./index.css";
import WebFont from 'webfontloader';
import ApolloProvider from './utils/ApolloProvider';

WebFont.load({
  google: {
    families: ['Fira Sans:300,400,700', 'sans-serif']
  }
})

ReactDOM.render(
  ApolloProvider,
  document.getElementById("root")
);
