import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import productsData from "./utility/productsData";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";
import ScreenLoader from "./components/ScreenLoader/ScreenLoader";
import Routing from "./Routing";
import './App.css';


function App() {
  console.log("DAT", productsData);
  return (
    <div className="page-container">
      <Suspense fallback={<ScreenLoader />}>
        <BrowserRouter>
          <HeaderNav />
          <main className="main-section">
            
              <Routing />
            
          </main>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
    // <>
    //   <Container fixed>
    //       <br/>
    //       <Box sx={{ flexGrow: 1 }}>
    //         <Grid container spacing={2}>
    //       {productsData.map(p => <Listing key={p._id} data={p} />)}
    //       </Grid>
    //       </Box>
    //       <br />
    //       <DataTable />
    //       <br/>
    //       <Pagination />
    //       <br />
    //       <SignIn />
    //       <br />
    //   </Container>
    // </>
  );
}

export default App;
