import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import './App.css';
import TopBar from "./scenes/global/TopBar"
import SideBar from "./scenes/global/SideBar"
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calendar/Calendar"
import FAQ from "./scenes/faq/FAQ";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";




function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/React-Admin-Dashboard/" element={<Dashboard />} />
              <Route path="/React-Admin-Dashboard/team" element={<Team />} />
              <Route path="/React-Admin-Dashboard/contacts" element={<Contacts />} />
              <Route path="/React-Admin-Dashboard/invoices" element={<Invoices />} />
              <Route path="/React-Admin-Dashboard/form" element={<Form />} />
              <Route path="/React-Admin-Dashboard/calendar" element={<Calendar />} />
              <Route path="/React-Admin-Dashboard/faq" element={<FAQ />} />
              <Route path="/React-Admin-Dashboard/bar" element={<Bar />} />
              <Route path="/React-Admin-Dashboard/pie" element={<Pie />} />
              <Route path="/React-Admin-Dashboard/line" element={<Line />} />
              <Route path="/React-Admin-Dashboard/geography" element={<Geography />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
