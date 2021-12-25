import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Headers from './components/Headers';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './pages/AboutPage';

import {FeedbackProvider} from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Headers />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats
                  // feedback={feedback}
                  />
                  <FeedbackList
                  // feedback={feedback}
                  />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
