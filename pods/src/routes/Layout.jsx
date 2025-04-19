import { Outlet, Link } from 'react-router-dom';
import './Layout.css'; // Assuming you have a CSS file for styling

const Layout = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
        <ul>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/create">Create Pod</Link>
          </li>
          <li style={{ display: 'inline' }}>
            <Link to="/pods">View Pods</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div style={{ padding: '20px' }}>
        <Outlet /> {/* Page-specific content will be rendered here */}
      </div>
      <footer style={{ marginTop: '20px', textAlign: 'center', padding: '10px', backgroundColor: '#ccc' }}>
        {/* Optional footer content */}
        <p>&copy; 2025 Nier Pod Customizer</p>
      </footer>
    </div>
  );
};

export default Layout;