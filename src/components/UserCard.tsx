import { FaUserCircle } from "react-icons/fa";

interface peopleToFollowInfo {
  name: string;
  following: boolean;
}

interface UserCardProp {
  key: number;
  person: peopleToFollowInfo;
}

const UserCard = ({ key, person }: UserCardProp) => {
  return (
    <div key={key} className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>
      <button>{person.following ? "Following" : "Follow"}</button>
    </div>
  );
};

export default UserCard;
