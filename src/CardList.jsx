import Card from "./Card";
const CardList = ({profiles}) => (
	<div>
  	{profiles.map(profile => <Card key={profile.id} profile = {profile}/>)}
	</div>
);
export default CardList;