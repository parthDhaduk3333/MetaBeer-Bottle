import '../assets/styles/animate.css';
import '../assets/styles/animation.css';
import '../assets/styles/owl.carousel.min.css';
import '../assets/styles/owl.theme.default.min.css';
import '../assets/styles/all.min.css';
import '../assets/styles/bootstrap.min.css';
import '../assets/styles/roadmap.css';
import '../assets/styles/style.css';
import '../assets/styles/media.css';
import { Provider } from 'react-redux';
import store from '../store';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp