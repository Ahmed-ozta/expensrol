import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx'
import FormSignUp from './Component/FormSignUp.jsx';
import FormSignIn from './Component/FormSignIn.jsx';
import Dashboard from '/src/Dashboard/Dashboard.jsx'
import AddIncome from '/src/Dashboard/AddIncome.jsx'
import AddExpense from '/src/Dashboard/AddExpense.jsx'
import FilterExpense from './Dashboard/FilterExpense.jsx';
import FilterIncome from './Dashboard/FilterIncome.jsx';
import Settings from './Dashboard/Settings.jsx';
import Support from './Dashboard/Support.jsx';
import Inbox from './Dashboard/Inbox.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FormSignUp" element={<FormSignUp />} />
        <Route path="/FormSignIn" element={<FormSignIn />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddIncome" element={<AddIncome />} />
        <Route path="/AddExpense" element={<AddExpense />} />
        <Route path="/FilterExpense" element={<FilterExpense />} />
        <Route path="/FilterIncome" element={<FilterIncome />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Inbox" element={<Inbox />} />
      </Routes>

    </>

  );
}
export default App;