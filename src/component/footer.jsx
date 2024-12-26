import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-5 mt-30">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Sea in Thailand.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <Link to="/about" className="text-cyan-200 hover:text-cyan-400">History</Link>
          <Link to="/contact" className="text-cyan-200 hover:text-cyan-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
