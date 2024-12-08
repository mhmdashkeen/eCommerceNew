import React, { useEffect } from "react";
import axios from "../../utility/axiosUtils";

function ProductListing(){
    const getProductsList = async () => {
        try{
            console.log("Calling");
            const listingBody = {
                "pageIndex": 0,
                "pageSize": 10,
                "searchValue": "",
                "sortActive": "name",
                "sortOrder": "asc"
            }
            const request = await axios.post("/product/list", listingBody);
            const data = await request.data;
            console.log("ABC", data);
        }
        catch(error){
            console.log("Error", error);
        }
    }
    useEffect(() => {
        getProductsList();
    }, [])
    return(
        <h1>Listings</h1>
    )
}

export default ProductListing;