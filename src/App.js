import image from './photo.avif';
import Home from "./pages/Home";

function App() {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div style={styles}>
      <Home />
    </div>
  );
}

export default App;
