// Neccesary Imports 
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Components Importing
import { Navbar , Feed , VideoDetail , SearchFeed , ChannelDetail } from './components'

// Main App Development
const App = () =>  (
    <BrowserRouter>
      <Box sx={{ backgroundColor : '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />}/>
          <Route path="/video/:id" element={<VideoDetail />}/>
          <Route path="/search/:searchTerm" element={<SearchFeed />}/>
          <Route path="/channel/:id" element={<ChannelDetail />}/>
        </Routes>
      </Box>
    </BrowserRouter>
);

export default App