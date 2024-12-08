import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';
import "./Listing.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid(props) {
  console.log("PROPS", props.data);
  const { name, isFeatured, price, discount, ratings, reviews, size, stock, weight, categoryName, color } = props.data;
  return (
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Item>
            <div className="listing--container">
                <a href="#" className="listing--link">
                    {isFeatured && <div className="listing--featured">
                      <span className="listing--featured--badge">Featured</span>
                    </div>
                    }
                    <div className="listing--image--container" style={{paddingTop: "120%"}}>
                        <div className="listing--image--div" style={{paddingTop: "120%"}}>
                            <img className="listing--image" alt="Winter Shawl" src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/v/z/w/m-hood001-multy-mega-sale-original-imah4zm6h3qxtajh.jpeg?q=70"/>
                        </div>
                    </div>
                    <div className="listing--details--section">
                        <div className="listing--details--right">
                          <div><span className="listing--size--span">W</span> {weight}</div>
                          <div><span className="listing--size--span">S</span> {stock}q</div>
                        </div>
                        <div className="listing--category">{categoryName}</div>
                        <div className="listing--name">{name}</div>
                        <div className="listing--price">
                          <div className="listing--price--original">₹{price - (price * discount/100)}</div>
                          <div className="listing--price--mrp">M.R.P.&nbsp;&nbsp;₹{price}</div>
                          <div className="listing--price--discount">({discount}% off)</div>
                        </div>
                        <div className="listing--star">
                          <div className="star-ratings-css">
                            <div className="star-ratings-css-top" style={{width: (ratings / 5) * 100 + "%"}}>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              </div>
                            <div className="star-ratings-css-bottom">
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                          </div>
                          <div className="listing--review">
                            {reviews.length}
                          </div>
                        </div>
                        <div className="listing--color">
                          <span className="listing--size--span">Color</span>
                          {color.map(c => <span className="listing--color-design" key={c} style={{background: c}}></span>)}
                        </div>
                        <div className="listing--size">
                          <span className="listing--size--span">Size</span> {size.join(", ")}
                        </div>
                    </div>
                </a>
            </div>
          </Item>
        </Grid>
  );
}