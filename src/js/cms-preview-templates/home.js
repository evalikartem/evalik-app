import React from "react";
import format from "date-fns/format";
import Jumbotron from "./components/jumbotron";

const  PostPreview = ({props}) => {
  const {entry, getAsset} = props;

  let image = getAsset(entry.getIn(["data", "image"]));

  // Bit of a nasty hack to make relative paths work as expected as a background image here
  if (image && !image.fileObj) {
    image = window.parent.location.protocol + "//" + window.parent.location.host + image;
  }

  return (
    <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>
      <div className="bg-grey-1 pv4">
        <div className="ph3 mw7 center">
          <div className="flex-l mhn2-l">
            <div className="w-40-l ph2-l">
              <h2 className="f2 b lh-title mb2 w-40-l">{entry.getIn(["data", "blurb", "heading"])}</h2>
              <p className="w-60-l mb0">{entry.getIn(["data", "blurb", "text"])}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <p className="mb4 mw6">{entry.getIn(["data", "intro", "text"])}</p>
          <div className="flex-ns mhn2-ns mb3">
             Card
          </div>
          <div className="tc">
            <a
              href="https://www.amazon.com/dp/B08Q7DWLP4?ref=myi_title_dp&fbclid=IwAR10-Y8WJSqZfSeUOPWJClpPzw9jadxTffQEUOhwxlkDKErkuALPnnveTY8" 
              className="btn raise">
                SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div className="bg-grey-2 pv4">
        <div className="ph3 mw8 center">
          <div className="flex-l mhn2-l">
            <div className="w-80-l ph2-l">
              <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "values", "heading"])}</h2>
              <p class="din">{entry.getIn(["data", "values", "text"])}</p>
            </div>
            <div className="w-60-l ph2-l ml6">
              <img src="/img/home-about-section.jpg" alt="" className="mb3"/>
            </div>
          </div>
          <div className="">
            <a
              href="https://www.amazon.com/dp/B08Q7DWLP4?ref=myi_title_dp&fbclid=IwAR10-Y8WJSqZfSeUOPWJClpPzw9jadxTffQEUOhwxlkDKErkuALPnnveTY8" 
              className="btn raise">
                SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
