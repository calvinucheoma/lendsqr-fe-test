import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Navigate
} from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import {
  Users,
  Guarantors,
  Loans,
  Savings,
  DecisionModels,
} from './components/DashboardRoutes';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Users />} />
            <Route path="guarantors" element={<Guarantors />} />
            <Route path="loans" element={<Loans />} />
            <Route path="savings" element={<Savings />} />
            <Route path="decision-models" element={<DecisionModels />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
