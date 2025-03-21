
import * as React from "react";

const Card = ({ profile }) => (
  <>
    <div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
  </>
);

export default Card;